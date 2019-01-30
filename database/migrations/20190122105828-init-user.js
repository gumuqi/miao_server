'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('user', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: STRING(30)
      },
      nick_name: {
        type: STRING(200)
      },
      avatarUrl: {
        type: STRING(255)
      },
      gender: {
        type: STRING(2)
      },
      good_at: {
        type: STRING(20)
      },
      description: {
        type: STRING(500)
      },
      works_info: {
        type: STRING(100)
      },
      contact_info: {
        type: STRING(100)
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
    await queryInterface.dropTable('user');
  },
};
