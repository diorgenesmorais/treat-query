# Sanitização de query com xss

> Exemplo de como tratar dados passados na query

Este projeto utiliza o Dotenv para gerenciar as variáveis de ambiente, para isso é necessário criar um arquivo na raiz do projeto:
'.env' com as variáveis setadas, por exemplo:

PORT=4200

sendo assim foi criada uma variável PORT com o valor 4200.
Para utilizar é necessário configurar no package.json:

```
"start": "node -r dotenv/config src/main.js"
```

e para executar:

```
npm run start
```

Também foi configurado neste projeto a utilização de *module* para o Node no package.json (para utilizar o import ao invés do require):

```
"type": "module"
```

