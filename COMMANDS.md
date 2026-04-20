# Coindex CLI Commands

This document lists all available commands in this project.

## Install and Run

### Install dependencies

~~~bash
npm install
~~~

### Run CLI in development mode

~~~bash
npm run dev
~~~

## Main CLI

Executable name:

~~~bash
coindex
~~~

### Show version

~~~bash
coindex -V
coindex --version
~~~

### Show help

~~~bash
coindex -h
coindex --help
~~~

### Available top-level groups

~~~bash
coindex key
coindex check
~~~

## Key Commands

Manage API key used by the app.

### Set API key

~~~bash
coindex key set
~~~

Behavior:
- Opens an interactive prompt
- Saves your key in local config storage

### Show current API key

~~~bash
coindex key show
~~~

### Remove API key

~~~bash
coindex key remove
~~~

### Key command help

~~~bash
coindex key -h
coindex key --help
~~~

## Check Commands

Fetch and print crypto prices.

### Check prices (defaults)

~~~bash
coindex check price
~~~

Default options:
- coin: BTC,ETH,XRP
- cur: USD

### Check prices with currency

~~~bash
coindex check price --cur USD
coindex check price --cur EUR
~~~

### Check prices with custom coin list

~~~bash
coindex check price --coin BTC,ETH,DOGE
~~~

### Full options example

~~~bash
coindex check price --coin BTC,ETH --cur EUR
~~~

### Check command help

~~~bash
coindex check -h
coindex check --help
coindex check price -h
~~~

## Notes

- Currency output is formatted with currency symbols based on --cur (for example, $ for USD and € for EUR).
- If an operation is cancelled (such as Ctrl+C during prompt), the app exits with a readable message.
