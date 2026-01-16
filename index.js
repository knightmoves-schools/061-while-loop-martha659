function markAsDone(todos) {
    let i = 0;
while (i < todos.length) {
    todos[i] = "done - " + todos [i];
i++;
}
return todos;
}
const tasks = ["wash dishes", "clesn room", "swich laundry"];
const updated = markAsDone(tasks);


