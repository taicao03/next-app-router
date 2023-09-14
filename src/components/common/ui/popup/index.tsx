import ReactModal from 'react-modal';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Popup({ isOpen, onRequestClose, children, data }) {
  return (
    <ReactModal
      isOpen={isOpen}
      className={`popup z-50 bg-white lg:w-3/4 xxl:w-2/4 mx-5 slide-in-elliptic-top-fwd lg:mx-0 lg:p-52px p-8 focus-within:outline-none relative h-[80vh] md:h-auto md:overflow-y-hidden overflow-y-auto md:top-[55px] top-[52px] lg:top-0`}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="custom-overlay z-50 flex h-full w-full top-0 left-0 fixed justify-center items-center"
      bodyOpenClassName="overflow-hidden"
      htmlOpenClassName="overflow-hidden"
    >
      <div className="grid md:grid-cols-3 grid-cols-2 gap-8 xxl:gap-[52px]">
        <div className="md:col-span-1 col-span-2">
          <div className="icon-img relative before:absolute before:content-[''] after:content-['] after:md:h-[48px] after:md:w-[48px]  after:h-[40px] after:w-[40px] before:md:h-[56px] before:md:w-[56px] before:w-[48px] before:h-[48px] before:top-[55%] before:left-[-25px] before:rounded-[100px]">
            <motion.img
              src={data?.avatar}
              initial={{ opacity: 0.2, y: 150 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
              alt="Portfolio project"
              className="rounded-b-[500px] rounded-t-[36px] lg:h-[488px] h-[415px]"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>
        </div>
        <div className="md:col-span-2 col-span-2">
          <motion.h2
            className="lg:text-title_44_52_600 text-title_28_36_600 text-black mb-1"
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { delay: 0.8 },
            }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.8, ease: 'circInOut' }}
            exit={{ opacity: 0, x: 20, y: 0 }}
          >
            {data?.name}
          </motion.h2>
          <div>
            <motion.div
              className="text-primary text-base mb-2"
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                transition: { delay: 1 },
              }}
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 1, ease: 'backInOut' }}
              exit={{ opacity: 0, x: 20, y: 0 }}
            >
              <Link href={'/'}>@melive.official</Link>
            </motion.div>

            <motion.p
              className="text-gray text-base"
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                transition: { delay: 1.1 },
              }}
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 1.1, ease: 'backInOut' }}
              exit={{ opacity: 0, x: 20, y: 0 }}
            >
              {data?.description}
            </motion.p>
          </div>
        </div>
      </div>
      {children}
    </ReactModal>
  );
}

export default Popup;
