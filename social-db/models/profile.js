const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "profileId"
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name"
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dateOfBirth"
    },
    gender: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "gender"
    },
    phone: {
      type: DataTypes.STRING(16),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "phone"
    },
    User_userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "User_userId",
      references: {
        key: "userId",
        model: "user_model"
      }
    }
  };
  const options = {
    tableName: "profile",
    comment: "",
    indexes: [{
      name: "fk_Profile_User1_idx",
      unique: false,
      type: "BTREE",
      fields: ["User_userId"]
    }]
  };
  const ProfileModel = sequelize.define("profile_model", attributes, options);
  return ProfileModel;
};