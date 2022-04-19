import {useRouter} from "next/router";
import Head from "next/head";
import FilmDetayComp from "../../components/film-detail";

export default function FilmDetay({movie}){
    return (
        <div className="filmdetay">
            <Head>
                <title>{movie.title}</title>
            </Head>
            <FilmDetayComp movie = {movie} />

            <style jsx>{`
            .filmdetay {
                width : 1200px;
                margin : 20px auto;
                padding : 20px 20px;
            }
            `}</style>
        </div>
    )
}

export async function getServerSideProps({params}){
    const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=4ae8bf3f0f2c0f238bdc0d1ec0f5b6c1&language=tr-TR`)

    const movie = await request.json()
    return {
        props: {
            movie
        }
    }
}