import React, { useEffect, useRef } from 'react';

function Modal({ children, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscapeKey = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal">
        {children}
      </div>
    </div>
  );
}

export default Modal;
