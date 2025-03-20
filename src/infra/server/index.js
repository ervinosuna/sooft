const express = require('express');
const connectDB = require('../database/mongo/mongo');

const companyRoutes = require('../routes/company');
const transferRoutes = require('../routes/transactions');

connectDB();
const app = express();
app.use(express.json());

app.use("/companies", companyRoutes);
app.use("/transfers", transferRoutes);

app.use((req, res) => {
    res.status(404).json({ error: "Path no found" });
});

module.exports = app;