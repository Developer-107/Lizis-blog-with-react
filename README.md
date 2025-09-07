
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

📂 Project Root
├── public/                 # Static assets
├── src/                    # React frontend
│   ├── assets/             # Images, CSS
│   │   ├── css/
│   │   └── images/
│   ├── components/         # Reusable components
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   └── PostForm.jsx
│   ├── pages/              # React pages (Blog, Home, etc.)
│   ├── App.jsx             # Root React component
│   ├── Layout.jsx          # Layout wrapper
│   └── main.jsx            # Vite entry file
├── views/ (optional)       # EJS templates (if server-side pages needed)
│   ├── partials/           
│   └── pages/
├── .env                    # Environment variables
├── .gitignore              
├── eslint.config.js        
├── index.html              # Vite entry point
├── package.json            
├── package-lock.json       
├── README.md               
├── server.js               # Express backend (API + serves dist/)
├── vite.config.js          # Vite config
└── dist/                   # Generated React build (created after `npm run build`)


## 📄 License

© 2025 Developer-107. All rights reserved.
