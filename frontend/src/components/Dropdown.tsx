import React, { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { DropdownProps } from "../types";

const Dropdown: React.FC<DropdownProps> = ({ trigger, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  useEffect(() => {
    function changeArrow() {
      if (isOpen) {
        return document.querySelector(".dropdown-arrow")!.textContent = '▴';
      }
      return document.querySelector(".dropdown-arrow")!.textContent = '▾';
    }
    changeArrow();
  }, [isOpen]);

  return (
    <div className={`dropdown-container ${className}`} ref={dropdownRef}>
      <div className="dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

    {isOpen && (
      <div className="dropdown-menu">
        {children}
      </div>
    )}
    </div>
  );
}

export const DropdownItem: React.FC<{
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ children, onClick, className = '' }) => (
  <div className={`dropdown-item ${className}`} onClick={onClick}>
    {children}
  </div>
);

export const DropdownDivider: React.FC = () => (
  <div className="dropdown-divider"></div>
);

export default Dropdown;