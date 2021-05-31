
const config = { header : { Accept: 'application/json'}}
// Make a request for a user with a given ID
axios.get('https://api.cryptonator.com/api/full/btc-usd' , config)
  .then(function (response) {
      let BTCbody = document.querySelector('.btc');
      let keiciu = "";
      let keitykla = response.data.ticker.markets;
    
      for (let i = 0; i < keitykla.length; i++) {
          console.log(keiciu)
          keiciu += `<div>${keitykla[i].market
              }</div>`;
          HTML = `<div>${response.data.ticker.base}</div>
    <div>${response.data.ticker.target}</div>
    <div>${response.data.ticker.price}</div>
    ${keiciu}`;
       
          console.log(HTML)
      }
      return HTML;
      BTCbody.innerHTML = HTML
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

