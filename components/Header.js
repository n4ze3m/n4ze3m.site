import Link from "next/link"

function Header() {
    return (
        <header>
            <Link href="/">
                <a className="gras text-3xl arcade">
                    Muhammed Nazeem
                </a>
            </Link>
        </header>
    )
}

export default Header
