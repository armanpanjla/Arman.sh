import 'dotenv/config';
import express from "express";
import cors from "cors";
import mailRoutes from './routes/mailRoutes.js'


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;


app.get("/", (req, res) => {
    res.send("server is Active");
})

app.use("/api/mail", mailRoutes);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on Port ${PORT}`)
        })
    } catch (error) {
        console.error(error);

    }
}

start();
