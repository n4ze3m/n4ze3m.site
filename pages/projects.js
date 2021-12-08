import Head from 'next/head'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Project from '../components/Project'

function Projects({ projects }) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const getData = async () => {
        try {
            const response = await axios.get('/api/projects')
            setData(response.data)
            setLoading(false)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <Head>
                <title>My Projects / n4ze3m.site</title>
                <meta name="description" content="Full-Stack Developer based in Kerala" />

                <meta property="og:url" content="https://n4ze3m.site/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Full-Stack Developer | Muhammed Nazeem | Typescript, JavaScript, Go, Next.js, Node.js" />
                <meta property="og:description" content="Full-Stack Developer based in Kerala | Typescript, JavaScript, Go, Next.js, Node.js, Express.js, Postgres and more" />
                <meta property="og:image" content="/meta.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="n4ze3m.site" />
                <meta property="twitter:url" content="https://n4ze3m.site/" />
                <meta name="twitter:title" content="Full-Stack Web Developer | Muhammed Nazeem | Golang, Typescript, Docker" />
                <meta name="twitter:description" content="Full-Stack Developer based in Kerala | Typescript, JavaScript, Go, Next.js, Node.js, Express.js, Postgres and more" />
                <meta name="twitter:image" content="/meta.jpg" />
            </Head>
            <div className="mt-3">
                <h1 className="font-bold uppercase text-md sm:text-lg">
                    My Favorite Projects
                </h1>
                {
                    loading && !data ? (
                        <div className="text-center loader">
                            <span className="text-gray-800">Loading...</span>
                        </div>
                    ) : (
                        <div className="mt-6 mb-6">
                            {data.map(e => <Project key={e.id} data={e} />)}
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Projects
