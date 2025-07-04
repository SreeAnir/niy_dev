'use strict';

/** @type {import('sequelize-cli').Migration} */
const {   DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE
  });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('Users');
  }
};
