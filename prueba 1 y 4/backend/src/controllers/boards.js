import handleHttpError from '../utils/handleError.js';
import Board from '../models/boards.js';

const createItem = async (req, res) => {
    try {
        const board = await Board.create(req.body);
        res.status(201).send({ data: board });
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR AL CREAR TABLERO', 403);
    }
}

const updateItem = async (req, res) => {
    try {
        if(req.body.stage == 1 || req.body.stage == 2 || req.body.stage == 3){
            const { body } = req;
            const { id } = req.params;
            const board = await Board.update(body, {
                where: {
                    id
                }
            });
            res.status(200).send({ data: board });
        }else{
            res.status(400).send();
        }
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR AL ACTUALIZAR TABLERO', 403);
    }
}

export {
    createItem,
    updateItem
}