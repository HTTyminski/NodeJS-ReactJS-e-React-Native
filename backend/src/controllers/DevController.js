//importando axios que busca pos api com json
const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(req, res) { // buscar dados da tabela
        const { user } = req.headers; //buscar usuario logado
        const loggedDev = await Dev.findById(user);// todos dados de usuario logados likes e dislikes
        const users = await Dev.find({// busca usuario que nao estao lohados nem estao em likes ou dislikes
            $and: [                                // vetor que busca com Operador E 'and'
                { _id: { $ne: user } },   // ne = not igual , busca nao seja o que  esta logado - tira o usuario da propria listagem
                { _id: { $nin: loggedDev.likes } }, //Operador NOT IM nin = nao esteja em seus likes
                { _id: { $nin: loggedDev.dislikes } }, // Operador NOT IN nin = não esteja em seus dislikes
            ],
        })

        return res.json(users);
    },



    async store(req, res) {
        const { username } = req.body;
        // caso o usuario ja existir entao faça isso
        const userExists = await Dev.findOne({ user: username });
        if (userExists) {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);
        //axios é assincrono e demora para iniciar
        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        })

        return res.json(dev);
    }
};     // INDEX, SHOW, STORE, UPDATE, DELETE  BOAS PRATICAS 