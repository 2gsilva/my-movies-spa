import { MoviesContainer } from "../styles/MoviesContainer";

export const MovieItem = ({title, image}) => (
    <MoviesContainer>
        <img src={image} width={233} height={350} />
        <br />
        <b>{title}</b>
        <br />
    </MoviesContainer>
);