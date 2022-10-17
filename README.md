# Node API proxy server

This project shows how you can protect your Etherscan API key by creating your own back-end server where you store the API key. 

## Quickstart

1. Clone the repo.
1. Edit the `.env.sample` file to include your Etherscan API key and rename it to `.env`.
1. Install  dependencies:

```sh
npm install
```
4. Run page with:

```sh
npm run dev
```
The page is now running in `http://localhost:5000/`. Open it in your browser to see it. Click the `Latest block` button to display the latest block retrieved from the Ehterscan API. 

If you check the source code from the browser, you won't be able to find the API key used! 
