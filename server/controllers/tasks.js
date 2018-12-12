console.log("inside of controllers/tasks.js");

const mongoose = require("mongoose"),
    Task = mongoose.model("Task");

class Tasks {
    index(req, res){
        Task.find({}, (err, tasks) => {
            if (err){
                console.log('there was an error');
            }
            else {
                console.log('no errors');
            }
            res.json({tasks: tasks});
        });
    };

    add(req, res){
        let task = new Task(req.body);
        task.save((err) => {
            if (err){
                console.log('there was an error');
            }
            else {
                console.log('no errors');
            }
            res.redirect("/tasks");
        });
    }

    find(req, res){
        Task.findById(req.params._id, (err, task) => {
            if (err){
                console.log('there was an error');
            }
            else {
                console.log('no errors');
            }
            console.log(task);
            res.json({task: task});
        });
    };


    edit(req, res){
        Task.findByIdAndUpdate(req.params._id, req.body, (err, task) => {
            if (err){
                console.log('there was an error');
            }
            else {
                console.log('no errors');
            }
            console.log('before', task);
        });
        res.redirect("/tasks");
    };

    delete(req, res){
        console.log(req.params._id);
        Task.remove({_id: req.params._id}, (err) => {
            if (err){
                console.log('there was an error');
            }
            else {
                console.log('no errors');
            }
        });
        res.redirect("/tasks");
    };
}

module.exports = new Tasks();