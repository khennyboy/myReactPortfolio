import Contact from "../section/Contact"
import Footer from "../section/Footer"
import Profile from "../section/Profile"
import Project from "../section/Projects"
import Skills from "../section/Skills"

const Allpage = () => {
    return (
        <div className="w-[95%] mx-auto md:w-[90%] lg:w-[85%] overflow-hidden">
            <Profile />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default Allpage