const express = require('express');
const cors = require('cors');
const server = express();

const MaquinaRoutes = require('./routes/MaquinaRoutes');
const DadosRoutes = require('./routes/DadosRoutes');

server.use(cors());
server.use(express.json());
server.use('/maquininhas', MaquinaRoutes);
server.use('/dados', DadosRoutes);


server.listen(3333, () => {
    console.log('API ONLINE');
});