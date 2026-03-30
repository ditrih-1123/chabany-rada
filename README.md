This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result (локально `BASE_PATH` не задається).

## Деплой на GitHub Pages

Репозиторій: [github.com/ditrih-1123/chabany-rada](https://github.com/ditrih-1123/chabany-rada). Після пушу в `main` або `master` спрацьовує workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. У **Settings → Pages** оберіть джерело **GitHub Actions**.
2. Перший успішний деплой: сайт буде за адресою **https://ditrih-1123.github.io/chabany-rada/** (з урахуванням `basePath` у `next.config.ts`).

Локальний білд як на GitHub:

```bash
set BASE_PATH=/chabany-rada
set NEXT_PUBLIC_SITE_URL=https://ditrih-1123.github.io/chabany-rada
npm run build
```

У PowerShell замість `set` використовуйте `$env:BASE_PATH="/chabany-rada"; $env:NEXT_PUBLIC_SITE_URL="https://ditrih-1123.github.io/chabany-rada"; npm run build`.

Статичні файли з’являються в каталозі `out/`.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
