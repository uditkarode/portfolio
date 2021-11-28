/* nextjs Image feels broken */
/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
import ColoredLine from "../components/colored-line";
import CustomButton from "../components/custom-button";
import Link from "next/link";
import { motion } from "framer-motion";
import create from "zustand";
import { useRef } from "react";

const useStore = create<{ animDone: boolean }>((_) => ({
  animDone: false,
}));

export default function Home() {
  const animRef = useRef(useStore.getState().animDone);

  return (
    <div className="container">
      <div className={`${styles.root} ${styles.colFlex}`}>
        <div>
          {/* Colored Line */}
          <motion.figure
            layoutId="line"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: animRef.current ? 0 : 0.5 }}
            className={styles.line}
          >
            <ColoredLine />
          </motion.figure>

          {/* Shapes */}
          <div
            className={`${styles.content} ${styles.colFlex}`}
          >
            <motion.figure
              layoutId="shapes"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: animRef.current ? 0 : 1.5 }}
              className={`no-spacing ${styles.shapes}`}
            >
              <img
                src="/shapes.svg"
                alt="Circle and Triangle"
                className={styles.shapesImg}
              />
            </motion.figure>

            {/* Helper Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: animRef.current ? 0 : 1.5 }}
              className={styles.helperText}
              layoutId="helperText"
            >
              Hi! I&lsquo;m<br />
            </motion.p>

            {/* Name Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: animRef.current ? 0 : 1.5 }}
              className={styles.nameText}
              layoutId="name"
            >
              Udit Karode
            </motion.p>

            {/* Button */}
            <Link href="/about" passHref>
              <a>
                <motion.figure
                  layoutId="nextButton"
                  className={`no-spacing ${styles.nextButton}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: animRef.current ? 0 : 2.5 }}
                  onAnimationComplete={() => {
                    useStore.setState({ animDone: true });
                  }}
                >
                  <CustomButton type="next" />
                </motion.figure>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
