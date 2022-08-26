import handleHttpError from '../utils/handleError.js';
import axios from 'axios';

const getMovieTitles = async (req, res) => {
    try {
        const { substr, pageNumber } = req.params;

        const resultado = await axios.get(`https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=${substr}&page=${pageNumber}`);
        const movies = resultado.data.data;

        let titles = [];
        movies.forEach(e => {
            titles.push(e.Title);
        });

        titles.sort();

        res.status(200).send({ data: titles});
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR AL CONSULTAR PELICULAS', 403);
    }
}

export {
    getMovieTitles
}