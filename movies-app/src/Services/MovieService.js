import HttpClient from './Utils/HttpClient';

class MovieService {
  constructor() {
    this.httpClient = new HttpClient('https://api.themoviedb.org/3');
    this.api_key = '83fb3dcdbafe8eba3233070580886f8a';
    this.FEATURED_API = '/discover/movie?api_key=83fb3dcdbafe8eba3233070580886f8a&sort_by=popularity.desc&include_adult=false&include_video=false';
    
    this.SEARCH_API = '/search/movie?&api_key=83fb3dcdbafe8eba3233070580886f8a&query=';
  }

  async listMovies() {
    return this.httpClient.get(this.FEATURED_API);
  }
  async listMoviesBySearch(search) {
    return this.httpClient.get(this.SEARCH_API + search);
  }

}

export default new MovieService();