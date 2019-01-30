'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Delivery = app.model.define('Delivery', {
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
  },{
    freezeTableName: true,
    tableName: 'delivery'
  });

  Delivery.prototype.associate = function() {
    app.model.Delivery.belongsTo(app.model.User, { as: 'user', foreignKey: 'user_id' });
    app.model.Delivery.belongsTo(app.model.Project, { as: 'project', foreignKey: 'project_id' });
  };

  return Delivery;
};
