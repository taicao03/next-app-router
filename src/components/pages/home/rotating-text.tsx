'use client';
import React from 'react';
import styles from '@/styles/modules/RotatingText.module.css'; // Import css modules stylesheet as styles

const RotatingText = () => {
  const sologan = 'LIVEBYPASSIONWITHMETUB';
  const sologanLength = sologan.length;
  const sologanArr = sologan.split('');

  return (
    <>
      <div className={styles['wrap-circle']} style={{ left: '-5px' }}>
        <div className={styles.scene}>
          <div
            id="letters"
            className={styles.circle}
            data-text="LIVEBYPASSIONWITHMETUB"
          >
            {sologanArr.map((letter, index) => {
              const letterStyle = {
                transform: `rotateY(${
                  (index * 360) / sologanLength
                }deg) translateZ(180px)`,
              };
              return (
                <span key={index} style={letterStyle}>
                  {letter}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RotatingText;
