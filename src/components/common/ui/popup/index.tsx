// components/Popup.js
import ReactModal from 'react-modal';

function Popup({ isOpen, onRequestClose, children }) {
  return (
    <ReactModal
      isOpen={isOpen}
      className="popup z-50 bg-white lg:w-2/4 mx-5 lg:mx-0 lg:p-52px p-8 focus-within:outline-none relative h-[80vh] md:h-auto md:overflow-y-hidden overflow-y-auto md:top-[55px] top-[52px] lg:top-0"
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="custom-overlay flex h-full w-full top-0 left-0 fixed justify-center items-center"
      bodyOpenClassName="overflow-hidden"
      htmlOpenClassName="overflow-hidden"
    >
      {children}
    </ReactModal>
  );
}

export default Popup;
