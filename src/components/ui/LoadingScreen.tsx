import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const primaryColor = '#4A6741'; // Matches --color-primary
  
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background-light dark:bg-background-dark p-6"
    >
      <div className="relative flex flex-col items-center gap-8 md:gap-12 w-full max-w-xs md:max-w-md">
        {/* Custom Responsive Spinner */}
        <div className="relative loader-container">
          <div className="loader-inner first" />
          <div className="loader-inner second" />
        </div>

        {/* Branding */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <span className="text-xl md:text-3xl font-display font-bold text-primary dark:text-moss tracking-[0.25em] md:tracking-[0.4em] uppercase">
            FLETCHED
          </span>
          <div className="h-px w-8 md:w-12 bg-primary/30 dark:bg-moss/30" />
          <p className="text-[10px] md:text-xs text-primary/60 dark:text-moss/60 font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase">
            Precision Performance
          </p>
        </motion.div>

        <style>
          {`
            :root {
              --loader-size: 40px;
              --loader-offset: -40px;
              --loader-border: 6px;
            }

            @media (min-width: 768px) {
              :root {
                --loader-size: 56px;
                --loader-offset: -56px;
                --loader-border: 8px;
              }
            }

            .loader-container {
              width: var(--loader-size);
              height: var(--loader-size);
            }

            .loader-inner {
              content: "";
              width: 100%;
              height: 100%;
              display: block;
              border: var(--loader-border) solid ${primaryColor}20;
              border-radius: 50%;
              position: absolute;
              box-sizing: border-box;
            }

            .loader-inner.first {
              box-shadow: 0 var(--loader-offset) 0 calc(-1 * var(--loader-border)) ${primaryColor};
              animation: spinner-b4c8mmmd 0.5s backwards, spinner-rotate 1.25s 0.5s infinite ease;
            }

            .loader-inner.second {
              box-shadow: 0 var(--loader-offset) 0 calc(-1 * var(--loader-border)) ${primaryColor};
              animation: spinner-rotate 1.25s infinite ease;
              animation-delay: 0.125s;
            }

            @keyframes spinner-b4c8mmmd {
              from {
                box-shadow: 0 0 0 calc(-1 * var(--loader-border)) ${primaryColor};
              }
            }

            @keyframes spinner-rotate {
              to {
                transform: rotate(360deg);
              }
            }
          `}
        </style>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
