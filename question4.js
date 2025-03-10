// Task list and ID counter
let tasks = [];
let nextId = 1;

// add a new task
function addTask(name, description) {
    if (!name || !description) {
        console.log("Please provide both a task name and description.");
        return;
    }

    let task = { id: nextId++, name, description };
    tasks.push(task);
    console.log(`Task added: [${task.id}] ${task.name} - ${task.description}`);
}

//  show all
function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }

    console.log("Task List:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id} | Name: ${task.name} | Description: ${task.description}`);
    });
}

// update 
function updateTask(id, newName, newDescription) {
    let task = tasks.find(task => task.id === id);
    
    if (!task) {
        console.log(`Task with ID ${id} not found.`);
        return;
    }

    if (newName) task.name = newName;
    if (newDescription) task.description = newDescription;

    console.log(`Task ${id} updated successfully!`);
}

// delete a task
function deleteTask(id) {
    let index = tasks.findIndex(task => task.id === id);
    
    if (index === -1) {
        console.log(`Task with ID ${id} not found.`);
        return;
    }

    let deletedTask = tasks.splice(index, 1)[0];
    console.log(`Task ${deletedTask.id} deleted: ${deletedTask.name}`);
}

// Test the functions
addTask("Db pass", "learn db");
addTask("mo sayaw", "manilhig");

viewTasks(); // show tanan

updateTask(1, "Study Advanced", "Learn closures and prototypes");
deleteTask(2);

viewTasks(); // Show ang tanan
