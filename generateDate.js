exports.getDate = function()

  {
    let today = new Date();
let options = {
    weekday : "long",
    day: "numeric",
    month: "long",
}

let day = today.toLocaleDateString("en-US", options);
return day;
//et kasutada väärtust hiljem on vaja return
}

exports.getWeekDay = function()

{
  let today = new Date();
let options = {

    weekday : "long",
 
}

let day = today.toLocaleDateString("en-US", options);
return day;

}