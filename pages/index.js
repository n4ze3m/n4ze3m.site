import Head from 'next/head'

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
        <meta property="og:image" content="/meta.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="n4ze3m.site" />
        <meta property="twitter:url" content="https://n4ze3m.site/" />
        <meta name="twitter:title" content="Full-Stack Developer | Muhammed Nazeem | Golang, Typescript, Docker" />
        <meta name="twitter:description" content="Full-Stack Developer based in Kerala | Typescript, JavaScript, Go, Next.js, Node.js, Express.js, Postgres and more" />
        <meta name="twitter:image" content="/meta.png" />
      </Head>
      <main className="intro">
        <h1 className="heading text-xl sm:text-3xl mt-10">
          Hey 👋, I'm  Nazeem.
        </h1>
        <p className="text-md text-gray-500 bg-blue mt-3">
          {
            `I'm a full stack developer with over ${new Date().getFullYear() - 2019} years of experience. Experienced with all stages of the development cycle for web and mobile applications.`
          }
        </p>
        <div className="mt-6">
          <h1 className="font-bold uppercase text-md sm:text-lg">
            Skills
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4 mb-4" >
            <li className="text-gray-500"> Golang</li>
            <li className="text-gray-500"> JavaScript</li>
            <li className="text-gray-500"> TypeScript</li>
            <li className="text-gray-500"> Python</li>
            <li className="text-gray-500"> Dart</li>
            <li className="text-gray-500"> Solidity</li>
            <li className="text-gray-500"> PHP</li>
            <li className="text-gray-500"> Bash</li>
            <li className="text-gray-500"> HTML</li>
            <li className="text-gray-500"> C</li>
            <li className="text-gray-500"> C++</li>
            <li className="text-gray-500"> MySQL</li>
            <li className="text-gray-500"> Postgres</li>
            <li className="text-gray-500"> MongoDB</li>
            <li className="text-gray-500"> Docker</li>
            <li className="text-gray-500"> Kubernetes</li>
          </div>
          <span className="text-gray-400 mt-4"> and more...</span>
        </div>
      </main>
    </div>
  )
}
