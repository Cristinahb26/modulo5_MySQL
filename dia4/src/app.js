const express = require("express");
const cors = require('cors');
const alumnosRouters = require("./routers/alumnos.routers");
const asignaturasRouters = require("./routers/asignaturas.routers")
const errorHandling = require("./error/errorHandling");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(alumnosRouters);
app.use(asignaturasRouters);
app.use((req, res, next) => {
         res.status(404).json({
                                error:true,
                                codigo: 404,
                                message: "Endpoint no encontrado"
                             })
});

app.use(errorHandling);

module.exports = app;