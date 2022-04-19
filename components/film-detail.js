export default function FilmDetayComp({movie}){
   return (
    <div className="movie">
    <img className="cover" src={`https://www.themoviedb.org/t/p/original${movie?.backdrop_path}`}  />
        <div className="bilgiler">
            <h3>{movie?.title}</h3>
            <h4>Orjinal İsim : {movie?.original_title}</h4>
            <div className="summary">
                {movie?.overview}
            </div>
        </div>
    <style jsx>{`
    .movie {
        width : 1200px;
        margin : 0;
        padding : 20px 20px;
    }

    .movie h3 {
        font-size: 30px;
        font-weight: bold;
        margin-bottom : 10px;
    }

    .movie h4 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom : 20px;
    }

    .summary {
        font-size : 18px;
        color : #000;
        line-height : 1.7;
    }

    .cover {
        top :0;
        left:0;
        width : 1200px;
        height : 600px;
    }

    .bilgiler {
        background-color:#FFF;
        padding : 20px;
        margin-top:15px;
        width:1200px;
    }
    `}</style>
</div>
   )
}