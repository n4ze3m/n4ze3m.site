
function Project({ data }) {

    const subHeading = (d) => {
        const github = d?.githubUrl
        const demo = d?.demoUrl

        if (github && demo) {
            return (
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    <a href={github} target="_blank" rel="noopener noreferrer"> Source Code </a>
                    <span className="text-indigo-500 text-xs font-medium title-font"> | </span>
                    <a href={demo} target="_blank" rel="noopener noreferrer"> Live Demo </a>
                </h3>
            )
        } else if (github && !demo) {
            return (
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    <a href={github} target="_blank" rel="noopener noreferrer"> Source Code </a>
                </h3>
            )
        } else if (!github && demo) {
            return (
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    <a href={demo} target="_blank" rel="noopener noreferrer"> Live Demo </a>
                </h3>
            )
        } else {
            return (
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    No Links Available
                </h3>
            )
        }
    }

    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white rounded shadow overflow-hidden">
                <img className="h-60 rounded w-full  object-center mb-6" src={data?.imageUrl} alt="Project screenshot" />
                <div className="p-3">
                    <h2 className="text-lg text-gray-900 font-bold mb-4">{
                        data?.title
                    }</h2>
                    {subHeading(data)}
                    <p className="leading-relaxed text-base mb-3">
                        {
                            data?.description
                        }
                    </p>
                    {
                        data?.tags.split(',').map((tag) => <span key={tag} className="text-sm font-medium bg-gray-200 py-1 px-2 rounded text-black align-middle mr-3">{tag}</span>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Project
