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
      autoIncrement: false,
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
    imageURL: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "imageURL"
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
    tableName: "post",
    comment: "",
    indexes: [{
      name: "fk_Post_Profile1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Profile_profileId"]
    }]
  };
  const PostModel = sequelize.define("post_model", attributes, options);
  return PostModel;
};