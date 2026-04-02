# SolanaAds

A decentralized advertising network built on Solana. Developers monetize their dApps, users earn crypto rewards for their attention, and advertisers get fully transparent on-chain campaigns.

## Structure

This is a pnpm monorepo.

```
solana-ads/
├── apps/
│   └── web/          # Next.js landing page
├── packages/
│   ├── ui/           # Shared React component library
│   └── config/       # Shared TypeScript & tooling config
```

## Getting Started

**Prerequisites:** Node.js 18+, pnpm 8+

```bash
# Install dependencies
pnpm install

# Run the web app in development
pnpm dev

# Build all packages
pnpm build
```

## Tech Stack

- [Next.js 15](https://nextjs.org) — web app framework
- [Tailwind CSS](https://tailwindcss.com) — styling
- [Iconsax React](https://www.npmjs.com/package/iconsax-react) — icons
- [pnpm workspaces](https://pnpm.io/workspaces) — monorepo management
- [TypeScript](https://www.typescriptlang.org) — type safety

## License

This project is proprietary software. See [LICENSE](./LICENSE) for details.
Unauthorized use, copying, or distribution is strictly prohibited.
