import {Sequelize} from 'sequelize';

const sequelize = new Sequelize(
	"fabrica",
	"root",
	"RootAdmin98!",
	{
		host: "localhost",
		dialect: "mysql",
	}
);

sequelize.sync();

(async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
})();

export default sequelize;
