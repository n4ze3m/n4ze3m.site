import Link from "next/link"

function Footer() {
    return (
        <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8" >
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
            {/* center copy right  */}

            {/* social media links */}
            <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3 ml-3">
                <div className="flex flex-col space-y-4">
                    <Link href="/">
                        <a className="text-gray-500 hover:text-gray-600 transition">
                            Home
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className="text-gray-500 hover:text-gray-600 transition">
                            Projects
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col space-y-4">
                    <Link href="https://linkedin.com/in/n4ze3m">
                        <a className="text-gray-500 hover:text-gray-600 transition">
                            Linkedin
                        </a>
                    </Link>
                    <Link href="https://twitter.com/n4ze3m">
                        <a className="text-gray-500 hover:text-gray-600 transition">
                            Twitter
                        </a>
                    </Link>
                    <Link href="https://instagram.com/n4ze3m">
                        <a className="text-gray-500 hover:text-gray-600 transition">
                            Instagram
                        </a>
                    </Link>
                </div>
            </div>
            <div className=" w-full max-w-2xl text-center text-sm text-gray-500 mb-3">
                <span>Copyright &copy; Muhammed Nazeem  {new Date().getFullYear()} </span>
            </div>
        </footer>
    )
}

export default Footer
