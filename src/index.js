import _ from 'lodash';
// import './style.css';
// https://opt-showcase-api.optcentral.com/products?page=${filters.page}&limit=${filters.limit}&sort=${filters.sort}

Event.observe(document, 'dom:loaded', init);

function init()
{
  //initialise code
  loadingInitialProducts();
}


function handleKeywordChange(event, element) {
  console.log(event.target.value);
}

function loadingInitialProducts() {
  new Ajax.Request(`https://opt-showcase-api.optcentral.com/products?page=1&limit=24&sort=pricing.retail%3Bdesc`, {
      method: 'get',
      onSuccess: onSuccess,
      onFailure:  failureFunc
  });
}

function onSuccess(transport, response){
  alert(json ? Object.inspect(json) : "no JSON object");
  var json = response.toJSON();
  console.log("json", response);
}

// function successFunc(transport, json) {
//   if (200 == response.status) {
//       alert("Call is success");
//     console.log("res", JSON.parse(response));
//     $('products-list').append(response);
//   }
// }
function failureFunc(response) {
  alert("Call is failed" );
}

document.observe("dom:loaded", function(event) {
  var filters = {
    page: 1,
    limit: 10,
    sort: 'pricing.retail%3Bdesc'
  }
  // loadingInitialProducts();
  $("search").on("change", "input", handleKeywordChange);
  Form.EventObserver = Class.create(Abstract.EventObserver, {
    getValue: function() {
      console.log("data", Form.serialize(this.element));
      return Form.serialize(this.element);
    }
  });

});