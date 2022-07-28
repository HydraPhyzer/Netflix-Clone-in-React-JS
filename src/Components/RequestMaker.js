import axios from "axios";

let Setup=axios.create({
    baseURL:"https://api.themoviedb.org/3"
});

export default Setup