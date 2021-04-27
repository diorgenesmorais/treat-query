import express from 'express';
import xss from 'xss';

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
