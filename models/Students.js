import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Major from "./Major.js";
import Minor from "./Minor.js";

const Student = sequelize.define("Student", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Student.belongsTo(Major);
Student.belongsTo(Minor);

export default Student;
