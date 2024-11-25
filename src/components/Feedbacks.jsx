import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const AchievementCard = ({ index, title, description, date }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <h3 className='text-white font-bold text-[24px]'>{title}</h3>
      <p className='text-secondary text-[16px] mt-2'>{description}</p>
      <p className='text-white-100 text-[14px] mt-4'>{date}</p>
    </div>
  </motion.div>
);

const achievements = [
  {
    title: "Neo Clouds Founder",
    description: "Conceptualized and developed a cloud-based platform offering GPU clusters for high-end computational tasks, pitched to investors like Y Combinator.",
    date: "2024",
  },
  {
    title: "Microsoft Data Analyst Certification",
    description: "Completed Microsoft's official 'Data Analyst Career Path,' covering data profiling, cleaning, visualization, and advanced analytics integration.",
    date: "2024",
  },
  {
    title: "Certified FPS Game Developer",
    description: "Earned certification for developing FPS games, showcasing expertise in game development and immersive 3D experiences.",
    date: "2024",
  },
  {
    title: "Hackathon Achiever",
    description: "Actively participated in multiple hackathons, showcasing innovative AI and software solutions.",
    date: "Ongoing",
  },
  {
    title: "Machine Learning Projects",
    description: "Developed unique ML/DL applications like synthetic data generation and real-world movement simulation for 3D environments.",
    date: "2024",
  },
  {
    title: "Microsoft AI Engineer Certification",
    description: "Completed Microsoft's official 'AI Engineer Career Path,' focusing on AI algorithm development, programming, and data engineering for advanced AI systems.",
    date: "2024",
  }
];



const Achievements = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Recognition</p>
          <h2 className={styles.sectionHeadText}>Achievements & Certifications</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} index={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "");
