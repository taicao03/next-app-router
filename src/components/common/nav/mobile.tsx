import React from 'react';

const OffCanvas = ({ isOpen, onClose, children }) => {
  const offCanvasClassName = isOpen
    ? `offcanvas open z-40 ${isOpen ? 'fade-in-right' : 'slide-out-right'}`
    : 'offcanvas z-40';

  return (
    <div className={offCanvasClassName}>
      <div className="offcanvas-content">
        <button
          className="close-button bg_close rounded-full p-2 focus-within:bg-primary float-right"
          onClick={onClose}
        >
          <img src="/images/svg/icon/close.svg" className="h-5 w-5" alt="" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default OffCanvas;
