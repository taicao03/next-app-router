import React from 'react';

const OffCanvas = ({ isOpen, onClose, children }) => {
  const offCanvasClassName = isOpen
    ? `offcanvas open ${isOpen ? 'fade-in-right' : 'slide-out-right'}`
    : 'offcanvas';

  return (
    <div className={offCanvasClassName}>
      <div className="offcanvas-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default OffCanvas;
