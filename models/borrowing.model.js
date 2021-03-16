const Sequelize = require("sequelize");

const Books = sequelize.define(
  "borrowing",
  {
    borrow_id: {
      autoIncrement: true,
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    member_name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    author: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },

    isbn: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    no_of_copies: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    genre: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "borrowed",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "book_id" }],
      },
    ],
  }
);

export default Books;
