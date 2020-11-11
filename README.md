## Description

Demonstration for managing `nestjs` running in Docker containers using environment variables.

* Build once, deploy many is important.
* Having something simple and familiar for local development is important.

Uses [NestJS Config](https://docs.nestjs.com/techniques/configuration#configuration) with environment variables overridden by the container environment.

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Running the example
Pre:requisites:
* Docker
* Docker Compose
* Curl

```
docker-compose build nest-api
docker-compose up nest-api
```

Test the connection:
```
curl http://localhost:3000/
```

Expected output:
```
    DATABASE_USER: nowForSomethingCompletelyDifferent
    DATABASE_PASSWORD: test
    FOO: BAR
```

## About the example

The `.env` file configures multiple configuration parameters.
Environment variables are also supplied to the container on start (`docker-compose.yml`)

The [service](./src/app.service.ts) reports a number of configuration parameters:
* A variable configiured only in the `.env`
* A variable configured in both the `.env` and environment
* A variable configured only in the environment variables supplied.

This demonstration shows:
* Environment variables can be supplied via the environment only
* Supplied environment variables override `.env`

# Nest Development

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
