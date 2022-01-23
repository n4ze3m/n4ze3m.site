import Link from "next/link"

function Nav() {
    return (
        <nav>
            <Link href="/">
                <a className="yellow text-xl arcade">
                    Home
                </a>
            </Link>
            <Link href="/projects">
                <a className="yellow text-xl arcade">
                    Projects
                </a>
            </Link>
            <Link href="https://github.com/nazeemnato">
                <a className="yellow text-xl arcade">
                    Github
                </a>
            </Link>
            <Link href="mailto:n4ze3m@gmail.com">
                <a className="yellow text-xl arcade">
                 Mail
                </a>
            </Link>
        </nav>
    )
}

export default Nav
