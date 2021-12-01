import styles from "../styles/Skel.module.css";
import { motion } from "framer-motion";
import OT from "../components/orange-text";
import SkelScaffold from "../components/skel-scaffold";

export default function About() {
  return (
    <SkelScaffold
      unaccentedText="about"
      accentedText="me"
      toGo="/projects"
      child={AboutContent}
    />
  );
}

function AboutContent() {
  return (
    <>
      <motion.p
        className={styles.contentText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I&lsquo;m a 20 year old software developer from{" "}
        <OT>India</OT>, and I like making useful things!
        <br />
        It all started when I was <OT>16</OT>, and the first language I used was
        {" "}
        <OT>Java</OT>.
        <br /> <br />
        Over the years I&lsquo;ve picked up many <OT>new skills</OT>{" "}
        and worked with many different languages and frameworks.
        <br />
        I love learning about new things, and my curiosity has led me to playing
        around with esoteric languages like <OT>Haskell</OT> and editors like{" "}
        <OT>Vim</OT> and <OT>Emacs</OT>.
        <br /> <br />
        However, my focus is currently on:<br />
        • <OT>Mobile App Development</OT>
        {" - "}either native Android apps using <OT>Kotlin</OT>, or with{" "}
        <OT>Flutter</OT> or <OT>React Native</OT>.
        <br />
        • <OT>Web Development</OT>
        {" - "}mainly back-end using <OT>Javascript</OT>
        {" / "}
        <OT>Typescript</OT>, <OT>Kotlin</OT>, <OT>GoLang</OT>, {"or "}
        <OT>Rust</OT>, and occasionally front-end using <OT>React</OT>.
        <br /> <br />
        I&lsquo;m also a <OT>Linux enthusiast</OT>{" "}
        and have spent a considerable amount of time messing with{" "}
        <OT>kernels</OT>.
        <br /> <br />
        In my free time, I learn <OT>Japanese</OT> and play the{" "}
        <OT>
          keyboard
        </OT>
        {" and "}
        the <OT>guitar</OT>, although I&lsquo;m incredibly rusty at it now.<br />
        <br />
        And oh, I like <OT>cats</OT>!<br />
      </motion.p>
      <div className={styles.bottomFade}/>
    </>
  );
}
