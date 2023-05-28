import { MovieItem } from "./MovieItem";

export const MoviesList = ({movies}) => {  
    return(
        <section>
            <ul>
                {movies.Search?.map(m => <MovieItem title={m.Title} image={m.Poster} />)}
            </ul>
        </section>
    )
};