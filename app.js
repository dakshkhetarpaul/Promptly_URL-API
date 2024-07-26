import express from 'express';
import sequelize from './config/db.js';
import dotenv from 'dotenv';
import urlRoutes from './Routes/url_routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', urlRoutes);

// Connect to MySQL and Sync Models
sequelize.authenticate()
    .then(() => console.log('MySQL connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
