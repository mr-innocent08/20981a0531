import express from "express";
import cors from "cors"; 
import route from './routes/route.js'
const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send("hello there");
});


app.use('/train',route);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
