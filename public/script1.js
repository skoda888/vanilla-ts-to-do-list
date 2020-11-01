
var appContainer = document.getElementById("app");
var htmlToDoListCardList = document.getElementsByClassName("to-do-list-card-list")[0];
var p1 = document.getElementById("p1");
var tasks = Array({
    title: "asdasdasdasd",
    dateCreated: new Date()
});
function loadTasks() {
    document.getElementById("p1").innerHtml = "123";
    for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
        var task = tasks_1[_i];
        console.log(task.title);
        htmlToDoListCardList.innerHtml += "<li class=\"to-do-list-card-list-item\"><p>" + task.title + "</p></li>";
    }
}
function submitTask() {
    alert(tasks[0].dateCreated);
    document.getElementById("p1").innerHtml = "123";
}
window.onload = function () {
    loadTasks();
};
