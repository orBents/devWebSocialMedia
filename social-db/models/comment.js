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
      autoIncrement: true,
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
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "postId",
      references: {
        key: "postId",
        model: "post_model"
      }
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
    }
  };
  const options = {
    tableName: "comment",
    comment: "",
    indexes: [{
      name: "postId",
      unique: false,
      type: "BTREE",
      fields: ["postId"]
    }, {
      name: "profileId",
      unique: false,
      type: "BTREE",
      fields: ["profileId"]
    }]
  };
  const CommentModel = sequelize.define("comment_model", attributes, options);
  return CommentModel;
};