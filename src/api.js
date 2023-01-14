const API_KEY =
  "7c4432d26686fc85dd92f139e2a8b07ad8b181cf5c9cd07c9a6567f96f059f59";

export const loadTickers = (tickers) =>
  fetch(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${tickers.join(
      ","
    )}&tsyms=USD&api_key=${API_KEY}`
  )
    .then((res) => res.json())
    .then((rawData) =>
      Object.fromEntries(
        Object.entries(rawData).map(([key, value]) => [key, value.USD])
      )
    );
