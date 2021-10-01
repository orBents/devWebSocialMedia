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
    postPostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "postPostId",
      references: {
        key: "postId",
        model: "post_model"
      }
    },
    groupGroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "groupGroupId",
      references: {
        key: "groupId",
        model: "group_model"
      }
    },
    profileProfileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "profileProfileId",
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
      fields: ["postPostId"]
    }, {
      name: "fk_GroupPost_Group1_idx",
      unique: false,
      type: "BTREE",
      fields: ["groupGroupId"]
    }, {
      name: "fk_GroupPost_Profile1_idx",
      unique: false,
      type: "BTREE",
      fields: ["profileProfileId"]
    }]
  };
  const GrouppostModel = sequelize.define("grouppost_model", attributes, options);
  return GrouppostModel;
};