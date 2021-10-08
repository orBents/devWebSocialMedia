const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    groupMemberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "groupMemberId"
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "groupId",
      references: {
        key: "groupId",
        model: "group_model"
      }
    },
    isAdmin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "isAdmin"
    },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "profileId",
      references: {
        key: "profileId",
        model: "profile_model"
      }
    }
  };
  const options = {
    tableName: "groupmember",
    comment: "",
    indexes: [{
      name: "groupId",
      unique: false,
      type: "BTREE",
      fields: ["groupId"]
    }, {
      name: "profileId",
      unique: false,
      type: "BTREE",
      fields: ["profileId"]
    }]
  };
  const GroupmemberModel = sequelize.define("groupmember_model", attributes, options);
  return GroupmemberModel;
};