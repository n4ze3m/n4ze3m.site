import Head from 'next/head'
import Gif from "../components/Gif"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Muhammed Nazeem / Full Stack Developer</title>
        <meta name="description" content="Full-Stack Developer based in Kerala" />

        <meta property="og:url" content="https://n4ze3m.site/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Full-Stack Web Developer | Muhammed Nazeem | Typescript, JavaScript, Go, Next.js, Node.js" />
        <meta property="og:description" content="Full-Stack Developer based in Kerala | Typescript, JavaScript, Go, Next.js, Node.js, Express.js, Postgres and more" />
        <meta property="og:image" content="/meta.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="n4ze3m.site" />
        <meta property="twitter:url" content="https://n4ze3m.site/" />
        <meta name="twitter:title" content="Full-Stack Developer | Muhammed Nazeem | Golang, Typescript, Docker" />
        <meta name="twitter:description" content="Full-Stack Developer based in Kerala | Typescript, JavaScript, Go, Next.js, Node.js, Express.js, Postgres and more" />
        <meta name="twitter:image" content="/meta.jpg" />
      </Head>
      <main className="intro">
        <h1 className="heading text-xl sm:text-3xl mt-10 neelde">
          {"Hey, I'm  Nazeem."}
        </h1>
        <p className="text-md text-white mt-3 saturno">
          A passionate Full-Stack Developer with a passion for building scalable and maintainable applications using the latest technologies
        </p>
        <div className="mt-6">
          <h1 className="font-bold uppercase text-md sm:text-lg yellow arcade">
            Skills
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4 mb-4" >
            <li>
              <Gif
                url="https://c.tenor.com/rVkReKNBXmUAAAAC/vuongnhatbac-wangyibo.gif"
              />
            </li>
            <li>
              <Gif
                url="https://c.tenor.com/MzJE99H8NLsAAAAM/js-javascript.gif"
              />
            </li>
            <li>
              <Gif
                url="https://c.tenor.com/vOdTc2eO_UIAAAAd/typescript-death-glare.gif"
              />
            </li>
            <li>
              <Gif
                url="https://c.tenor.com/fMUOPRVdSzUAAAAM/python.gif"
              />
            </li>
            <li>
              <Gif
                url="https://c.tenor.com/PAupC4FagM0AAAAM/darts-target.gif"
              />
            </li>
            <li>
              <Gif
                url="https://c.tenor.com/z3Vqx6hmE5QAAAAM/whale-docker.gif"
              />
            </li>
            <li>
              <Gif
                url="https://c.tenor.com/aYGqQxV9yp4AAAAM/koob-cuddle.gif"
              />
            </li>
            <li>
              <Gif
                url="https://c.tenor.com/yfRbDajBsC8AAAAM/spongebob-database.gif"
              />
            </li>
          </div>
          <span className="text-white mt-4 arcade"> and more...</span>
        </div>
      </main>
    </div>
  )
}
