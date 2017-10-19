// When the user clicks on submit

var data = {};
var routes = [];

$('#submit').on('click', function() {
  // Gather the data from the forms
  gather();

  // Using the data, generate the RESTful routes
  generateRestRoutes();
});

function gather() {
  var endpointInput = $('#endpoint');
  data.endpoint = endpointInput.val();
}

function generateRestRoutes() {
  generateIndexRoute();
  creationRoutes('get');
  creationRoutes('post');
  showRoute();
  modifyRoutes('get');
  modifyRoutes('put');
  destroyRoute();
  checkPress();
  
}

// Index
function generateIndexRoute() {
  var string = `
  <pre>app.get('/${data.endpoint}', function(req, res) {
  res.send('This is the index route');
});</pre>`
  $('#output').append(string);
}

// New and Create
function creationRoutes(method) {

  // if method is get
  if (method == 'get') {
    var string = 
    `<pre>app.get('/${data.endpoint}/new', function(req, res) {
  res.send('This is the ${method} route');
});</pre>`
    $('#output').append(string);
  
  } else {
    var string = 
    `
    <pre>app.post('/${data.endpoint}', function(req, res) {
  res.send('This is the ${method} route');
});</pre>`
    $('#output').append(string);
  }
}

function showRoute() {
  var string = 
  `
  <pre>app.get('/${data.endpoint}/:id', function(req, res) {
  res.send('This is the index route');
});</pre>`
  $('#output').append(string);
}

function modifyRoutes(method) {
   // if method is get
   if (method == 'get') {
    var string = 
    `
    <pre>app.get('/${data.endpoint}/:id/edit', function(req, res) {
  res.send('This is the ${method} route');
});</pre>`

    $('#output').append(string);
  
  } else {
    var string = 
    `
    <pre>app.put('/${data.endpoint}/:id', function(req, res) {
  res.send('This is the ${method} route');
});</pre>`
    $('#output').append(string);
  }
}

function destroyRoute() {
  var string = 
  `
  <pre>app.delete('/${data.endpoint}/:id', function(req, res) {
  res.send('This is the DELETE route');
});</pre>`
  $('#output').append(string);
}

function checkPress() {
  $('#endpoint').keypress(function() {
    clearData();
  });
}
function clearData() {
  data.endpoint = '';
  $('#output').empty();
}