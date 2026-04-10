# DotGuard 🛡️

The zero-config shield for your environment variables.

Stop your Node.js apps from crashing due to undefined or empty environment variables. DotGuard ensures your `.env` matches your `.env.example` before your code even runs.

## ✨ Features

- 🚀 **One-Line Setup** — Just import it and forget it.
- 📦 **Zero Dependencies** — Keeps your bundle size microscopic.
- 🔒 **Auto-Gitignore** — Automatically adds `.env` to your `.gitignore` to prevent leaks.
- 🎨 **Beautiful UI** — Professional terminal error boxes.
- 🧪 **Empty Value Check** — Catches `KEY=` errors that other tools miss.

## 🚀 Quick Start

```bash
npm install dotguard
```

Add this to the very first line of your entry file (e.g., `index.js` or `main.ts`):

```js
import 'dotguard/protect';
```

## 🛠️ Usage

DotGuard looks for a `.env.example` file in your root directory. If it finds one, it compares it against your `.env`. If any keys are missing or empty, it stops the process with a clear explanation.

## 📄 License

MIT © [Vivek Kumar Verma](https://github.com/Vivekkumarv123)
