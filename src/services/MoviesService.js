import axios from "axios";

const baseUrl = 'https://localhost:7076/';
const request = uri =>  `${baseUrl}${uri}`

export class MoviesService{
    static getMovies(){
        return axios(request('api/Movies'))
    }
}