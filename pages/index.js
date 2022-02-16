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
        <h1 className="text-xl font-bold mb-3">
          Hello, my name is  Muhammed Nazeem
        </h1>
        <p className="text-md text-gray-500">
          I am a full stack developer. My skills lie mainly in the backend, but I am also competent in frontend development. I am passionate about programming and love to solve problems. I have experience with a variety of programming languages and frameworks, and I'm always up for learning new.
        </p>

      </main>
    </div>
  )
}
