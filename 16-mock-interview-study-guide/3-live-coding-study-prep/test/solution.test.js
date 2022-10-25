const {expect} = require('chai')
const {getCoinMarketData} = require('../src/solution')
const axios = require("axios");

const coin1 = "bitcoin";
const coin2 = "ethereum";

async function getCoinMarketDataSolution(coinName) {
  const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinName}`);
  return res.data.market_data
}

describe("getCoinMarketData", async () => {
  it("should display todays market data for a given coin", async () => {
    let marketData1 = await getCoinMarketData(coin1);
    let marketData2 = await getCoinMarketDataSolution(coin1);
    expect(marketData1).to.eql(marketData2);
  })
    it('should display todays market data for another given coin', async () => {
    let marketData1 = await getCoinMarketData(coin2);
    let marketData2 = await getCoinMarketDataSolution(coin2);
    expect(marketData1).to.eql(marketData2)
  })
})
