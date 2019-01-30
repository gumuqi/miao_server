'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('delivery', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      project_id: {
        type: STRING(20)
      },
      user_id: {
        type: STRING(20)
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
    await queryInterface.dropTable('delivery');
  },
};
