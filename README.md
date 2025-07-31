# React Quote Loader

A customizable React component that displays animated inspirational quotes with a modern spinner—ideal for loading screens, page transitions, or data fetching.

---

## ✨ Features

- Random inspirational quotes with author attribution
- Dark and light theme support
- Smooth entrance/exit animations via `framer-motion`
- Stylish spinner using `react-spinners`
- Lightweight, easy integration, and customizable

---

## 📦 Installation

```bash
npm install react-quote-loader
# or
yarn add react-quote-loader
```

---

## 🚀 Usage

```jsx
import React from 'react';
import QuoteLoader from 'react-quote-loader';

function App() {
    return (
        <div>
            <QuoteLoader theme="dark" />
            {/* Your app content */}
        </div>
    );
}
```

### ⚙️ Props

| Prop   | Type   | Default | Description                      |
|--------|--------|---------|----------------------------------|
| theme  | string | "dark"  | "dark" or "light" theme selection|

---

### 🎨 Customization

- Change spinner style (e.g., ClipLoader)
- Use a custom quote API
- Adjust animation timing
- Modify theme colors

---

## 🌐 Built With

- React
- Framer Motion
- React Spinners
- Public Quote API

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📄 License

MIT License

---

## 👤 Author

Shashwat Mahajan  
[GitHub](https://github.com/Shashwat-Mahajan) | [LinkedIn](https://www.linkedin.com/in/shashwatmahajan2/)

---

## 🧠 Stay Inspired

> “The best way to predict the future is to invent it.”  
> — Alan Kay