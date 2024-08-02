import EachProject from "../ui/EachProject"

const Project = () => {
    return (
        <section className="dark:bg-dark-grey_0 bg-light-grey_50 my-[6rem]
         py-[4rem] lg:py-[6rem] border-light-grey_200 border-[1px] border-solid 
         rounded-[10px] dark:border-dark-grey_200">
            <h2 className="text-3xl indent-8 mb-6 md:text-4xl font-[600]">Projects</h2>
            <div className="md:grid grid-cols-2 gap-8 lg:grid-cols-3">
                <EachProject />
            </div>
        </section>
    )
}

export default Project