// link to the packages
let connect = require('connect');
let url = require ('url');

// new connet object
let app = connect();

// create calculator "page"
let lab2 = function(request, response, next) {

    // get the query string
    let queryStr = url.parse(request.url, true).query;

    // get the method, x and y values
    let method = queryStr.method;
    let x = queryStr.x;
    let y = queryStr.y; 

    if (method == "add") {
        // calculate equation and set result
        let equation = x + " + " + y;
        let result = x + y;

        // display results
        response.end('<h1>Lab 2 - Calculator - Add</h1>' +
        equation + ' = ' + result
        );

    } else if (method == "subtract") {
        // calculate equation and set result
        let equation = x + " - " + y;
        let result = x - y;

        // display results
        response.end('<h1>Lab 2 - Calculator - Subtract</h1>' +
        equation + ' = ' + result
        );

    } else if (method == "multiply") {
        // calculate equation and set result
        let equation = x + " * " + y;
        let result = x * y;

        // display results
        response.end('<h1>Lab 2 - Calculator - Multiply</h1>' +
        equation + ' = ' + result
        );

    } else if (method == "divide") {
        // calculate equation and set result
        let equation = x + " / " + y;
        let result = x / y;
        
        // display results
        response.end('<h1>Lab 2 - Calculator - Divide</h1>' +
        equation + ' = ' + result
        );

    } else {
        // set error message
        let equation = "Invalid equation."
        let result = " Try something else."

        // display results
        response.end('<h1>Lab 2 - Calculator</h1>' +
        equation + result
        );
    }
}

// map the url to virtual page
app.use('/lab2', lab2);

// start the connect http server
let port = process.env.PORT || 3000;
app.listen(port);
console.log('Connection to the server. Running on port 3000');