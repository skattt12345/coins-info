// server.js
const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/getCoinPrices", async (req, res) => {
  try {
    const coinsToSearch = [
      "aves",
      "dydx",
      "callisto",
      "ny-blockchain",
      "Dogether",
      "OctaSpace",
      "Disney",
      "egaz",
      "Canxium",
      "bitnet",
      "PowBlocks",
      "larissa-blockchain",
    ];

    const apiKey = "81c7c6f5-c707-426c-b33f-7074e28893e2";
    const url = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest";

    const response = await axios.get(url, {
      headers: {
        "X-CMC_PRO_API_KEY": apiKey,
      },
      params: {
        symbol: coinsToSearch.join(","),
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Failed to fetch prices:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
