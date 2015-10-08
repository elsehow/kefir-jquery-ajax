var $ = require('jquery')
var Kefir = require('kefir')

var ajax = function (options) {
  return Kefir.stream(function(emitter) {
    var promise = $.ajax(options);
    promise.done(emitter.emit);
    promise.fail(function(promise, textStatus, errorThrown) {
      emitter.error(promise.status === 0 ? 'Connection problem' : promise.responseText);
    });
    return function() {
      promise.abort();
    }
  }).take(1).endOnError().toProperty();
}

module.exports = ajax
