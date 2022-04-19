import Link from "next/link";

export default function Popular({movies , params}){
    return <div className="popular">
        {movies?.movies?.results?.map((movie , index) => (
            <Link href={`/film/${movie.id}`} key={index}>
               <a>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}/>
                    <h3>{movie.title}</h3>
               </a>
            </Link>
        ))}
        <style jsx>{`
            .popular {
                display : flex;
                flex-wrap:wrap;
                gap : 10px;
            }

            .popular a{
                width : calc(25% - 10px);
                position: relative;
            }

            .popular a h3 {
                font-size: 20px;
                position : absolute;
                bottom : 0;
                left: 0;
                width: 100%;
                color: #fff;
                background : linear-gradient(to top , #000 , transparent);
                padding : 50px 20px 20px 20px
            }

            img {
                width: 100%;
            }
        `}</style>
    </div>
}