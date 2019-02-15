'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('project', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: STRING(50)
      },
      status: {
        type: INTEGER
      },
      price: {
        type: INTEGER
      },
      technology: {
        type: STRING(200)
      },
      duration: {
        type: INTEGER
      },
      user_id: {
        type: STRING(100)
      },
      description: {
        type: STRING(1000)
      },
      created_at: {
        type: DATE
      },
      updated_at: {
        type: DATE
      }
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('project');
  },
};
