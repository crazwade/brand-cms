const express = require('express');
const mysql = require('mysql2/promise'); // 使用 promise based API
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 建立 MySQL 連線池
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost', // MySQL 主機位址
  user: process.env.MYSQL_USER || 'your_mysql_user', // MySQL 使用者名稱
  password: process.env.MYSQL_PASSWORD || 'your_mysql_password', // MySQL 密碼
  database: process.env.MYSQL_DATABASE || 'your_database_name', // MySQL 資料庫名稱
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 測試資料庫連線
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to MySQL');
    connection.release();
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
  }
}

testConnection();

// 建立路由 (範例：取得所有文章)
app.get('/api/articles', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM articles');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});