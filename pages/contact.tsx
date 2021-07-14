import styles from "../styles/Others.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import OT from "../components/orange-text";
import OtherPageScaffold from "../components/other-page-scaffold";

export default function Contact() {
  return (
    <OtherPageScaffold
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
      </Link>.
      <br /> <br />
      An{"  "}
      <Link href="mailto:udit.karode@gmail.com">
        <a>
          <OT>email</OT>
        </a>
      </Link>{" "}
      works as well.
    </motion.p>
  );
}
