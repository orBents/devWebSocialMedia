const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "postId"
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "title"
    },
    image: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "image"
    },
    datePublished: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "datePublished"
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "likes"
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
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "groupId",
      references: {
        key: "groupId",
        model: "group_model"
      }
    }
  };
  const options = {
    tableName: "post",
    comment: "",
    indexes: [{
      name: "profileId",
      unique: false,
      type: "BTREE",
      fields: ["profileId"]
    }, {
      name: "groupId",
      unique: false,
      type: "BTREE",
      fields: ["groupId"]
    }]
  };
  const PostModel = sequelize.define("post_model", attributes, options);
  return PostModel;
};