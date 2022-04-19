import Link from "next/link"

export default function Header(){
    return <header className="header">
        <nav>
            <ul>
                <li>
                    <Link href='/'>
                        <a>Popüler Filmler</a>
                    </Link>
                </li>
                <li>
                    <Link href='/upcoming'>
                        <a>Yakında Gelecekler</a>
                    </Link>
                </li>
                <li>
                    <Link href='/nowplaying'>
                        <a>Vizyondaki Filmler</a>
                    </Link>
                </li>
            </ul>
        </nav>
        <style jsx>{`
            .header {
                background-color:#fff;
                border-bottom:#ccc;   
            }
            .header ul {
                display:flex;
            }

            .header ul li a{
                display:flex;
                height:60px;
                align-items:center;
                padding : 0 20px;
                color: #333;
                text-decoration:none;

            }
        `}</style>
    </header>
}