const connection = require('../database/connection')
const cryoto = require('crypto');


module.exports = {
    async index (request,response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    
    },

    async create(request,response){
        const {name,email,whatsapp, city, uf}= request.body;

        const id = cryoto.randomBytes(4).toString('HEX');
    
    
       await connection('ongs').insert({
           // id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
            
        return response.json({
            Mensagem: 'Show',
            Status : 200,
            dados : id
        });
    }
}