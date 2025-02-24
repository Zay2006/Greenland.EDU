import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import Major from "./Major.js";
import Minor from "./Minor.js";

const Course = sequelize.define("Course", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Course.belongsTo(Major);
Course.belongsTo(Minor);

export default Course;
