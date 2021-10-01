const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    groupPostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "groupPostId"
    },
    Post_postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "Post_postId",
      references: {
        key: "postId",
        model: "post_model"
      }
    },
    Group_groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Group_groupId",
      references: {
        key: "groupId",
        model: "group_model"
      }
    },
    Profile_profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Profile_profileId",
      references: {
        key: "profileId",
        model: "profile_model"
      }
    }
  };
  const options = {
    tableName: "grouppost",
    comment: "",
    indexes: [{
      name: "fk_GroupPost_Post1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Post_postId"]
    }, {
      name: "fk_GroupPost_Group1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Group_groupId"]
    }, {
      name: "fk_GroupPost_Profile1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Profile_profileId"]
    }]
  };
  const GrouppostModel = sequelize.define("grouppost_model", attributes, options);
  return GrouppostModel;
};