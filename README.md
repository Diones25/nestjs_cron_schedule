<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Schedule Task Project

Este projeto é um serviço automatizado desenvolvido com **NestJS** para o agendamento e execução de tarefas periódicas (Cron Jobs). Sua principal função é integrar-se com serviços externos de forma resiliente e monitorada.

## 🚀 Tecnologias e Bibliotecas Core

- **[NestJS](https://nestjs.com/)**: Framework Node.js progressivo para a construção de aplicações eficientes.
- **[@nestjs/schedule](https://docs.nestjs.com/techniques/scheduling)**: Utilizado para gerenciar a execução de tarefas baseadas em tempo (Cron).
- **[@nestjs/axios](https://docs.nestjs.com/technologies/http)**: Wrapper do Axios para realizar requisições HTTP, integrado com RxJS.
- **[nest-winston](https://github.com/gremo/nest-winston)**: Integração do Winston para logs estruturados e detalhados, garantindo rastreabilidade dos jobs.
- **TypeScript**: Linguagem base para garantir segurança de tipos em todo o fluxo de dados.

## 🛠️ Arquitetura do Serviço: TaskService

O `TaskService` é o componente central da lógica de negócio. Ele implementa o seguinte fluxo:

1.  **Agendamento (Cron)**: Possui um job configurado para rodar a cada 50 minutos (`*/50 * * * *`).
2.  **Integração HTTP**: O método `handleCreatePost` realiza uma requisição POST para a API JSONPlaceholder.
3.  **Tratamento de Erros**: Utiliza operadores RxJS (`catchError`) e blocos `try/catch` para capturar falhas na rede ou respostas inválidas da API, evitando que o processo principal seja interrompido.
4.  **Logging**: Registra o início da operação, o sucesso com o ID gerado ou detalhes específicos de erro em caso de falha na requisição.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```