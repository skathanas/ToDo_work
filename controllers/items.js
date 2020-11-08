const date = require('../generateDate.js');
const Task = require('../models/task');
// let toDoList = [];

exports.getMainPage = (req, res) =>{
    Task.fetchTasks(items => {
        let day = date.getDate();
        res.render("index.ejs", {date: day, toDoItems: items});
    });
    /*
    let weekday = date.getDate();
    const itemsList = Task.fetchTasks();
   let weekday = date.getWeekDay();
    console.log(day); 
    res.render("index.ejs", {date: weekday, toDoItems: ''}); */ ///render sest pole staatiline fail et saaks res.send teha
};

exports.postNewItem = (req, res) => {
    const item = new Task (req.body.newTask);
    item.saveTask();
   /* let newTask = req.body.newTask;
    toDoList.push(newTask); // lükkab sisestatud asja üleval loodud massiivi */
    res.redirect("/");
    
};

exports.deleteItem = (req, res) => {

    console.log("Call from dlete", req.body.checkbox);
    Task.deleteItem(req.body.checkbox);
    res.redirect('/');
}