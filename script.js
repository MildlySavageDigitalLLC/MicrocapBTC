function updateClock() {
  const now = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  document.getElementById("clock").textContent = now;
}

function fetchBitcoinStats() {
  // BTC price from CoinGecko
  fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
    .then(res => res.json())
    .then(data => {
      document.getElementById("btc-price").textContent = `$${data.bitcoin.usd.toLocaleString()}`;
    });

  // Block height from Blockchain.info
  fetch("https://blockchain.info/q/getblockcount")
    .then(res => res.text())
    .then(height => {
      document.getElementById("block-height").textContent = height;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  updateClock();
  fetchBitcoinStats();
  setInterval(updateClock, 1000);
});
