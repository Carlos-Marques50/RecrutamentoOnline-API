import express from "express";
import bodyParser from "body-parser";
import RouteMain from "./routes/RouteMain";

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(RouteMain);

app.get('/', (req, res) => {
  res.status(200).json({
        error:false,
        message:'Seja Benvido a API de Recrutamento Online!',
        Auth:"Carlos Marques"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
