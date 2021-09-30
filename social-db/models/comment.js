const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    CommentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "CommentID"
    },
    Content: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Content"
    },
    DatePublished: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "DatePublished"
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
    tableName: "comment",
    comment: "",
    indexes: [{
      name: "fk_Comment_Post1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Post_PostID"]
    }]
  };
  const CommentModel = sequelize.define("comment_model", attributes, options);
  return CommentModel;
};