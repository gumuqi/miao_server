'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Products = app.model.define('Comment', {
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
  },{
    freezeTableName: true,
    tableName: 'comment'
  });

  Products.associate = function() {
    app.model.Comment.belongsTo(app.model.User, { as: 'comment', foreignKey: 'user_id' });
  };

  return Products;
};
