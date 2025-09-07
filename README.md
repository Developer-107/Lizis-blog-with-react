
# ✨ Lizi’s Blog With React

A full-stack **blogging platform** built with **Node.js, Express, EJS, and PostgreSQL**.  
It lets you publish, read, and manage blog posts with a clean interface.  

---

## 🚀 Features
- 📝 Create, edit, and delete blog posts  
- 🎨 Server-side rendering with **EJS templates**  
- 🗄️ Persistent data storage with **PostgreSQL**  
- 🔒 Environment variables handled via **dotenv**  
- 📱 Responsive design with Bootstrap / CSS  

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express  
- **Frontend:** React + Vite
- **Database:** PostgreSQL  
- **Other:** npm, dotenv  

---

## 📂 Project Structure

📂 Project Root <br/>
├── public/                 # Static assets <br/>
├── src/                    # React frontend <br/>
│   ├── assets/             # Images, CSS <br/>
│   │   ├── css/ <br/>
│   │   └── images/ <br/>
│   ├── components/         # Reusable components <br/>
│   │   ├── ContactForm.jsx <br/>
│   │   ├── Footer.jsx <br/>
│   │   ├── Header.jsx <br/>
│   │   ├── Navbar.jsx <br/>
│   │   └── PostForm.jsx <br/>
│   ├── pages/              # React pages (Blog, Home, etc.) <br/>
│   ├── App.jsx             # Root React component <br/>
│   ├── Layout.jsx          # Layout wrapper <br/>
│   └── main.jsx            # Vite entry file <br/>
├── views/ (optional)       # EJS templates (if server-side pages needed) <br/>
│   ├── partials/           <br/>
│   └── pages/              <br/>
├── .env                    # Environment variables <br/>
├── .gitignore              <br/>
├── eslint.config.js        <br/>
├── index.html              # Vite entry point <br/>
├── package.json            <br/>
├── package-lock.json       <br/>
├── README.md               <br/>
├── server.js               # Express backend (API + serves dist/) <br/>
├── vite.config.js          # Vite config <br/>
└── dist/                   # Generated React build (created after `npm run build`) <br/>


## 📄 License

© 2025 Developer-107. All rights reserved.
