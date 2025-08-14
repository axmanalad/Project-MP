import React, { useEffect, useState } from 'react';
import { wishImportData } from '../../../../data/wishStats';
import type { WishImportInstructionsProps } from '../../../../types';
import StepCard from '../StepCard';

const WishImportModal: React.FC<WishImportInstructionsProps> = ({ isOpen, onClose, gameId }) => {
  const [importUrl, setImportUrl] = useState('');
  const [step, setStep] = useState(1);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');

      return () => {
        document.body.classList.remove('modal-open');
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const getGameInstructions = ( gameId: number ) => {
    return wishImportData[gameId];
  };

  const gameInstructions = getGameInstructions(gameId);

  const handleImport = () => {
    // TODO: This will be implemented in backend phase
    console.log('Import URL:', importUrl);
    onClose();
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus('copied');
      setTimeout(() => {
        setCopyStatus('idle');
      }, 2000); // Reset status after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content wish-import-modal">
        <div className="modal-header">
          <h2>Import {gameInstructions.gameName} Wish History</h2>
          <button type="button" onClick={onClose} className="modal-close">×</button>
        </div>

        <div className="modal-body">
          {step === 1 && (
            <div className="step-content">
              <StepCard step="Step 1: Prepare Your Game"
                instructionList={gameInstructions.steps}
              />
              <div className="warning-box">
                <div className="warning-icon">⚠️</div>
                <div>
                  <strong>Important:</strong> Make sure you're logged into the correct account 
                  and have opened the wish history page before proceeding.
                </div>
              </div>

              <div className="step-actions">
                <button 
                  type="button"
                  onClick={() => {setStep(2);}}
                  className="btn step-btn"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="step-content">
              <StepCard step="Step 2: Run PowerShell Script"
                instruction="Run the following command PowerShell (Administrator):"
              />
              <div className="code-block">
                <div className="code-header">
                  <span>PowerShell Command</span>
                  <button 
                    type="button"
                    onClick={() => {void copyToClipboard(`iwr -useb "https://localhost:5173/${gameInstructions.scriptName}" | iex`);}}
                    className={`copy-btn ${copyStatus === 'copied' ? 'copied' : ''}`}
                    disabled={copyStatus === 'copied'}
                  >
                    {copyStatus === 'copied' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <code>
                  iwr -useb "https://localhost:5173/{gameInstructions.scriptName}" | iex
                </code>
              </div>

              <div className="info-box">
                <div className="info-icon">💡</div>
                <div>
                  <strong>What this does:</strong> This script safely extracts your wish history 
                  from the game's cache and generates a secure URL for import.
                </div>
              </div>

              <div className="step-actions">
                <button 
                  type="button"
                  onClick={() => {setStep(1);}}
                  className="btn step-btn"
                >
                  ← Back
                </button>
                <button 
                  type="button"
                  onClick={() => {setStep(3);}}
                  className="btn step-btn"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="step-content">
              <StepCard step="Step 3: Paste Import URL"
                instruction="Make sure the URL starts with 'https://localhost:5173/' and ends with your game ID."
              />              
              <div className="form-group">
                <label htmlFor="importUrl">Import URL:</label>
                <textarea
                  id="importUrl"
                  value={importUrl}
                  onChange={(e) => {setImportUrl(e.target.value);}}
                  placeholder="Paste your wish history URL here..."
                  className="import-url-input"
                  rows={3}
                />
              </div>

              <div className="import-preview">
                <h4>What will be imported:</h4>
                <ul>
                  <li>✅ All your wish history from the game</li>
                  <li>✅ Accurate timestamps and pity counts</li>
                  <li>✅ Character and weapon details</li>
                  <li>✅ Banner type information</li>
                </ul>
              </div>

              <div className="step-actions">
                <button 
                  type="button"
                  onClick={() => {setStep(2);}}
                  className="btn step-btn"
                >
                  ← Back
                </button>
                <button 
                  type="button"
                  onClick={handleImport}
                  disabled={!importUrl.trim()}
                  className="btn step-btn"
                >
                  Import Wishes
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <div className="step-indicator">
            <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishImportModal;