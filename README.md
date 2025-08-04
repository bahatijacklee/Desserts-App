# 🍰 Desserts App

A visually sweet and functional web app for browsing, selecting, and ordering your favorite desserts. Built with **React**, styled with **modern CSS**, and loaded with delightful UI components, this app ensures your dessert shopping is as smooth as your favorite panna cotta!

![Vite](https://img.shields.io/badge/Powered%20by-Vite-%23646CFF?style=flat-square)
![React](https://img.shields.io/badge/Built%20with-React-61DAFB?style=flat-square)
![License: MIT](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)

---

## 📸 Preview

![Desserts App Screenshot](./assets/images/image-waffle-desktop.jpg)

---

## 🍩 Features

- 🧁 Responsive and mobile-friendly dessert menu
- 🛒 Interactive cart with quantity controls
- ✅ Order confirmation modal with order summary
- ♻️ Carbon-neutral shipping badge
- 🌟 Clean and modular component structure
- 🎨 Theming using custom CSS variables

---

## 🛠️ Tech Stack

| Layer        | Technology     |
|--------------|----------------|
| Frontend     | React, Vite    |
| Styling      | Vanilla CSS (with variables) |
| Data         | Static JSON (`desserts.json`) |
| Fonts        | Red Hat Text (Variable Font) |

---

## 📁 Project Structure

```

├── assets/
│   ├── fonts/           # Red Hat font files
│   └── images/          # Icons and dessert images
├── public/              # Public static files (including desserts.json)
├── src/
│   ├── components/      # Reusable React components
│   ├── App.jsx          # Main app layout
│   └── main.jsx         # App entry point
├── index.html           # HTML template
├── package.json         # Project metadata and scripts
└── vite.config.js       # Vite configuration

````

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v16 or newer recommended).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/bahatijacklee/desserts-app.git
cd desserts-app
````

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and go to `http://localhost:5173`

---

## 🧪 Available Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Launch the dev server        |
| `npm run build`   | Build app for production     |
| `npm run preview` | Preview the production build |

---

## 🍰 Sample Data

Desserts are loaded from `public/desserts.json` and include fields like:

```json
{
  "name": "Waffle with Berries",
  "category": "Waffle",
  "price": 6.50,
  "image": {
    "mobile": "image-waffle-mobile.jpg",
    "tablet": "image-waffle-tablet.jpg",
    "desktop": "image-waffle-desktop.jpg"
  }
}
```

---

## 🎯 Future Improvements

* 🔍 Search and filter desserts by category or name
* 👤 User authentication and order history
* 🧾 Integration with payment gateway
* 🌐 i18n support for multilingual users

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 🙌 Acknowledgements

* [Red Hat Fonts](https://github.com/RedHatOfficial/RedHatFont)
* [Vite](https://vitejs.dev/)
* [React](https://react.dev/)

