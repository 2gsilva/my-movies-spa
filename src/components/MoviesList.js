import { MovieItem } from "./MovieItem";

export const MoviesList = ({movies}) => {  
    return(
        <section>
            <ul>
                {movies.Search?.map(m => <MovieItem id={m.imdbID} title={m.Title} image={m.Poster} />)}
            </ul>
        </section>
    )
};