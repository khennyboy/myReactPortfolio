import EachProject from "../ui/EachProject"

const Project = () => {
    return (
        <section className="dark:bg-dark-grey_0 bg-light-grey_50 my-[4rem] py-[4rem] lg:py-[6rem]">
            <h2 className="text-3xl indent-8 mb-6 md:text-4xl font-[500]">Projects</h2>
            <div>
                <EachProject />
            </div>
        </section>
    )
}

export default Project