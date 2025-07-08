import type React from "react";
import type { PaginationProps } from "../../../types";
import { Fragment, useEffect, useRef, useState } from "react";

const DEFAULT_ITEMS_PER_PAGE_OPTIONS = [10, 25, 50, 100];

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
  itemsPerPageOptions = DEFAULT_ITEMS_PER_PAGE_OPTIONS,
  showItemsPerPage = true,
  showItemsInfo = true,
  itemName = "items",
  className = ""
}) => {
  const [pageInput, setPageInput] = useState<string>("");
  const [activeEllipsis, setActiveEllipsis] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  useEffect(() => {
    if (activeEllipsis !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [activeEllipsis]);

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageInput(e.target.value);
  };

  /**
   * Handle form submission for the page input.
   * Validates the input and calls onPageChange if valid.
   * Resets the input field after submission.
   * @param e The form event for the page input.
   */
  const handlePageInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const page = parseInt(pageInput, 10);
    if (!isNaN(page) && page > 0 && page <= totalPages) {
      onPageChange(page);
    } 
    setPageInput("");
    setActiveEllipsis(null);
  };

  const handlePageInputBlur = () => {
    setActiveEllipsis(null);
    setPageInput("");
  };

  /**
   * Handle key down event for the page input.
   * @param e The keyboard event for the page input.
   */
  const handlePageInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setActiveEllipsis(null);
      setPageInput("");
    }
  };

  /**
   * Handle click on ellipsis button.
   * @param ellipsisIndex The index of the ellipsis (0 for first, 1 for second).
   * @param suggestedPage The suggested page number to navigate to.
   */
  const handleEllipsisClick = (ellipsisIndex: number, suggestedPage?: number) => {
    setActiveEllipsis(ellipsisIndex);
    if (suggestedPage) {
      setPageInput(suggestedPage.toString());
    } else {
      setPageInput("");
    }
  };

  /**
   * Handle previous page button click.
   */
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  /**
   * Handle next page button click.
   */
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  /**
   * Get the visible pages for the pagination component.
   * This function calculates which pages to display based on the current page,
   * total pages, and the maximum number of visible pages.
   * It handles ellipses for large page sets and ensures that the current page is always visible.
   * 
   * For ellipses, it suggests a middle page between the first and last visible pages,
   * or between the current page and the total pages, depending on the context.
   * @returns An array of visible pages with ellipses where necessary.
   */
  const getVisiblePages = (): {
    value: number | string;
    type: "page" | "ellipsis";
    ellipsisIndex?: number;
    suggestedPage?: number;
  }[] => {
    const pages: {
      value: number | string;
      type: "page" | "ellipsis";
      ellipsisIndex?: number;
      suggestedPage?: number;
    }[] = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push({ value: i, type: 'page' });
      }
    } else {
      pages.push({ value: 1, type: 'page' });
      
      if (currentPage <= 4) {
        for (let i = 2; i <= Math.min(5, totalPages - 1); i++) {
          pages.push({ value: i, type: 'page' });
        }
        if (totalPages > 5) {
          // First ellipsis - suggest middle page between 5 and totalPages
          const suggestedPage = Math.floor((6 + totalPages) / 2);
          pages.push({ 
            value: '...', 
            type: 'ellipsis', 
            ellipsisIndex: 0,
            suggestedPage 
          });
        }
      } else if (currentPage > totalPages - 3) {
        if (totalPages > 5) {
          // Second ellipsis - suggest middle page between 1 and (totalPages - 4)
          const suggestedPage = Math.floor((1 + (totalPages - 4)) / 2);
          pages.push({ 
            value: '...', 
            type: 'ellipsis', 
            ellipsisIndex: 1,
            suggestedPage 
          });
        }
        for (let i = Math.max(totalPages - 4, 2); i < totalPages; i++) {
          pages.push({ value: i, type: 'page' });
        }
      } else {
        // First ellipsis - suggest page between 1 and (currentPage - 1)
        const firstSuggested = Math.floor((1 + (currentPage - 1)) / 2);
        pages.push({ 
          value: '...', 
          type: 'ellipsis', 
          ellipsisIndex: 0,
          suggestedPage: firstSuggested 
        });
        
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push({ value: i, type: 'page' });
        }
        
        // Second ellipsis - suggest page between (currentPage + 1) and totalPages
        const secondSuggested = Math.floor(((currentPage + 1) + totalPages) / 2);
        pages.push({ 
          value: '...', 
          type: 'ellipsis', 
          ellipsisIndex: 1,
          suggestedPage: secondSuggested 
        });
      }

      if (totalPages > 1) {
        pages.push({ value: totalPages, type: 'page' });
      }
    }

    return pages;
  };

  if (totalItems === 0) {
    return null;
  }

  return (
    <div className={`pagination ${className}`}>
      {/* Items per page selector */}
      <div className="pagination-header">
        {showItemsPerPage && onItemsPerPageChange && (
          <div className="pagination-info">
            <div className="items-per-page">
              <label htmlFor="itemsPerPage">Show:</label>
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={(e) => {onItemsPerPageChange(Number(e.target.value))}}
                className="items-per-page-select"
              >
                {itemsPerPageOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <span>per page</span>
            </div>
            
            {showItemsInfo && (
              <div className="showing-info">
                Showing {startItem}-{endItem} of {totalItems} {itemName}
              </div>
            )}
          </div>
        )}
      </div>

      {/*Pagination controls*/}
      <div className="pagination-controls">
        <button
          type="button"
          className="pagination-btn pagination-prev"
          onClick={handlePreviousPage}
          disabled={currentPage <= 1}
        >
          ←
        </button>

        <div className="pagination-pages">
          {getVisiblePages().map((page, index) => (
            <Fragment key={`ellipsis-${page.value.toString()}-${index.toString()}`}>
              {page.type === 'ellipsis' ? (
                <div className="pagination-ellipsis-container">
                  {activeEllipsis === page.ellipsisIndex ? (
                    <form
                      onSubmit={handlePageInputSubmit}
                      className="ellipsis-input-form"
                    >
                      <input
                        ref={inputRef}
                        type="number"
                        min={1}
                        max={totalPages}
                        value={pageInput}
                        onChange={handlePageInputChange}
                        onBlur={handlePageInputBlur}
                        onKeyDown={handlePageInputKeyDown}
                        className="ellipsis-page-input"
                        placeholder=""
                      />
                    </form>
                ) : (
                  <button
                    type="button"
                    className="pagination-ellipsis"
                    onClick={() => {
                      if (page.ellipsisIndex !== undefined) {
                        handleEllipsisClick(page.ellipsisIndex, page.suggestedPage);
                      }
                    }}
                    title={`Jump to page (suggested: ${(page.suggestedPage !== undefined ? page.suggestedPage.toString() : "")})`}
                  >
                    ...
                  </button>
                )}
              </div>
            ) : (
              <button
                type="button"
                className={`pagination-page ${currentPage === page.value ? 'active' : ''}`}
                onClick={() => {onPageChange(Number(page.value))}}
                title={`Go to page ${page.value.toString()}`}
              >
                {page.value}
              </button>
            )}
          </Fragment>
          ))}
        </div>

        <button
          type="button"
          className="pagination-btn pagination-next"
          onClick={handleNextPage}
          disabled={currentPage >= totalPages}
        >
          →
        </button>
      </div>

      {/* Go to page input */}
      {/* {showGoToPage && (
        <div className="goto-page">
          <form onSubmit={handlePageInputSubmit} className="goto-form">
            <label htmlFor="pageInput">Go to page:</label>
            <input
              id="pageInput"
              type="number"
              min={1}
              max={totalPages}
              value={pageInput}
              onChange={handlePageInputChange}
              className="page-input"
            />
            <button type="submit" className="goto-btn">Go</button>
          </form>
          <span className="page-info">of {totalPages}</span>
        </div>
      )} */}
    </div>
  );
};

export default Pagination;