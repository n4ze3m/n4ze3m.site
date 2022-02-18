import Link from "next/link"

function Nav() {
    return (
        <nav>
            <Link href="/">
                <a className="text-gray-500 uppercase font-bold">
                    Home
                </a>
            </Link>
            <Link href="/projects">
                <a className="text-gray-500 uppercase font-bold">
                    Projects
                </a>
            </Link>
            <Link href="https://github.com/nazeemnato">
                <a className="text-gray-500 uppercase font-bold">
                    Github
                </a>
            </Link>
            <Link href="mailto:n4ze3m@gmail.com">
                <a className="text-gray-500 uppercase font-bold">
                    Mail
                </a>
            </Link>
        </nav>
    )
}

export default Nav
