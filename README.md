## installation

`npm install kefir-jquery-ajax`

## example usage

```javascript
var kefirAjax = require('kefir-jquery-ajax')

//returns a promise for a GET to the query string
var queryOpts = function (date, number) {
   return {
    url: 'http://127.0.0.1:3000/sms',
    data: { 
      date: date, 
      number: number 
    }
  }
}

//returns a stream* from responses to query()'s AJAX request
var getData = function (date, number) {
  var responseStream = kefirAjax(queryOpts(date, "my-phone-number"))
  return responseStream.map(JSON.parse)
}

module.exports = getData
```
