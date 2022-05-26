
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
                    <p className="text-gray-700 leading-relaxed text-base mb-4">{
                        data?.description
                    }</p>
                    {
                        data?.tags.split(',').map((tag) =>
                            <span
                            key={tag}
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Project
