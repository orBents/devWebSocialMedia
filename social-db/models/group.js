const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    GroupID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "GroupID"
    },
    Name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Name"
    },
    Description: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Description"
    },
    DateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "DateCreated"
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