const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    isAdmin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "isAdmin"
    },
    Profile_profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "Profile_profileId",
      references: {
        key: "profileId",
        model: "profile_model"
      }
    },
    Group_groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "Group_groupId",
      references: {
        key: "groupId",
        model: "group_model"
      }
    }
  };
  const options = {
    tableName: "groupmember",
    comment: "",
    indexes: [{
      name: "fk_GroupMember_Profile1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Profile_profileId"]
    }, {
      name: "fk_GroupMember_Group1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Group_groupId"]
    }]
  };
  const GroupmemberModel = sequelize.define("groupmember_model", attributes, options);
  return GroupmemberModel;
};