import { useState } from "react";
import { FaHtml5, FaReact, FaNode } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript, IoIosGitMerge } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const skills = [
  { id: "html5",    icon: <FaHtml5 />,         label: "HTML5",        color: "#E34F26" },
  { id: "css3",     icon: <DiCss3 />,           label: "CSS3",         color: "#1572B6" },
  { id: "js",       icon: <IoLogoJavascript />, label: "JavaScript",   color: "#F7DF1E" },
  { id: "tailwind", icon: <SiTailwindcss />,     label: "Tailwind CSS", color: "#06B6D4" },
  { id: "react",    icon: <FaReact />,           label: "React",        color: "#61DAFB" },
  { id: "next",     icon: <RiNextjsFill />,      label: "Next.js",      color: "#E2E8F0" },
  { id: "git",      icon: <IoIosGitMerge />,     label: "Git",          color: "#F05032" },
  { id: "node",     icon: <FaNode />,            label: "Node.js",      color: "#339933" },
];

const SkillIcon = ({ id, icon, label, color }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        id={`skill-${id}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="text-5xl md:text-6xl transition-all duration-200 cursor-default"
        style={{
          color: hovered ? color : "#475569",
          filter: hovered ? `drop-shadow(0 0 12px ${color}88)` : "none",
          transform: hovered ? "translateY(-4px) scale(1.1)" : "none",
        }}
      >
        {icon}
      </div>
      <Tooltip anchorSelect={`#skill-${id}`} place="top" content={label} />
    </>
  );
};

const EachSkill = () => (
  <>
    {skills.map((skill) => (
      <SkillIcon key={skill.id} {...skill} />
    ))}
  </>
);

export default EachSkill;
