import Head from "next/head";
import Populer from "../components/popular";

export default function index(movies){
    
    return (
        <>
            <Head>
                <title>Anasayfa</title>
            </Head>
            <div className="filmCategory">
                <h3>Popüler Filmler</h3>
                <Populer movies={movies} />
            </div>
            

            <style jsx>{`
                .filmCategory {
                    width : 1200px;
                    margin : 20px auto;
                    padding : 20px 20px;
                    background-color: #fff;
                }

                .filmCategory h3{
                    font-size:40px;
                    margin-bottom : 20px;
                }

            `}</style>
        </>
    )
}

export async function getServerSideProps(){
    const request = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4ae8bf3f0f2c0f238bdc0d1ec0f5b6c1&language=en-US&page=1`)
    const movies = await request.json() 
    return {
        props: {
            movies,
        }
    }
}