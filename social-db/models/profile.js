const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    ProfileID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "ProfileID"
    },
    Name: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Name"
    },
    DateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "DateOfBirth"
    },
    Gender: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Gender"
    },
    Phone: {
      type: DataTypes.STRING(16),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Phone"
    },
    User_UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "User_UserID",
      references: {
        key: "UserID",
        model: "user_model"
      }
    }
  };
  const options = {
    tableName: "profile",
    comment: "",
    indexes: [{
      name: "fk_Profile_User_idx",
      unique: false,
      type: "BTREE",
      fields: ["User_UserID"]
    }]
  };
  const ProfileModel = sequelize.define("profile_model", attributes, options);
  return ProfileModel;
};