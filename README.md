<img width="1200" alt="Labs" src="https://user-images.githubusercontent.com/99700157/213291931-5a822628-5b8a-4768-980d-65f324985d32.png">

<p>
 <h3 align="center">Chainstack is the leading suite of services connecting developers with Web3 infrastructure</h3>
</p>

<p align="center">
  <a target="_blank" href="https://chainstack.com/build-better-with-ethereum/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Ethereum.svg" /></a>&nbsp;  
  <a target="_blank" href="https://chainstack.com/build-better-with-bnb-smart-chain/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/BNB.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-polygon/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Polygon.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-avalanche/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Avalanche.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-fantom/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Fantom.svg" /></a>&nbsp;
</p>

<p align="center">
  • <a target="_blank" href="https://chainstack.com/">Homepage</a> •
  <a target="_blank" href="https://chainstack.com/protocols/">Supported protocols</a> •
  <a target="_blank" href="https://chainstack.com/blog/">Chainstack blog</a> •
  <a target="_blank" href="https://docs.chainstack.com/quickstart/">Chainstack docs</a> •
  <a target="_blank" href="https://docs.chainstack.com/quickstart/">Blockchain API reference</a> •
  <a target="_blank" href="https://console.chainstack.com/user/account/create">Start for free</a> •
</p>

# Proxy server for REST API keys using Express

This project shows how you can protect your Etherscan API key by creating your own back-end server where you store the API key.

Read the full guide on the Chainstack developer portal
* []()

## Project details

For this example, we built a simple app that uses the Etherscan API to retrieve the latest block from the Ethereum network and then display it on the screen. 

It is built using the `Express.js` framework, and the main server code is in the `index.js` file that you can find in the root directory.

## Quickstart

Clone the repository:

```sh
git clone https://github.com/soos3d/node-api-proxy-server.git
```

Edit the `.env.sample` file to include your Etherscan API key and rename it to `.env`.

```env
ETHERSCAN_API_KEY_VALUE="YOUR_API_KEY"
```

Install  dependencies:

```sh
npm ci
```

> Use `npm ci` to launch a `clean install` of the dependencies, this will install the same version as in the `package.json` file.

Run page in dev mode with:

```sh
npm run dev
```

The server is now running on `http://localhost:4000`. You can send a request to it with:

```sh
curl --location 'http://localhost:4000/api'
```

You will also find a basic front end in the `src` directory. You can run it in your browser and test the proxy server.

If you check the source code from the browser, you won't be able to find the API key used!

## Prerequisites

* Node.js: ^16.17.0— [install Node](https://nodejs.org/en/download/)
* Etherscan API key

If you check the source code from the browser, you won't be able to find the API key used! 
