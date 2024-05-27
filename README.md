## Projeto: Clone do Omegle com WebRTC e Socket.io

### Descrição
Este projeto é um clone do Omegle, uma plataforma de comunicação que conecta estranhos via vídeo e chat. O objetivo deste repositório é fornecer uma aplicação prática para o estudo e entendimento das tecnologias WebRTC e Socket.io, utilizadas para criar conexões em tempo real entre navegadores.

### O que é WebRTC?
WebRTC (Web Real-Time Communication) é um conjunto de APIs e protocolos que permite a comunicação de áudio, vídeo e dados diretamente entre navegadores, sem a necessidade de plugins ou software adicional. Ele é amplamente utilizado para chamadas de vídeo, conferências e troca de dados em tempo real.

### O que é Socket.io?
Socket.io é uma biblioteca JavaScript que permite a comunicação em tempo real entre servidores e clientes. Ela é baseada em WebSockets, mas oferece uma API mais robusta e com suporte a fallback para outras tecnologias de comunicação em tempo real quando WebSockets não estão disponíveis.

### Estrutura do aprendizado
A seguir, uma visão geral das seções do curso para construção do clone do Omegle utilizando WebRTC e Socket.io:

1. **Apresentação do App e Teoria**
   - Introdução ao projeto e conceitos teóricos.

2. **Preparação do Ambiente e Criação do Servidor**
   - Configuração do ambiente de desenvolvimento e criação do servidor básico.

3. **Criação do Front-end da Aplicação**
   - Desenvolvimento da interface do usuário utilizando HTML, CSS e JavaScript.

4. **Preparação da Lógica da Aplicação antes da Conexão WebRTC**
   - Implementação da lógica necessária antes de estabelecer a conexão WebRTC.

5. **Implementação do WebRTC para Estabelecer Conexão entre Dois Usuários**
   - Código para criar conexões WebRTC entre usuários.

6. **Canais de Dados do WebRTC**
   - Implementação de canais de dados para troca de mensagens em tempo real.

7. **API MediaRecorder**
   - Utilização da API MediaRecorder para gravação de mídia.

8. **Finalização da Aplicação com Funcionalidade de Conexão com Estranhos e Desconexão**
   - Adição de funcionalidades para conectar com estranhos e finalizar conexões.

9. **Implantação da Aplicação no Heroku**
   - Deploy da aplicação no Heroku para acesso público.

10. **Conexão com Servidor TURN e Verificação da Conexão Fora da Rede Local**
    - Configuração de servidor TURN para garantir a conectividade fora da rede local.

### Pré-requisitos
- Node.js
- NPM (Node Package Manager)
- Conta no Heroku

### Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/omegle-clone.git
   cd omegle-clone
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```

4. Acesse a aplicação em seu navegador:
   ```
   http://localhost:3000
   ```

### Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

### Licença
Este projeto está licenciado sob a MIT License.
