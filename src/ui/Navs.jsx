import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const socialLinks = [
  { href: "https://github.com/khennyboy", label: "GitHub", icon: <FaGithub /> },
  {
    href: "https://www.linkedin.com/in/sheriff-abdullateef-kehinde-3b7545249",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  { href: "#", label: "Twitter", icon: <BsTwitterX /> },
  {
    href: "https://www.instagram.com/abidemi4339/?hl=en",
    label: "Instagram",
    icon: <FaInstagram />,
  },
];

const Nav = () => (
  <nav className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between py-5">
    <a
      href="/"
      className="text-xl font-bold tracking-tight text-white md:text-2xl"
    >
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
            className="flex h-9 w-9 items-center justify-center rounded-md text-slate-400 transition-colors duration-200 hover:bg-violet-500/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            <span className="text-[1.1rem]">{icon}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
