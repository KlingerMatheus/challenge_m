# Projeto 'challenge_m'

### Protótipo

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/700169811?h=4706393f21&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Project-challenge_m.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

### Descrição
```
Este projeto foi desenvolvido a partir de um desafio proposto para testar minhas habilidades como Full-Stacker.
Consiste no desenvolvimento de uma API com integração ao banco de dados, a parte visual do sistema e o consumo de API local e terceirizada(ViaCEP).
Este sistema possui uma tela de registro de um usuário e outra tela que é possível visualizar todos os usuários cadastrados.
Foi utilizado um conceito simples para demonstrar minhas proficiências com algumas tecnologias e desenvolver novas habilidades.
```

### Tecnologias

```
- HTML
- CSS
- Javascript
- Vue.js
- Node.js
- Express.js
- Axios
- SQL
- Animate.css - https://animate.style
- ViaCEP API - https://viacep.com.br
```

### Ferramentas

```
- Visual Studio Code
- MySQL
```
## Instalação do projeto

##### Faça o download do projeto em sua máquina, abra pelo 'Prompt de Comando' e execute o seguinte comando:
```
npm install
```

##### Tenha o MySQL instalado em sua máquina e crie um banco de dados, em seguida crie as seguintes tabelas: 
```
CREATE TABLE users (
    id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    PRIMARY KEY (id)
);

CREATE TABLE addresses (
    user_id INT,
    zip INT,
    street VARCHAR(50),
    number INT,
    neighborhood VARCHAR(50),
    city VARCHAR(50),
    state VARCHAR(2),
    complement VARCHAR(50),
    PRIMARY KEY (user_id)
);
```

##### No caminho 'PROJECT_NAME/src/api' crie um arquivo .env e insira as informações do seu banco de dados para a conexão
```
DB_NAME="DIGITE_AQUI" # Aqui você coloca o nome seu banco de dados.
DB_PASS="DIGITE_AQUI" # Coloque aqui a senha do seu banco de dados.
DB_HOST="DIGITE_AQUI"  # Aqui você coloca 'localhost'.
DB_PORT="DIGITE_AQUI" # Aqui você coloca a porta que o seu banco de dados tá rodando, por padrão do MySQL é '3306'.
```

#### QUASE PRONTO!!!

##### Agora você abre o projeto pelo Visual Studio Code e abra 2 terminais, então no primeiro você executa: 
```
npm run start
```
###### Esse código é para rodar o sistema no link http://localhost:8080

##### E no segundo terminal você executa:
```
cd ./src/api; nodemon server.js
```

###### E então a API estará em funcionamento e sendo executada no link http://localhost:5500

#### Agora o sistema deve estar rodando em sua máquina e você poderá testar, estudar ou aprimorar esse projeto. 
### MAS LEMBRE-SE!!!

#### Se for melhorar este projeto, agradeço pelo apoio se me oferecer os créditos.