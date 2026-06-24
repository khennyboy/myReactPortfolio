import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const socialLinks = [
  { href: "https://github.com/khennyboy",    label: "GitHub",    icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/sheriff-abdullateef-kehinde-3b7545249", label: "LinkedIn", icon: <FaLinkedin /> },
  { href: "#",                               label: "Twitter",   icon: <BsTwitterX /> },
  { href: "https://www.instagram.com/abidemi4339/?hl=en", label: "Instagram", icon: <FaInstagram /> },
];

const Footer = () => (
  <footer className="flex flex-col items-center gap-4 py-10 mb-6 border-t border-slate-800
                     md:flex-row md:justify-between">
    <span className="text-xl font-bold tracking-tight text-white">
      Sheriff<span className="text-violet-400">.</span>
    </span>

    <ul className="flex items-center gap-1">
      {socialLinks.map(({ href, label, icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            target={href !== "#" ? "_blank" : undefined}
            rel={href !== "#" ? "noopener noreferrer" : undefined}
            className="flex items-center justify-center w-9 h-9 rounded-md text-slate-400
                       hover:text-violet-400 hover:bg-violet-500/10 transition-colors duration-200
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            <span className="text-lg">{icon}</span>
          </a>
        </li>
      ))}
    </ul>

    <p className="text-sm text-slate-500">
      © {new Date().getFullYear()} Sheriff Abdullateef
    </p>
  </footer>
);

export default Footer;
