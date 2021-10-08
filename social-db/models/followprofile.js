const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    followId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "followId"
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
    followerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "followerId",
      references: {
        key: "profileId",
        model: "profile_model"
      }
    }
  };
  const options = {
    tableName: "followprofile",
    comment: "",
    indexes: [{
      name: "profileId",
      unique: false,
      type: "BTREE",
      fields: ["profileId"]
    }, {
      name: "followerId",
      unique: false,
      type: "BTREE",
      fields: ["followerId"]
    }]
  };
  const FollowprofileModel = sequelize.define("followprofile_model", attributes, options);
  return FollowprofileModel;
};