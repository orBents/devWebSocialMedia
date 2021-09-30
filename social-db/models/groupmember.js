const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    Profile_ProfileID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "Profile_ProfileID",
      references: {
        key: "ProfileID",
        model: "profile_model"
      }
    },
    Group_GroupID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "Group_GroupID",
      references: {
        key: "GroupID",
        model: "group_model"
      }
    },
    IsAdmin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "IsAdmin"
    }
  };
  const options = {
    tableName: "groupmember",
    comment: "",
    indexes: [{
      name: "fk_Profile_has_Group_Group1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Group_GroupID"]
    }, {
      name: "fk_Profile_has_Group_Profile1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Profile_ProfileID"]
    }]
  };
  const GroupmemberModel = sequelize.define("groupmember_model", attributes, options);
  return GroupmemberModel;
};