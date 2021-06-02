let input = prompt("What would you like to do?");
const todos = ["Clean room", "Read a book"];
while(input !== "quit" && input!== "q") {
    if(input === "list"){
        console.log("***********")
        for(let i=0; i<todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("***********")
    }else if(input==="new"){
        const newTodo = prompt("What is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if(input==="delete"){
        const index = parseInt(prompt("Please enter the index of the task to delete"));
        if(!Number.isNaN(index)){
        const deleted = todos.splice(index, 1);
        console.log(`Deleted ${deleted}`)
        } else{
            console.log("Invalid Index")
        }
        
    }
    input = prompt("What would you like to do?")
}
console.log("Ok you quit the app!")