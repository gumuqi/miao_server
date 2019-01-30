'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('User', {
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
  },{
    freezeTableName: true,
    tableName: 'user'
  });

  User.prototype.associate = function() {
    app.model.User.hasMany(app.model.Project, { as: 'project' });
  };

  return User;
};
