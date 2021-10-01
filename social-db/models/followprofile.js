const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    following_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "following_Id"
    },
    profile_ProfileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "profile_ProfileId",
      references: {
        key: "profileId",
        model: "profile_model"
      }
    },
    follower_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "follower_Id",
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
      name: "fk_FollowProfile_Profile1_idx",
      unique: false,
      type: "BTREE",
      fields: ["profile_ProfileId"]
    }, {
      name: "fk_FollowProfile_Profile2_idx",
      unique: false,
      type: "BTREE",
      fields: ["follower_Id"]
    }]
  };
  const FollowprofileModel = sequelize.define("followprofile_model", attributes, options);
  return FollowprofileModel;
};