import { MoviesContainer } from "../styles/MoviesContainer";

export const MovieItem = ({id, title, image}) => {
    const uri = `/details/${id}`
    return(
        <MoviesContainer>
            <a href={uri}>
                <img src={image} width={233} height={350} /> 
            </a>
            <br />
            <b>{title}</b>
            <br />
        </MoviesContainer>
    )
};