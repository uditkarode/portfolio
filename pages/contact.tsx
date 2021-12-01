import styles from "../styles/Skel.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import OT from "../components/orange-text";
import SkelScaffold from "../components/skel-scaffold";

export default function Contact() {
  return (
    <SkelScaffold
      unaccentedText="contact"
      accentedText="me"
      toGo="/"
      isButtonRotated={true}
      isButtonLarge={true}
      child={ContactContent}
    />
  );
}

function ContactContent() {
  return (
    <motion.p
      className={`${styles.contentText}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      The fastest way to reach me is through{" "}
      <Link href="https://t.me/uditkarode/">
        <a>
          <OT>Telegram</OT>
        </a>
      </Link>
      .
      <br /> <br />
      An{"  "}
      <Link href="mailto:me@udit.krd">
        <a>
          <OT>email</OT>
        </a>
      </Link>{" "}
      works as well.
    </motion.p>
  );
}
