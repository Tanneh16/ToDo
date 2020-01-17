var taskInput=document.getElementById
("new-task"); //Add a new task.
var addButton=document.getElementsByTagName
("button")[0];//First button
var incompleteTaskHolder=document.getElementById 
("incomplete-tasks");//ul of #incomplete-tasks
var completedTasksHolder=document.getElementById
("completed-task");//completed-tasks
//New task list item

var createNewTaskElement=function(taskString){

    var listItem=document.createElement("li");

    //input (checkbox)
    var checkBox=document.createElement
    ("input");//checkbox
    //label
    var label=document.createElement("label");
    //label
    //input (text)
    var editInput=document.createElement
    ("input");//text
    //button.edit
    var editButton=document.createElement
    ("button");//edit button

    //button.delete
    var deleteButton=document.createElement
    ("button");//delete button

    label.innerText=taskString;

    //Each elements, needs appending
    checkBox.type="checkbox";
    editInput.type="text";

    editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
    editButton.className="edit";
    deleteButton.innerText="delete";

    //and appending
    // which allows the elements we create to appear on your web page or app
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}
var addTask=function(){
    console.log("Add Task...");
    //Create a new list item with the text from the #new-task:
    var listItem=createNewTaskElement
    (taskInput.value);

    //Append listItem to incompleteTaskHolder
    console.log(listItem);

    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value="";

}

//Edit an existing task

var editTask=function(){
    console.log("Edit Task...");
    console.log("Change 'edit to 'save'");

    var listItem=this.parent.Node;

    var editInput=listItem.querySelector('input [type=text]')
    var label=listItem.querySelector("label");
    var containsClass=listItem.classList.contains ("editMode");
    //If class of the parent is .editmode
    if(containsClass){

        //switch to .editmode
        //label becomes the inputs value.
            label.innerText=editInput.value;
    }else{
        editInput.value=label.innerText;
    }
    //toggle .editmode on the parent.
    //This method toggles between hide and show for the seleted element
    listItem.classList.toggle("editMode");
}
//Delete task
var deleteTask=function(){
        console.log("Delete Task...");

        var listItem=this.parentNode;
        var ul=listItem.parentNode;
        //Remove the parent list item from the ul.
        ul.removeChild(listItem);

}


//Mark task completed
var taskCompleted=function(){
        console.log("Complete taskInput...");

    //Append the task list item to the #completed-tasks
    var listItem=this.parentNode;
    completedTasksHolder.appendChild(listItem);
            bindTaskEvents(listItem, taskIncomplete);
            //bind lets you pass in what object the this keyword will resolve to in the body of the function

}

var taskIncomplete=function(){
        console.log("Incomplete Task...");
//Mark task as imcomplete.
    //When the checkbox is unchecked
        //Append the task list item to the #incomplete-tasks.
        var listItem=this.parentNode;
        incompleteTaskHolder.appendChild
        (listItem);
            bindTaskEvents(listItem, taskCompleted);
}

var ajaxRequest=function(){
    console.log("AJAX Request");
}
//https://www.youtube.com/watch?v=FVEtaUNVhGk

var addTask=function(){
    console.log("Add Task...");
    //Create a new list item with the text from the #new-task:
    var listItem=createNewTaskElement
    (taskInput.value);

    //Append listItem to incompleteTaskHolder
    console.log(listItem);

    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value="";

}

//Edit an existing task

var editTask=function(){
    console.log("Edit Task...");
    console.log("Change 'edit to 'save'");

    var listItem=this.parent.Node;

    var editInput=listItem.querySelector('input [type=text]')
    var label=listItem.querySelector("label");
    var containsClass=listItem.classList.contains ("editMode");
    //If class of the parent is .editmode
    if(containsClass){

        //switch to .editmode
        //label becomes the inputs value.
            label.innerText=editInput.value;
    }else{
        editInput.value=label.innerText;
    }
    //toggle .editmode on the parent.
    //This method toggles between hide and show for the seleted element
    listItem.classList.toggle("editMode");
}
//Delete task
var deleteTask=function(){
        console.log("Delete Task...");

        var listItem=this.parentNode;
        var ul=listItem.parentNode;
        //Remove the parent list item from the ul.
        ul.removeChild(listItem);

}


//Mark task completed
var taskCompleted=function(){
        console.log("Complete taskInput...");

    //Append the task list item to the #completed-tasks
    var listItem=this.parentNode;
    completedTasksHolder.appendChild(listItem);
            bindTaskEvents(listItem, taskIncomplete);
            //bind lets you pass in what object the this keyword will resolve to in the body of the function

}

var taskIncomplete=function(){
        console.log("Incomplete Task...");
//Mark task as imcomplete.
    //When the checkbox is unchecked
        //Append the task list item to the #incomplet-tasks.
        var listItem=this.parentNode;
        incompleteTaskHolder.appendChild
        (listItem);
            bindTaskEvents(listItem, taskCompleted);
}

var ajax