'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Comments = app.model.define('Comment', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    comment_cont: {
        type: STRING(400)
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
  },{
    freezeTableName: true,
    tableName: 'comment'
  });

  Comments.associate = function() {
    app.model.Comment.belongsTo(app.model.Project, { as: 'comment', foreignKey: 'project_id' });
  };

  return Comments;
};
