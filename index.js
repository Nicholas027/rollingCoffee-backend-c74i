import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config"; //permite procesar variables de entorno
import path from 'path';
import { fileURLToPath } from "url";

//1- configurar puertos
const app = express();

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Server funcionando en el puerto ", app.get("port"));
});

//2- configurar middlewares
app.use(cors()); //permite conexiones remotas
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //me permite interpretar los datos del body de un request

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/public")));

//3- configurar rutas
app.get("/nuevo", (req, res) => {
    console.log('Hola mundo')
    res.send('Desde el backend de rollingCoffee')
});