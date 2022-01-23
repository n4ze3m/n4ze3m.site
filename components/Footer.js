import Link from "next/link"

function Footer() {
    return (
        <div className="mt-4 border p-3" >
            {/* center copy right  */}
            <div className="text-center text-sm arcade text-white">
                <span> Muhammed Nazeem &copy; {new Date().getFullYear()} </span>
            </div>
            {/* social media links */}
            <div className="text-center text-sm mt-3 mb-3">
                <footer>
                    <Link href="https://linkedin.com/in/n4ze3m">
                        <a>
                            Linkedin
                        </a>
                    </Link>
                    <Link href="https://twitter.com/n4ze3m">
                        <a>
                            Twitter
                        </a>
                    </Link>
                    <Link href="https://instagram.com/n4ze3m">
                        <a>
                            Instagram
                        </a>
                    </Link>
                </footer>
            </div>
        </div>
    )
}

export default Footer
