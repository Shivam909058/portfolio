import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Resume = () => {
  const resumeUrl = "https://drive.google.com/file/d/1YJSh1JB2p54TOrPoPAYSx8VKC9kNGe_L/view?usp=sharing";
  
  // Convert Google Drive link to direct download link
  const getDirectDownloadLink = (url) => {
    const fileId = url.split('/')[5];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  };

  return (
    <motion.div variants={textVariant()}>
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <h2 className={styles.sectionHeadText}>Resume</h2>
        <p className={`${styles.sectionSubText} text-center mb-10`}>
          Download my resume to learn more about my experience
        </p>
        
        <div className="flex gap-5">
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
          >
            <a
              href={getDirectDownloadLink(resumeUrl)}
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              download="Shivam_Resume.pdf"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn("", "", 0.2, 1)}
          >
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              View Resume
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Resume, "resume"); 