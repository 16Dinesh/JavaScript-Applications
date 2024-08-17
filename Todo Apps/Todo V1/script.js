const btn =  document.querySelector('button');

btn.addEventListener('click', ()=> {
    let todo= [];
let req;
while(true) {
    req = prompt("please type you Request list,add,delete,Quit").toLowerCase();
    if(req === "quit"){
        console.log(`you have quit`);
        break;
    }
    else if (req === "list") {
        console.log(`Name of the ${req}`);
        console.log("-----------")
          for (let i = 0 ; i < todo.length; i++){
            console.log(i + 1 + ". " + todo[i]);
            }
            console.log("-----------")
        }
    else if (req === "add") {
        let task = prompt("what you wanna add to the list");
        todo.push(task);
        console.log("task added sussesfully");
    }
    else if (req === "delete"){
        let del = prompt("what you wanna delete in numbers");
        del = parseInt(del);
        todo.splice(del ,1);
        console.log("you have sussesfully deleted the code")
        console.log(`your deleted print `);
    } else {
        alert("Wrong Request");
    }
}
})