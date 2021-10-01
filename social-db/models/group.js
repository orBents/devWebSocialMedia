const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "groupId"
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name"
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description"
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dateCreated"
    }
  };
  const options = {
    tableName: "group",
    comment: "",
    indexes: []
  };
  const GroupModel = sequelize.define("group_model", attributes, options);
  return GroupModel;
};