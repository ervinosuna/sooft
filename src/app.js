/* const connectDB = require('./infra/database/mongo/mongo'); */
const app = require('./infra/server');

/* connectDB(); */
app.listen(process.env.PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${process.env.PORT}`);
});

