import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Url = sequelize.define('Url', {
    longUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shortUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: false, // Disable automatic timestamp columns (createdAt, updatedAt)
    tableName: 'ProductionUrls' // Specify the exact table name to match the pre-existing table
});

export default Url;
