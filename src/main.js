import express from 'express';
import xss from 'xss';
import dotenv from 'dotenv';

dotenv.config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const { PORT } = process.env;

const app = express();

app.post('/', (req, res) => {
    // sanitização
    const tel = xss(req.query.tel);
    res.send({
        "telefone": tel
    });
});

app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`));
