import { sequelize } from '../config/mysql.js';
import { DataTypes } from 'sequelize';

const Board = sequelize.define('boards', {
    stage: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
})

export default Board;