/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Skel.module.css";
import ColoredLine from "./colored-line";
import CustomButton from "./custom-button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SkelScaffold(
  props: {
    unaccentedText: string;
    accentedText: string;
    toGo: string;
    isButtonRotated?: boolean;
    isButtonLarge?: boolean;
    child: React.FunctionComponent;
  },
) {
  return (
    <div className="container">
      <div className={`${styles.root} ${styles.colFlex}`}>
        <div className={`${styles.content} ${styles.colFlex}`}>
          <div className={`${styles.heading}`}>
            <motion.figure
              layoutId="shapes"
              className="no-spacing"
            >
              <div className={`no-spacing ${styles.shapes}`}>
                <img
                  src="/shapes.svg"
                  alt="Circle and Triangle"
                  className={styles.shapesImg}
                />
              </div>
            </motion.figure>

            <motion.p
              className={styles.headingHelperText}
              layoutId="helperText"
            >
              {props.unaccentedText}
              <motion.span
                className={styles.headingAccentedText}
                layoutId="name"
              >
                {" " + props.accentedText}
              </motion.span>
            </motion.p>
          </div>
          <motion.figure layoutId="line" className="no-spacing">
            <ColoredLine />
          </motion.figure>
          <div className="scrollable">
            <props.child />
          </div>
          <div className={`${styles.buttonHolder} ${styles.colFlex}`}>
            <div className={styles.buttonSeparator} />

            <div className={styles.buttons}>
              <Link href={props.toGo} passHref>
                <a>
                  <motion.figure
                    layoutId="nextButton"
                    style={{ rotate: props.isButtonRotated ? 180 : 0 }}
                    className={props.isButtonLarge
                      ? "no-spacing"
                      : `no-spacing ${styles.nextButton}`}
                  >
                    <CustomButton
                      type="next"
                    />
                  </motion.figure>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
