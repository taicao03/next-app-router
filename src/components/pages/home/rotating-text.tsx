'use client';
import React from 'react';
import styles from '@/styles/modules/RotatingText.module.css'; // Import css modules stylesheet as styles

const RotatingText = () => {
  return (
    <>
      <div className={styles['wrap-circle']}>
        <div className={styles.scene}>
          <div
            id="letters"
            className={styles.circle}
            data-text="LIVEBYPASSIONWITHMETUB"
          >
            <span style={{ transform: 'rotateY(0deg) translateZ(180px)' }}>
              L
            </span>
            <span
              style={{ transform: 'rotateY(16.3636deg) translateZ(180px)' }}
            >
              I
            </span>
            <span
              style={{ transform: 'rotateY(32.7273deg) translateZ(180px)' }}
            >
              V
            </span>
            <span
              style={{ transform: 'rotateY(49.0909deg) translateZ(180px)' }}
            >
              E
            </span>
            <span
              style={{ transform: 'rotateY(65.4545deg) translateZ(180px)' }}
            >
              B
            </span>
            <span
              style={{ transform: 'rotateY(81.8182deg) translateZ(180px)' }}
            >
              Y
            </span>
            <span
              style={{ transform: 'rotateY(98.1818deg) translateZ(180px)' }}
            >
              P
            </span>
            <span
              style={{ transform: 'rotateY(114.545deg) translateZ(180px)' }}
            >
              A
            </span>
            <span
              style={{ transform: 'rotateY(130.909deg) translateZ(180px)' }}
            >
              S
            </span>
            <span
              style={{ transform: 'rotateY(147.273deg) translateZ(180px)' }}
            >
              S
            </span>
            <span
              style={{ transform: 'rotateY(163.636deg) translateZ(180px)' }}
            >
              I
            </span>
            <span style={{ transform: 'rotateY(180deg) translateZ(180px)' }}>
              O
            </span>
            <span
              style={{ transform: 'rotateY(196.364deg) translateZ(180px)' }}
            >
              N
            </span>
            <span
              style={{ transform: 'rotateY(212.727deg) translateZ(180px)' }}
            >
              W
            </span>
            <span
              style={{ transform: 'rotateY(229.091deg) translateZ(180px)' }}
            >
              I
            </span>
            <span
              style={{ transform: 'rotateY(245.455deg) translateZ(180px)' }}
            >
              T
            </span>
            <span
              style={{ transform: 'rotateY(261.818deg) translateZ(180px)' }}
            >
              H
            </span>
            <span
              style={{ transform: 'rotateY(278.182deg) translateZ(180px)' }}
            >
              M
            </span>
            <span
              style={{ transform: 'rotateY(294.545deg) translateZ(180px)' }}
            >
              E
            </span>
            <span
              style={{ transform: 'rotateY(310.909deg) translateZ(180px)' }}
            >
              T
            </span>
            <span
              style={{ transform: 'rotateY(327.273deg) translateZ(180px)' }}
            >
              U
            </span>
            <span
              style={{ transform: 'rotateY(343.636deg) translateZ(180px)' }}
            >
              B
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RotatingText;
