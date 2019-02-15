'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Products = app.model.define('Project', {
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
      type: STRING(50)
    },
    description: {
      type: STRING(1000)
    },
    created_at: {
      type: DATE
    },
    updated_at: {
      type: DATE
    },
    winner: {
      type: STRING(50)
    }
  },{
    freezeTableName: true,
    tableName: 'project'
  });

  Products.associate = function() {
    app.model.Project.belongsTo(app.model.User, { as: 'user', foreignKey: 'user_id' });
  };

  return Products;
};
