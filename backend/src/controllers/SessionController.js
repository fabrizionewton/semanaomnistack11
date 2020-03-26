const connection = require('../database/connection')

module.exports = {
    async create(request,response){
        const {id} = request.body;

        const ong = await connection('ongs')
        .where('id',id)
        .select('name')
        .first();

        if(!ong){
            return response.Status(401).json({error:'Não permitido'})
        }
       
        return response.json({
            Mensagem: 'Show',
            Status : 200,
            dados : ong
        });
    },
}