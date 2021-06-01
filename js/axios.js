
const config = { header : { Accept: 'application/json'}}
// Make a request for a user with a given ID
axios.get('https://api.cryptonator.com/api/full/btc-usd' , config)
  .then(function (response) {
      let BTCbody = document.querySelector('.BTC');
    BTCbody.innerHTML = (response.data.ticker.base)
    //-----------------BTC-----------
    let USDbody = document.querySelector('.USD');
    USDbody.innerHTML = (response.data.ticker.target)
    //-----------USD------------
    let PRICEbody = document.querySelector('.PRICE');
    PRICEbody.innerHTML = response.data.ticker.price
    //----------PRICE----------------------
    
      let MARKETSbody = document.querySelector('.MARKETS');
      let nice = "";
      console.log(response.data.ticker.markets.length)
      for (i = 0; i < response.data.ticker.markets.length; i++) {
        nice += ((response.data.ticker.markets[i].market) + ' ' + (response.data.ticker.markets[i].price) + "\n");
              MARKETSbody.innerHTML = nice;
      }
      //----------------MARKETS---------------
      // let PRICESbody = document.querySelector('.PRICES');
      // let nice1 = "";
      // console.log(response.data.ticker.markets.length)
      // for (i = 0; i < response.data.ticker.markets.length; i++) {
      //   nice1 += JSON.stringify(response.data.ticker.markets[i].price)
        
      //   PRICESbody.innerHTML = nice1;
      //   //---------------PRICES--------------------
      
    
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


