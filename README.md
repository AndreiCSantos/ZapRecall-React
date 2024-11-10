# ZapRecall

ZapRecall é um aplicativo interativo de flashcards desenvolvido com React. O objetivo é ajudar os usuários a revisar e memorizar conteúdo de maneira eficiente e divertida, fornecendo feedback em tempo real sobre seu desempenho.

Para ver o projeto acesse: https://zap-recall-react-kappa.vercel.app/

## Funcionalidades

- **Flashcards interativos**: Exibe perguntas e permite ao usuário revelar as respostas.
- **Feedback visual**: Marque as respostas como "corretas", "quase corretas" ou "erradas" com ícones personalizados.
- **Controle de progresso**: Mostra quantas perguntas foram respondidas corretamente.
- **Interface responsiva**: Funciona bem tanto em dispositivos móveis quanto em desktops.

## Tecnologias Utilizadas

- **React**: Biblioteca para criação da interface.
- **styled-components**: Biblioteca para estilização de componentes.
- **useState**: Hook para gerenciamento de estado.
- **useEffect**: Hook para efeitos colaterais no React.
- **GlobalStyle**: Estilo global para a aplicação, usando `styled-components`.

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/zap-recall.git

2. Entre no diretório do projeto:

  cd zap-recall
  
3. Instale as dependências:

  npm install
  
4. Inicie o servidor de desenvolvimento:

  npm start

Como Usar

  Abra o aplicativo no navegador.
  Navegue pelas perguntas e revele as respostas ao clicar na seta.
  Após ver a resposta, marque se a memória estava correta, quase correta ou errada.
  Acompanhe o progresso no contador de respostas corretas.
  
Estrutura do Projeto

  O projeto é organizado da seguinte forma:
  
  App.js: Componente principal que renderiza o container do aplicativo.
  ZapRecallContainer.js: Componente que gerencia os flashcards, respostas e contador.
  Header.js: Cabeçalho com o título e logo do aplicativo.
  FlashcardList.js: Componente que exibe a lista de flashcards.
  Flashcard.js: Componente que representa cada flashcard com suas interações.
  Counter.js: Exibe o progresso de respostas corretas.
  
Contribuindo

  Faça um fork deste repositório.
  Crie uma branch para suas modificações (git checkout -b minha-alteracao).
  Faça commit das suas alterações (git commit -am 'Adiciona nova funcionalidade').
  Envie para a branch principal (git push origin minha-alteracao).
  Abra um pull request.

  
### **Explicação do README**:

- **Descrição do Projeto**: Apresenta brevemente o objetivo do aplicativo.
- **Funcionalidades**: Descreve as principais funcionalidades do app.
- **Tecnologias Utilizadas**: Lista as bibliotecas e ferramentas usadas.
- **Instalação**: Passos para instalar e rodar o projeto localmente.
- **Como Usar**: Guia rápido sobre como interagir com o app depois de rodá-lo.
- **Estrutura do Projeto**: Explica como o código está organizado.
- **Contribuindo**: Guia para quem quiser contribuir para o projeto.
- **Licença**: Instruções sobre a licença (MIT é uma boa escolha, caso você não tenha preferência).
- **Contato**: Formas de contato caso alguém queira fazer perguntas ou sugestões.

Esse **README** dá uma visão geral completa sobre o seu projeto, explicando como rodá-lo, suas funcionalidades e como contribuir.

