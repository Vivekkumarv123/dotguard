# @vivekkumarv123/dotguard 🛡️

> The zero-config shield for your environment variables.

Stop your Node.js apps from crashing due to `undefined` or empty environment variables. **DotGuard** ensures your `.env` matches your `.env.example` and secures your repo before your code even runs.

[![npm version](https://img.shields.io/npm/v/@vivekkumarv123/dotguard.svg)](https://www.npmjs.com/package/@vivekkumarv123/dotguard)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Bundle Size](https://img.shields.io/bundlephobia/min/@vivekkumarv123/dotguard)](https://bundlephobia.com/package/@vivekkumarv123/dotguard)

---

## ✨ Why DotGuard?

Most developers check environment variables manually or wait for the app to crash in production. **DotGuard** fixes the "human error" pipeline:

- 🚀 **One-Line Setup:** Just import it at the top of your entry file.
- 🔒 **Auto-Gitignore:** Automatically adds `.env` to your `.gitignore` to prevent accidental secret leaks.
- 🧪 **Empty Value Check:** Unlike standard loaders, DotGuard catches `KEY=` (empty values) that cause silent failures.
- 🎨 **Beautiful UI:** Professional terminal error boxes for better debugging.
- 📦 **Zero Dependencies:** Microscopic footprint with no bloat.

## 🚀 Installation

```bash
npm install @vivekkumarv123/dotguard
```

## 🛠️ Usage

Add this to the very first line of your entry file (e.g., `index.js`, `server.ts`, or `main.js`):

```js
import '@vivekkumarv123/dotguard/protect';
```

### How it works

- It scans for a `.env.example` file in your project root.
- It compares it against your local `.env`.
- If keys are missing or empty, it stops the process with a beautiful error report.
- It ensures `.env` is listed in your `.gitignore`.

## 👨‍💻 Author

Vivek Kumar Verma

## 📄 License

MIT © [Vivek Kumar Verma](https://github.com/Vivekkumarv123)
