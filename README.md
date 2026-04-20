# Coindex CLI

A simple Node.js CLI to manage your CoinMarketCap API key and check live crypto prices from the terminal.

## Features

- Set, show, and remove API key from local config storage
- Fetch top crypto prices from CoinMarketCap
- Format prices with currency symbols (for example, $ and €)
- Colored terminal output for better readability
- Clean cancellation handling for interrupted prompts

## Requirements

- Node.js 18+
- npm

## Installation

### 1. Install dependencies

```bash
npm install
```

### 2. Make command available locally (recommended for development)

```bash
npm link
```

After this, you can run `coindex` from your terminal.

## Development Run

To run the root CLI directly:

```bash
npm run dev
```

## Usage

### Show help and version

```bash
coindex --help
coindex --version
```

### API key commands

Set API key (interactive):

```bash
coindex key set
```

Show current key:

```bash
coindex key show
```

Remove current key:

```bash
coindex key remove
```

### Price commands

Use default options (`BTC,ETH,XRP` and `USD`):

```bash
coindex check price
```

Change currency:

```bash
coindex check price --cur EUR
coindex check price --cur USD
```

Provide coin list:

```bash
coindex check price --coin BTC,ETH,DOGE
```

Use both options:

```bash
coindex check price --coin BTC,ETH --cur EUR
```

## Full Command Reference

See [COMMANDS.md](./COMMANDS.md) for the complete list of commands and examples.

## Project Scripts

- `npm run dev`: runs `node ./bin/coindex.js`
- `npm test`: placeholder test script

## License

MIT
