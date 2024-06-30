
const { Sequelize, DataTypes } = require('sequelize');

// Create a Sequelize instance with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // Path to the SQLite database file
});

// Define a model for trial lessons
const TrialLesson = sequelize.define('TrialLesson', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'trial_lessons',
  timestamps: false // Disable timestamps if your table doesn't have createdAt and updatedAt columns
});

// Sync the database
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

module.exports = { sequelize, TrialLesson };
