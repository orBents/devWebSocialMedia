const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    GroupPostID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "GroupPostID"
    },
    Group_GroupID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Group_GroupID",
      references: {
        key: "GroupID",
        model: "group_model"
      }
    },
    Profile_ProfileID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Profile_ProfileID",
      references: {
        key: "ProfileID",
        model: "profile_model"
      }
    },
    Post_PostID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Post_PostID",
      references: {
        key: "PostID",
        model: "post_model"
      }
    }
  };
  const options = {
    tableName: "grouppost",
    comment: "",
    indexes: [{
      name: "fk_GroupPost_Group1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Group_GroupID"]
    }, {
      name: "fk_GroupPost_Profile1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Profile_ProfileID"]
    }, {
      name: "fk_GroupPost_Post1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Post_PostID"]
    }]
  };
  const GrouppostModel = sequelize.define("grouppost_model", attributes, options);
  return GrouppostModel;
};