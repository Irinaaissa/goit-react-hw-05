import axios from "axios";
axios.defaults.baseUrl = `https://api.themoviedb.org/3`;

export const getMovies = async () => {
    const options = {
        headers: {
        
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjAyOGE3ZTU2MmM2NGE1ZjdmMzg4NjE0ZTE5Y2M1MyIsInN1YiI6IjY1ZTYyOWMwOTQ1MWU3MDE4NzVkMTlhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PLzpH6RA_F_NiSRBcpWZrS9MFXL_jGGDF3pMQQLMGMw`,
        },
      };
  const response = await axios.get('/trending/movie/day?language=en-US', options)
  return response.data.results;
};



  
  
  
