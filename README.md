# crud
Para iniciar o projeto necessário baixar as dependências com o comando: npm i

# configurar config.json
Configurar root conforme configurações de sua máquina no arquivo config/config.json

# criar o banco de dados
npx sequelize-cli db:create

# migrar banco de dados
npx sequelize-cli db:migrate

# rotas utilizadas
GET: http://localhost/usuarios é a rota inicial apresenta o texto: "2° Avaliação de Desenvolvimento Web 2"

POST: http://localhost/usuarios é a rota para criação de usuario, onde é necessário fornecer os parâmetros em formato JSON nome, dataNascimento, email

GET: http://localhost/usuarios/:id é a rota para apresentação dos usuários criados no banco, onde é necessário fornecer na rota o id do usuario e a apresentação do usuário é realizado em formato JSON

PATCH: http://localhost/usuarios/:id é a rota para edição dos usuários criados no banco, onde é necessário fornecer na rota o id do usuario, além de fornecer os novos parâmetros nome, dataNascimento, email em formato JSON

DELETE: http://localhost/usuarios/:id é a rota para deletar o usuário do banco, onde é necessário fornecer na rota o id do usuario que deseja excluir





