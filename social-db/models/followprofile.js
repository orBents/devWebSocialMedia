const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    Following-Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "Following-Id"
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
    },
    Follower_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Follower_Id",
      references: {
        key: "ProfileID",
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
      fields: ["Profile_ProfileID"]
    }, {
      name: "fk_FollowProfile_Profile2_idx",
      unique: false,
      type: "BTREE",
      fields: ["Follower_Id"]
    }]
  };
  const FollowprofileModel = sequelize.define("followprofile_model", attributes, options);
  return FollowprofileModel;
};