const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    profileProfileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "profileProfileId",
      references: {
        key: "profileId",
        model: "profile_model"
      }
    },
    groupGroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "groupGroupId",
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
    }
  };
  const options = {
    tableName: "groupmember",
    comment: "",
    indexes: [{
      name: "fk_GroupMember_Profile1_idx",
      unique: false,
      type: "BTREE",
      fields: ["profileProfileId"]
    }, {
      name: "fk_GroupMember_Group1_idx",
      unique: false,
      type: "BTREE",
      fields: ["groupGroupId"]
    }]
  };
  const GroupmemberModel = sequelize.define("groupmember_model", attributes, options);
  return GroupmemberModel;
};