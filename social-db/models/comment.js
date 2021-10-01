const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "commentId"
    },
    content: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "content"
    },
    datePublished: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "datePublished"
    },
    Post_postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Post_postId",
      references: {
        key: "postId",
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
      fields: ["Post_postId"]
    }]
  };
  const CommentModel = sequelize.define("comment_model", attributes, options);
  return CommentModel;
};