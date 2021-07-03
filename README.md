# nodejs-typescript
Projeto básico usando nodejs e typescript com mongodb

# Instalações necessárias windows
- Git: https://git-scm.com/download/win
- Nodejs: https://nodejs.org/dist/v14.17.1/node-v14.17.1-x64.msi
- Visual Studio Code (recomendado): https://code.visualstudio.com/docs/?dv=win

# Se utilizar linux
- Git
- Nodejs
- Visual Studio Code: https://code.visualstudio.com/download

# Principais comandos git

```typescript
// clonar esse repositório
git clone 'https://github.com/maitha-zeroum/nodejs-typescript.git'

// ver status do git
git status

// adicionar um arquivo ao stash do git
git add <file-name>

// adicionar todos os arquivos no stash
git add *

// comitar arquivos que estão na stash
git commit -m "<message>"

// enviar commits para repositório na nuvem
git push origin <branch>

// criando uma nova branch
git checkout -b <nome da branch>

// alterando entre branch
git checkout <branch>

// visualizando todas as branch
git branch

// baixar atualizações remotas
git pull origin <branch>

// mergear atualizações de outra branch na sua branch
git merge <branch>

// abortar merge quando existe conflitos
git merge --abort
```
# Como iniciar esse programa
- Instalar dependências: `npm install`
- Rodar programa: `npm run start`
- Rodar testes: `npm run test`
- Verificar typescript: `npm run tsc-check`

# Entendendo estrutura do projeto

```
./ -> pasta principal
./tsconfig.json -> arquivo de configurações do typescript https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
./tslint.json -> arquivo de configurações do lint https://palantir.github.io/tslint/
./jest.config.js -> arquivo de configurações do jest https://jestjs.io/pt-BR/docs/getting-started
./.gitignore -> arquivo de configuração para git, lista o que o git deve ignorar no repositório
./.editorconfig -> arquivo de configuração do visual studio code para ajustar editor de código com lint
./.vscode -> diretório de configurações do vscode
./.vscode/launch.json -> arquivo que permite controlar e debugar projeto usando vscode
./README.md -> arquivo de texto MD com instruções do projeto
./CHANGELOG -> arquivo de controle de versão para informar o que esta sendo alterado de uma versão para outra no código com a evolução do projeto
./babel.config.js -> arquivo de configurações do babel para nodejs
./package.json -> arquivo de controle de pacotes npm e dados da aplicação
./package-lock.json -> arquivo de trava de pacotes e versão de uso
./__tests__ -> diretório de arquivos de testes, aqui são escrito os testes da aplicação.
./src -> diretório de código fonte em typescript
./src/server.ts -> arquivo principal da aplicação
./src/libs -> diretórios de libs e arquivos de configuração ou de uso geral da aplicação
./src/libs/Express.ts -> Arquivo de configuração do framework express js
./src/app -> diretório de código da aplicação, regras principais modelos e rotas
./src/app/controllers -> diretório de controllers, regras de negocio da aplicação
./src/app/routes -> diretório de rotas e regras da aplicação 
```