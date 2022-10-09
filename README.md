# Nestjs & Sequelize

## Nestjs Architeture

![image](https://user-images.githubusercontent.com/22792359/194728595-2668569d-aa02-4804-8798-ce7900b461c6.png)


## Sequelize and Database Setup

ref

1. [official docs](https://docs.nestjs.com/recipes/sql-sequelize)
2. [How to Build Web APIs with NestJS, Postgres, and Sequelize - A Beginner's Guide](https://www.freecodecamp.org/news/build-web-apis-with-nestjs-beginners-guide/)

```
npm install --save sequelize sequelize-typescript pg-hstore pg
npm install --save-dev @types/sequelize
```

## Setup Sequelize migration in a NestJS Project

ref: [setup Sequelize migration in a NestJS Project](https://victoronwuzor.medium.com/how-to-setup-sequelize-migration-in-a-nestjs-project-b4aec1f88612)

```
npm i -g @nestjs/cli
```

## Sequelize Related Notes

1. [How to make insert with relations](https://github.com/sequelize/sequelize-typescript/issues/723)

    ![image](https://user-images.githubusercontent.com/22792359/194730042-fd347226-804f-451f-9a08-336e2fce7a09.png)


## TODOs

1. Create many to many relation between `User` and `EducationInstitute`
   1. create `POST education-institutes/`
   2. create `POST users/education-institute`