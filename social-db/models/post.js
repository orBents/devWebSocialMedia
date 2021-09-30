const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    PostID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "PostID"
    },
    Title: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Title"
    },
    ImageURL: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ImageURL"
    },
    DatePublished: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "DatePublished"
    },
    Likes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Likes"
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
    }
  };
  const options = {
    tableName: "post",
    comment: "",
    indexes: [{
      name: "fk_Post_Profile1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Profile_ProfileID"]
    }]
  };
  const PostModel = sequelize.define("post_model", attributes, options);
  return PostModel;
};