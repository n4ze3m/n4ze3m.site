import Head from 'next/head'
import axios from 'axios'

// server side data fetching
export async function getServerSideProps() {
    const {data} = await axios.get("/api/projects")
    return {
        props: {
            projects: data
        }
    }
}

function Projects({projects}) {
    return (
        <>
            <Head>
                <title>My Projects / n4ze3m.site</title>
            </Head>
            <div className="mt-3">
                <h1 className="font-bold uppercase text-md sm:text-lg">
                    My Favorite Projects
                </h1>
                {projects.length}
            </div>
        </>
    )
}

export default Projects
