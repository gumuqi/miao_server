'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('comment', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      comment_cont: {
          type: STRING(400)
      },
      becomment_userid: {
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
    await queryInterface.dropTable('comment');
  },
};
