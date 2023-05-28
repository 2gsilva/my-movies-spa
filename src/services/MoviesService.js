import axios from "axios";

const baseUrl = 'https://omdbapi.com/';
const request = uri =>  `${baseUrl}${uri}`

export class MoviesService{
    static getMovies(){
        return axios(request('?s=simpsons&apikey=87940e02'))
    }

    static getMovieById(){
        return axios(request('?i=&apikey=87940e02'))
    }
}