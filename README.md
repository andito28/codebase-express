## 📁 Struktur Project

```
codebase-express/
├── src/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── utils/
│   ├── middlewares/
│   └── app.js
├── http/                  # REST Client HTTP request files
├── .vscode/               # Debug config
├── .env.example           # example configuration env
├── .gitignore
├── index.js               # Entry point
└── package.json
```

---

## 🧪 run Project

### 1. Clone & Install
```bash
git clone https://github.com/andito28/codebase-express.git
cd codebase-express
npm install
```

### 2. Setup Environment

```env
PORT=3000
DB_NAME=your_db
DB_USER=postgres
DB_PASS=your_password
DB_HOST=localhost
```

### 3. Jalankan
```bash
npm run dev     # Untuk development dengan nodemon
npm start       # Untuk production
```

### 4. Tes API di VS Code
open the `http/users.http` file and klik **Send Request**  
Make sure you have the **REST Client** extension installed (by Huachao Mao)


### 5. migration & seeder
-npm run migrate
-npm run migrate:rollback
-npm run migrate:rollback:all
-npm run make:migration -- create-products
-npm run make:seeder -- products
-npm run seed
-npm run seed:rollback
-npm run seed:specific -- 20240622000000-products.js

---

## 🧰 Technology

- Node.js + Express.js
- PostgreSQL + Sequelize ORM
- bcrypt, JWT, Joi
- REST Client (untuk testing)
- dotenv, nodemon
