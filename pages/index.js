import Head from 'next/head'
import Image from "next/image"
import Meta from '../components/Meta'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Muhammed Nazeem / Full Stack Developer</title>
        <Meta />
      </Head>
      <div className="flex flex-col justify-center items-start max-w-2xl  mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black">
              Muhammed Nazeem
            </h1>
            <p className="text-md text-gray-500 mb-16">
              I am a full stack developer. My skills lie mainly in the backend, but I am also competent in frontend development. I am passionate about programming and love to solve problems. I have experience with a variety of programming languages and frameworks, and I'm always up for learning new.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Muhammed Nazeem"
              height={176}
              width={176}
              src="/avatar.jpg"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
