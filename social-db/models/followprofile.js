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
      name: "fk_FollowProfile_Profile1_idx",
      unique: false,
      type: "BTREE",
      fields: ["profileProfileId"]
    }, {
      name: "fk_FollowProfile_Profile2_idx",
      unique: false,
      type: "BTREE",
      fields: ["followerId"]
    }]
  };
  const FollowprofileModel = sequelize.define("followprofile_model", attributes, options);
  return FollowprofileModel;
};