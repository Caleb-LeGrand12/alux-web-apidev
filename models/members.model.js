import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Member = sequelize.define(
  "member",
  {
    member_id: {
      autoincrement: true,
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    member_name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    member_gender: {
      type: Sequelize.STRING(6),
      allowNull: false,
    },
    email_address: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    telephone_number: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    date_of_birth: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    referral_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "members",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        fields: [{ name: "member_id" }],
      },
    ],
  }
);

export default Member;
