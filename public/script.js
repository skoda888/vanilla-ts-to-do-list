"use strict";
var appContainer = document.getElementById("app");
var htmlToDoListCardList = document.getElementsByClassName("to-do-list-card-list")[0];
var p1 = document.getElementById("p1");
var inputTask = document.getElementsByClassName("to-do-list-card-input-text")[0];
var tasks = Array({
    title: "Play krunker",
    dateCreated: new Date()
});
function loadTasks() {
    for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
        var task = tasks_1[_i];
        htmlToDoListCardList.innerHTML += "\n            <li class =\"to-do-list-card-list-item\">\n                <article class=\"to-do-list-card-list-item-container\">\n                    <p>" + task.title + "</p>\n                    <input type=\"checkbox\">\n                </article>\n            </li>\n        ";
    }
}
function submitTask() {
    htmlToDoListCardList.innerHTML += "\n        <li class =\"to-do-list-card-list-item\">\n            <article class=\"to-do-list-card-list-item-container\">\n                <p>" + inputTask.value + "</p>\n                <input type=\"checkbox\">\n                <span>x</span>\n            </article>\n        </li>\n    ";
}
window.onload = function () {
    loadTasks();
};
