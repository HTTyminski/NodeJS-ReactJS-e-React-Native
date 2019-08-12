// importar depensencia dentro deum objeto
const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,      //tipo String
        required: true,   //obrigatorio, sim
    },
    user: {
        type: String,
        required: true,
    },
    bio: String, // nao é obrgadoria entao so declava o tipo
    avatar: {
        type: String,
        require: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,                 // likes
        ref: 'Dev',
    }],
    dislikes: [{                                     //dislikes
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],

}, {     //cria uma coluna automatica
        // createdAt  data da criação de um registro dentro do banco de dados
        timestamps: true,
    });
module.exports = model('Dev', DevSchema);

