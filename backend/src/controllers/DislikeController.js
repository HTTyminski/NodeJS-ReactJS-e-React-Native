const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { devId } = req.params;
        const { user } = req.headers;


        const loggedDev = await Dev.findById(user);                            //busca o usuario pela usuario logado

        const targetDev = await Dev.findById(devId);                           // usuario que esta recebendo o likeou dislike (alvo)

        if (!targetDev) {                                                      // se ele tentar logar em um alvo que nao existe
            return res.status(400).json({ error: 'Dev not exists' });          //status 400 http codes Bad Request -retorna uma menssagem ao usuario
        }
        //dev logado,informacao de like(vetor de Id) ----- da um PUSH(array)

        loggedDev.dislikes.push(targetDev._id);
        //salvar as informaçoes das modificacoes (PUSH)
        await loggedDev.save();
        //testar
        return res.json(loggedDev);
    }
};