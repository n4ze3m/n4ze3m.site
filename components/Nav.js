import Link from "next/link"

function Nav() {
    return (
        <nav>
            <Link href="/">
                <a>
                    Home
                </a>
            </Link>
            <Link href="/projects">
                <a>
                    Projects
                </a>
            </Link>
            <Link href="https://github.com/nazeemnato">
                <a>
                    Github
                </a>
            </Link>
            <Link href="mailto:n4ze3m@gmail.com">
                <a>
                 Mail
                </a>
            </Link>
        </nav>
    )
}

export default Nav
