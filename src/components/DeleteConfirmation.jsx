import { useEffect } from 'react';
import ProgressBar from './ProgressBar.jsx';

// Constant representing the timer duration in milliseconds
const TIMER = 3000;

// DeleteConfirmation component for confirming the deletion of a place
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  // useEffect to set up a timer for automatic confirmation
  useEffect(() => {
    // Set up a timer to call onConfirm after TIMER milliseconds
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    // Cleanup function to clear the timer if the component is unmounted or onConfirm changes
    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]); // Depend on onConfirm so that the effect is re-run when onConfirm changes

  // Render the confirmation dialog with buttons and a progress bar
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        {/* Button to cancel the deletion */}
        <button onClick={onCancel} className="button-text">
          No
        </button>
        {/* Button to confirm the deletion */}
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      {/* Progress bar component to visualize the remaining time until automatic confirmation */}
      <ProgressBar timer={TIMER} />
    </div>
  );
}
