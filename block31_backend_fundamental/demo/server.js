const students = require('./data');

// import the express module
const express = require('express');

// import the morgan library 
const morgan = require('morgan')

const PORT = 8080;

// Create a new express app
const app = express();

// this adds nice color-coded logging to our server terminal
// while the express app is running
app.use(morgan('dev'));

// use = middleware
// this is telling express to repond to all requests that MATCH
// a file that is found in /public directory
app.use(express.static('public'));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html");
// });

// response to requests for /api
app.get('/api', (req, res) => {
    res.send("Hello world! API is alive!");
})

// handle requests with query parameters
app.get('/api/search', (req, res) => {
    // extra query parameter with the key "name"
    const { name } = req.query;
    res.send('Returning response to requests for "name" query param of: ' + name);
})

// REQUESTS ARE RESPONDED TO IN THE ORDER THE ROUTES ARE ENCOUNTERED IN YOUR CODE
// respond to requests with a dynamic route
app.get('/api/:someString', (req, res) => {
    const { someString } = req.params;
    res.send('Returning response to /api/' + someString)
});

// Handle requests with combined query param + dynamic route
app.get('/api/:string/search', (req, res) => {
    const { string } = req.params;
    const { name, id } = req.query;
    res.send("Returning response to request for the dynamic route: " + string + " with query param 'name' set to " + name + " and ID set to: " + id);
});

// STUDENTS API EXAMPLE

// GET all students
app.get('/api/v1/students', (req, res) => {
    // console.log(students);
    res.send(students);
});


// GET student by ID
app.get('/api/v1/students/:id', (req, res, next) => {
    // extract the id from the URL path
    const { id } = req.params;
    // if id is not a valid number
    if (!id.match(/[0-9]+/)){
        console.log('passing to next route');
        // pass the request to the next route that matches
        next();
    }
    // find the student (need to turn the string ID from the URL into a number)
    const student = students.find(student => student.id === Number(id));
    res.send(student);
});


// GET student by name query eg. ?name=Bob
// or age or teacher are also valid query params, eg age=12, or teacher=Mr. Smith
app.get('/api/v1/students/search', (req, res) => {
    // extract the name from the query parameters string
    const { name, teacher, age } = req.query;
    let filteredStudents = students;
    
    // if there was a name query param
    if (name) {
        filteredStudents = filteredStudents.filter(student => student.name === name);
    }

    if (age) {
        filteredStudents = filteredStudents.filter(student => student.age === Number(age));
    }

    if (teacher) {
        filteredStudents = filteredStudents.filter(student => student.teacher === teacher);
    }

    res.send(filteredStudents);
});


// ALL OF OUR RESPONSES NEED TO BE DEFINE BEFORE LISTEN IS CALLED
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})