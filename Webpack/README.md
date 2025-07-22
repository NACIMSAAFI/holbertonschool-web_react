# 📦 Webpack Basic Project

This project is part of the **Web Stack Programming Curriculum** at Holberton School.  
It demonstrates a simple setup and configuration of **Webpack** to bundle JavaScript and other assets.

---

## 🧠 Learning Objectives

By completing this project, I learned how to:

- Set up Webpack in a basic JavaScript project
- Define entry and output files
- Use loaders for CSS and JavaScript (e.g., Babel)
- Add useful plugins like `HtmlWebpackPlugin`
- Split code into multiple chunks
- Set up and use a development server

---

## 🛠️ Technologies Used

- Node.js (v20.x.x)
- npm (v9.x.x)
- Webpack
- Babel
- HTML
- JavaScript (ES6+)

---

## 📁 Project Structure

```text
webpack_project/
├── dist/
│   └── index.html
├── src/
│   └── index.js
├── webpack.config.js
├── package.json
└── README.md
```
🚀 Getting Started
1. Clone the repository
```
git clone <repository-url>
cd webpack_project
```

2. Install dependencies
```
npm install
```

3. Run development server
```
npm run start
```

4. Build the project
```
npm run build
```

📜 Scripts (from package.json)
```
"scripts": {
  "start": "webpack serve --mode development",
  "build": "webpack --mode production"
}
```

## 🔗 Resources

Webpack Documentation

Webpack Beginner Guide

npm - package.json Guide

## 👨‍💻 Author

### Nacim Saafi
Holberton School | Web Stack Programming 2024
Project: Webpack
