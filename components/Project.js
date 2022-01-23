import Link from 'next/link'

function Project({ data }) {
    const url = data?.demo_url || data?.github_url
    return (
        <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-white">
            <Link href={url}>
                <a>
                    <div className="flex flex-row space-x-2">
                        <h1 className="text-xl text-center font-bold text-white">
                            {data.name}
                        </h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </a>
            </Link>
            <hr className="my-4" />
            <p className="text-white">{data.description}</p>
        </div>
    )
}

export default Project
