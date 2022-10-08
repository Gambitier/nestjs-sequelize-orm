'use strict';
const tableName = 'users';

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.createTable(tableName, {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          unique: true,
          primaryKey: true,
        },
        prefix: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        firstName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lastName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        middleName: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        gender: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        dateOfBirth: {
          type: Sequelize.DATEONLY,
          allowNull: true,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        deletedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.dropTable(tableName)]);
  },
};
