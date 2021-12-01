import styles from "../styles/Skel.module.css";
import OT from "../components/orange-text";
import ProjectItem from "../components/project-item";
import Link from "next/link";
import { motion } from "framer-motion";
import SkelScaffold from "../components/skel-scaffold";

export default function Projects() {
  return (
    <SkelScaffold
      unaccentedText="my"
      accentedText="projects"
      toGo="/contact"
      child={ProjectsContent}
    />
  );
}

function ProjectsContent() {
  return (
    <>
      <motion.p
        className={styles.contentText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Some of my projects are:
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ position: "relative" }}
        className={styles.contentDiv}
      >
        <div className={styles.projectsHolder}>
          <ProjectItem
            name="axolotl"
            link="https://github.com/axolotl-lang/axolotl"
            description="a statically-typed lisp-like programming language"
            language="Haskell"
            languageColor="#5e5086"
          />

          <ProjectItem
            name="previewer"
            link="https://github.com/batbin-org/previewer"
            description="a blazing-fast preview image generator for batbin.me"
            language="Rust"
            languageColor="#dea584"
          />

          <ProjectItem
            name="able"
            link="https://github.com/uditkarode/AbleMusicPlayer"
            description="a music player for local music or streaming from YouTube"
            language="Kotlin"
            languageColor="#a97bff"
          />

          <ProjectItem
            name="drytype"
            link="https://github.com/uditkarode/drytype"
            description="a runtime type-validation library with TypeScript in mind"
            language="TypeScript"
            languageColor="#2b7489"
          />

          <ProjectItem
            name="montype"
            link="https://github.com/uditkarode/montype"
            description="generate typescript interfaces from mongoose schemas"
            language="Haskell"
            languageColor="#5e5086"
          />

          <ProjectItem
            name="minegram"
            link="https://github.com/uditkarode/minegram"
            description="connect your minecraft and telegram chats with additional utilities"
            language="Go"
            languageColor="#00add8"
          />

          <ProjectItem
            name="ucc"
            link="https://github.com/uditkarode/ucc"
            description="intuitive bash-based wrapper for the borland tcc compiler"
            language="Shell"
            languageColor="#89e051"
          />

          <ProjectItem
            name="hyougen"
            link="https://github.com/uditkarode/deno-hyougen"
            description="a wrapper for koa/oak that makes common tasks simpler"
            language="TypeScript"
            languageColor="#2b7489"
          />
        </div>
        <div className={styles.bottomFade}/>
      </motion.div>

      <motion.p
        className={styles.contentText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        There&lsquo;s more on my{" "}
        <Link href="https://github.com/uditkarode" passHref>
          <a>
            <OT>github</OT>
          </a>
        </Link>{" "}
        account! Some of my work is on organisations where I work with other
        people.
      </motion.p>
    </>
  );
}
