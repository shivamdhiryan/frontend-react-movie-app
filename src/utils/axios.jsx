import axios from "axios";
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2ZhYWRlYTJjYjNkYmYwMTgxMzFmZGIwYmUwMjBlMiIsIm5iZiI6MTcyMTMwNTIzOC44NTE2MzIsInN1YiI6IjY2OTkwMmIwMWU5NmQ4MmEzNmIwOWE3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EHSqNomnm7uPEXnnpl6Bw8U1oLwdQ9MP3uFTaoBLDtk'
      }
})
export default instance;