import { FaHtml5, FaReact, FaNode } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript, IoIosGitMerge } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const skills = [
  { className: "html5", icon: <FaHtml5 />, label: "Html5" },
  { className: "css3", icon: <DiCss3 />, label: "Css3" },
  { className: "js", icon: <IoLogoJavascript />, label: "Javascript" },
  { className: "tailwind", icon: <SiTailwindcss />, label: "Tailwindcss" },
  { className: "react", icon: <FaReact />, label: "React" },
  { className: "next", icon: <RiNextjsFill />, label: "Nextjs" },
  { className: "git", icon: <IoIosGitMerge />, label: "Git" },
  { className: "node", icon: <FaNode />, label: "Node.js" },
];

const SkillWithTooltip = ({ className, icon, label }) => (
  <>
    <div className={`${className} text-6xl md:text-[5rem]`}>{icon}</div>
    <Tooltip anchorSelect={`.${className}`} place="top">
      {label}
    </Tooltip>
  </>
);

const EachSkill = () => (
  <>
    {skills.map((skill, index) => (
      <SkillWithTooltip
        key={index}
        className={skill.className}
        icon={skill.icon}
        label={skill.label}
      />
    ))}
  </>
);

export default EachSkill;
