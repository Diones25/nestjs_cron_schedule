# Projeto Schedule

Este projeto é um sistema de gerenciamento de agendamentos e tarefas desenvolvido em Node.js utilizando TypeScript.

## Tecnologias e Bibliotecas

Abaixo estão as principais bibliotecas identificadas no projeto e suas respectivas funções:

- **[TypeScript](https://www.typescriptlang.org/)**: Linguagem base que adiciona tipagem estática ao JavaScript. O projeto conta com suporte a mensagens de diagnóstico internacionalizadas (PT-BR, ES, IT).
- **[Formidable](https://github.com/node-formidable/formidable)**: Biblioteca especializada no parsing de formulários e uploads de arquivos. É utilizada para capturar dados de tarefas enviados via requisições HTTP complexas.
- **[Yargs](https://yargs.js.org/)**: Framework para construção de interfaces de linha de comando (CLI). Permite a interação com o sistema de agendamento através do terminal.
- **Side-Channel (Map/List)**: Utilitários para armazenamento de informações de objetos em canais laterais, garantindo que metadados internos não interfiram na estrutura principal dos objetos de tarefas.

## Arquitetura de Serviços

### TaskService

O `TaskService` é o serviço responsável pela lógica central das tarefas. Suas principais funções incluem:

1.  **Manipulação de Tarefas**: Implementa métodos para criar, listar, atualizar e remover agendamentos.
2.  **Validação de Negócio**: Garante que as datas e horários das tarefas sejam válidos e não entrem em conflito.
3.  **Segurança de Tipos**: Utiliza interfaces TypeScript para garantir que cada tarefa possua os atributos necessários (como título, descrição, status e data).

> _Nota: Para detalhes específicos sobre os métodos implementados na `TaskService`, consulte o arquivo fonte da service._

## Internacionalização (i18n)

O projeto está configurado para suportar múltiplos idiomas em suas ferramentas de desenvolvimento, incluindo:

- Português (Brasil)
- Espanhol
- Italiano

## Como Iniciar

1.  Instale as dependências:

    ```bash
    npm install
    ```

2.  Compile o projeto:

    ```bash
    npx tsc
    ```

3.  Execute a aplicação:
    ```bash
    npm start
    ```
