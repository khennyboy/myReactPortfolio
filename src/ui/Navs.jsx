import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const socialLinks = [
  { href: "https://github.com/khennyboy",  label: "GitHub",    icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/sheriff-abdullateef-kehinde-3b7545249", label: "LinkedIn", icon: <FaLinkedin /> },
  { href: "#",                              label: "Twitter",   icon: <BsTwitterX /> },
  { href: "https://www.instagram.com/abidemi4339/?hl=en", label: "Instagram", icon: <FaInstagram /> },
];

const Nav = () => (
  <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 z-10 md:px-10">
    <a href="/" className="text-xl font-bold tracking-tight text-white">
      Sheriff<span className="text-violet-500">.</span>
    </a>

    <ul className="flex items-center gap-1">
      {socialLinks.map(({ href, label, icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            target={href !== "#" ? "_blank" : undefined}
            rel={href !== "#" ? "noopener noreferrer" : undefined}
            className="flex items-center justify-center w-9 h-9 rounded-md text-slate-400
                       hover:text-white hover:bg-violet-500/10 transition-colors duration-200
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            <span className="text-[1.1rem]">{icon}</span>
          </a>
        </li>
      ))}

    </ul>
  </nav>
);

export default Nav;
