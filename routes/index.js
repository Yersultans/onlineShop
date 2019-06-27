const productRoutes = require('./product');
const anthRoutes = require('./auth');
const userRoutes = require('./user');
const reviewRoutes = require('./review');
const userProductRoutes = require('./userProduct');


module.exports = app => {
	app.use("/api", anthRoutes);
	app.use("/api", productRoutes);
	app.use("/api", userRoutes);
	app.use("/api", reviewRoutes);
	app.use("/api", userProductRoutes);
};