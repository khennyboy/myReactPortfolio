import Contact from "../section/Contact";
import Footer from "../section/Footers";
import Profile from "../section/Profile";
import Project from "../section/Project";
import Skill from "../section/Skill";

const Allpage = () => (
  <div className="min-h-screen bg-slate-950 text-white">
    <div className="mx-auto w-[92%] max-w-5xl">
      <Profile />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  </div>
);

export default Allpage;
