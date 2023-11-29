const {Usuario} = require ('../../models');

exports.inicio = (req, res) => {
    res.send(`2° Avaliação de Desenvolvimento Web 2 `);    
}

exports.cadastraUsuario = async (req, res)=>{
    const {nome, dataNascimento, email} = req.body;
    
    try {
                
        await Usuario.create({nome, dataNascimento, email});

        res.send('Usuario cadastrado');
    } catch (error) {

        res.status(400).send(`${error.message}`);        
    }
}

exports.mostrarUsuarios = async (req, res)=>{
    const id = req.params.id;

    Usuario.findByPk(id).then(usuarios => {
        if(usuarios) {
            res.send(`Usuario: ${JSON.stringify(usuarios)}`,);
        } else{
            res.send(`<h1> Usuario não encontrado! </h1>`);
        }
        
    })
    .catch((error) => {
        res.status(400).send(`${error.message}`);
    });
}

exports.editaUsuario = async (req, res)=>{
    const id = req.params.id;

    const {nome, dataNascimento, email} = req.body;

    const usuario = await Usuario.findByPk(id);

    if(!usuario){
        res.send(`Nenhum aluno associado ao ID: ${id}`);
    }

    try {
        await Usuario.update(
            {
                nome: nome, 
                dataNascimento: dataNascimento,
                email: email
            }, 
            {
                where: {id: id}
            }
        );  

        res.send(`Usuario alterado!`);
                
    } catch (error) {
        res.status(400).send(`${error.message}`);        
    }    
}

exports.excluirUsuario = async (req, res)=>{
    const {id} = req.params;

    const usuario = await Usuario.findByPk(id);

    if(!usuario){
        res.send(`Nenhum usuario associado ao ID: ${id}`);
    }

    Usuario.destroy({
        where: {id: id}
    }).then(()=>{
        res.send(`Usuario Deletado!`);
    }).catch((erro)=> {
        res.send(`Erro ao excluir usuario!`);
    })

}