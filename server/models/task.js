console.log("inside of models/task.js");
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: String,
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false},
   },{timestamps:true});
mongoose.model('Task', TaskSchema); 