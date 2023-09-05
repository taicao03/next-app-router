'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import PropTypes from 'prop-types';
import UICreator from '@/components/pages/home/creator';
function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <motion.span
        style={{
          transform: isInView ? 'none' : 'translateX(-100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
        }}
      >
        {children}
      </motion.span>
    </section>
  );
}
// PropTypes
Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Home() {
  const ref = useRef(null);
  const [isHidden, setIsHidden] = React.useState(false);
  const slideControl = useAnimation();

  useEffect(() => {
    slideControl.start('visible');
  }, []);

  useEffect(() => {
    const onAnimationComplete = () => {
      setIsHidden(true);
    };

    slideControl.start('visible').then(onAnimationComplete);
  }, []);
  return (
    <div className="relative">
      <div className="relative -top-20 w-full">
        <video
          className="object-cover md:h-680"
          autoPlay
          loop={true}
          width="100%"
          controls={false}
          height="100%"
          playsInline
          muted
        >
          <source
            src="https://metub.net/template/images/metub_video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Content */}
      <div className="md:px-[133px]">
        <Section>
          <UICreator />
        </Section>
      </div>

      {/* ANIMATION */}
      <div className="md:block hidden">
        {isHidden ? null : (
          <div ref={ref}>
            <motion.div
              variants={{
                hidden: {
                  opacity: 1,
                },
                visible: {
                  opacity: 0.5,
                },
              }}
              className="left-0 right-0"
              initial="hidden"
              animate={slideControl}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '-83px',
                bottom: '-100%',
                right: 0,
                left: 0,
                background: 'pink',
                zIndex: 40,
              }}
            >
              <div className="my-0 mx-auto h-full">
                {/* <img
                src="https://images.rawpixel.com/dark_image_png_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvc3YxODI3MjgtaW1hZ2Utam9iNjE1XzEucG5n.png?s=IKSzlIxj2E6qEuhMXc9lGjhL76KcFkOH7WSf62UCG98"
                className="h-full my-0 mx-auto"
                alt=""
              /> */}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
