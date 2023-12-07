import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

// Modal component for rendering a modal dialog
function Modal({ open, children, onClose }) {
  // Ref to the <dialog> element
  const dialog = useRef();

  // useEffect to handle modal visibility based on the 'open' prop
  useEffect(() => {
    if (open) {
      // If open is true, show the modal
      dialog.current.showModal();
    } else {
      // If open is false, close the modal
      dialog.current.close();
    }
  }, [open]);

  // Use createPortal to render the modal as a child of a different DOM element
  return createPortal(
    // The modal element with className, ref, and onClose event handler
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {/* Render children only when the modal is open */}
      {open ? children : null}
    </dialog>,
    // The target DOM element to render the modal as a child
    document.getElementById('modal')
  );
}

export default Modal;
