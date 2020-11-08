const date = require('../generateDate.js');
const workTask = require('../models/worktask');

exports.getWorkPage = (req, res) =>{
    workTask.fetchTasks(items => {
        let day = date.getDate();
        res.render("index.ejs", {date: day, toDoItems: items});
    });
};

exports.postWorkItem = (req, res) => {
    const item = new workTask (req.body.newTask);
    item.saveTask();
   /* let newTask = req.body.newTask;
    toDoList.push(newTask); // lükkab sisestatud asja üleval loodud massiivi */
    res.redirect("/work");
    
};
/*
exports.getWorkPage = (req, res) =>{
    let day = date.getDate();
    let weekday = date.getWeekDay();
    console.log(day);
    res.render("work.ejs", {date: weekday, toDoItems: toDoList}); ///render sest pole staatiline fail et saaks res.send teha
};

exports.postWorkItem = (req, res) => {
    let newTask = req.body.newTask;
    toDoList.push(newTask); // lükkab sisestatud asja üleval loodud massiivi
    res.redirect("/work");
    
};*/
exports.deleteItem = (req, res) => {

    console.log("Call from dlete", req.body.checkbox);
    workTask.deleteItem(req.body.checkbox);
    res.redirect('/');
}