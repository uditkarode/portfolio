import styles from "../styles/Others.module.css";
import OT from "../components/orange-text";
import ProjectItem from "../components/project-item";
import Link from "next/link";
import { motion } from "framer-motion";
import OtherPageScaffold from "../components/other-page-scaffold";

export default function Projects() {
  return (
    <OtherPageScaffold
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
        className={styles.contentDiv}
      >
        <div className={styles.projectsHolder}>
          <ProjectItem
            name="montype"
            link="https://github.com/uditkarode/montype"
            description="generate typescript interfaces from mongoose schemas"
            language="Haskell"
            languageColor="#5E5086"
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
            languageColor="#2B7489"
          />

          <ProjectItem
            name="previewer"
            link="https://github.com/batbin-org/previewer"
            description="a blazing-fast preview image generator for b.uditkaro.de"
            language="Rust"
            languageColor="#DEA584"
          />

          <ProjectItem
            name="minegram"
            link="https://github.com/uditkarode/minegram"
            description="connect your minecraft and telegram chats"
            language="Go"
            languageColor="#00ADD8"
          />

          <ProjectItem
            name="ucc"
            link="https://github.com/uditkarode/ucc"
            description="intuitive bash-based wrapper for the borland tcc compiler (used in turboC)"
            language="Shell"
            languageColor="#89e051"
          />

          <ProjectItem
            name="danger-buggy"
            link="https://github.com/uditkarode/DangerBuggy"
            description="a game made using the borland graphics interface, my high school project"
            language="C++"
            languageColor="#f34b7d"
          />

          <ProjectItem
            name="arch-installation"
            link="https://github.com/uditkarode/ArchInstallationTeX"
            description="a simple arch linux installation guide for beginners"
            language="TeX"
            languageColor="#3d6117"
          />
        </div>
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
