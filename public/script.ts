
interface Task {
    title: String;
    dateCreated: Date
}

const appContainer: HTMLElement | any = document.getElementById("app");
const htmlToDoListCardList: HTMLElement | any = document.getElementsByClassName("to-do-list-card-list")[0];
const p1: HTMLElement | any = document.getElementById("p1") as HTMLElement;
const inputTask: HTMLElement | any = document.getElementsByClassName("to-do-list-card-input-text")[0] as HTMLElement;

var tasks = Array<Task>(
    {
        title: "Play krunker",
        dateCreated: new Date()
    }
)

function loadTasks(): void {    
    for (var task of tasks) {
        htmlToDoListCardList.innerHTML += `
            <li class ="to-do-list-card-list-item">
                <article class="to-do-list-card-list-item-container">
                    <p>${task.title}</p>
                    <input type="checkbox">
                </article>
            </li>
        `
    }
}

function submitTask(): void {
    htmlToDoListCardList.innerHTML += `
        <li class ="to-do-list-card-list-item">
            <article class="to-do-list-card-list-item-container">
                <p>${inputTask.value}</p>
                <input type="checkbox">
                <span>x</span>
            </article>
        </li>
    `
}

window.onload = function() {
    loadTasks();
}