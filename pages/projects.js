import Head from 'next/head'
import { useState, useEffect } from 'react'
import Project from '../components/Project'
import Meta from '../components/Meta'
import { GET_PROJECTS } from "../graphql/query"
import {
    useQuery,
} from "@apollo/client";
function Projects() {

    const {
        data,
        loading,
        error
    } = useQuery(GET_PROJECTS)

    return (
        <>
            <Head>
                <title>My Projects / n4ze3m.site</title>
                <Meta />
            </Head>
            <h1 className="font-bold text-2xl tracking-tight mb-4 text-black">
                Projects
            </h1>
            <p>
                Some of my favorite projects I build in my free time. Rest of the projects are available on <a href="https://github.com/nazeemnato" className="git-a">My Github profile </a>
            </p>
            {
                loading && (
                    <div>Loading...</div>
                )
            }
            {
                error && (
                    <div>Error!</div>
                )
            }
            {
                data && (
                    <div className="container  py-14 mx-auto max-w-7x1">
                        <div className="flex flex-wrap -m-4">
                            {
                                data?.project.map(p => (
                                    <Project
                                        key={p.id}
                                        data={p}
                                    />
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Projects
