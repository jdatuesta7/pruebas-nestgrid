import { Sequelize } from 'sequelize'

const database = 'netgrid_node';
const username = 'root';
const password = '';
const host = '127.0.0.1';
const port = 3000;

const sequelize = new Sequelize(database, username, password, {
    host, dialect: 'mysql'
});

const dbConnectMySQL = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export { sequelize, dbConnectMySQL };