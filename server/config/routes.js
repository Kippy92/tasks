console.log("inside of routes.js");
const mongoose = require('mongoose');
Task = mongoose.model('Task');
const Tasks = require('../controllers/tasks.js');

module.exports = function(app){
    app.get('/tasks', Tasks.index);
    app.get("/tasks/:_id", Tasks.find);
    app.post("/tasks", Tasks.add);
    app.put("/tasks/:_id", Tasks.edit);
    app.delete("/tasks/:_id", Tasks.delete);
}  