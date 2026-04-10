import fs from 'node:fs';
import path from 'node:path';

export function protect() {
  try {
    const root = process.cwd();
    const envPath = path.join(root, '.env');
    const examplePath = path.join(root, '.env.example');

    if (!fs.existsSync(examplePath)) return;

    if (!fs.existsSync(envPath)) {
      renderUI(['.env file is missing!']);
      process.exit(1);
    }

    // Parse both files into Key-Value objects
    const envData = parseEnv(fs.readFileSync(envPath, 'utf-8'));
    const exampleData = parseEnv(fs.readFileSync(examplePath, 'utf-8'));
    const exampleKeys = Object.keys(exampleData);

    const missing: string[] = [];
    const empty: string[] = [];

    for (const key of exampleKeys) {
      if (!(key in envData)) {
        missing.push(key);
      } else if (envData[key] === '') {
        empty.push(`${key} (empty value)`);
      }
    }

    if (missing.length > 0 || empty.length > 0) {
      renderUI([...missing, ...empty]);
      process.exit(1);
    }

    // 3. The "Hero" Safety Feature
    const gitignorePath = path.join(root, '.gitignore');
    if (fs.existsSync(gitignorePath)) {
      const gitignore = fs.readFileSync(gitignorePath, 'utf-8');
      const hasEnv = /^(\.env)$/m.test(gitignore);
      
      if (!hasEnv) {
        fs.appendFileSync(gitignorePath, '\n# Added by DotGuard\n.env\n');
        console.log('\x1b[33m%s\x1b[0m', '💡 DotGuard: Added .env to your .gitignore for safety.');
      }
    }

    console.log('\x1b[32m%s\x1b[0m', '🛡️  DotGuard: Environment verified.');
  } catch (error) {
    console.warn('⚠️  DotGuard encountered an internal error.');
  }
}

function parseEnv(content: string): Record<string, string> {
  const config: Record<string, string> = {};
  content.split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) return;
    
    const [key, ...values] = trimmed.split('=');
    if (key) {
      config[key.trim()] = values.join('=').trim();
    }
  });
  return config;
}

function renderUI(issues: string[]) {
  const line = "─".repeat(50);
  console.error(`\n\x1b[41m\x1b[37m 🛡️  DOTGUARD CRITICAL ERROR \x1b[0m`);
  console.error(`\x1b[31m┌${line}┐\x1b[0m`);
  console.error(`\x1b[31m│\x1b[0m \x1b[1mEnvironment validation failed:\x1b[0m`);
  
  issues.forEach(issue => {
    console.error(`\x1b[31m│\x1b[0m  \x1b[31m✖\x1b[0m ${issue.padEnd(46)} \x1b[31m│\x1b[0m`);
  });

  console.error(`\x1b[31m├${line}┤\x1b[0m`);
  console.error(`\x1b[31m│\x1b[0m \x1b[2mUpdate your .env to match .env.example to start.  \x1b[0m \x1b[31m│\x1b[0m`);
  console.error(`\x1b[31m└${line}┘\x1b[0m\n`);
}