document.getElementById('add-task').addEventListener('click',function(){
    const taskInput = document.getElementById('task');
    const taskValue = taskInput.value.trim();

    if(taskValue){
        const taskList = document.getElementById('task-items');
        const listItem = document.createElement('li');
        const radioButton = document.createElement('input');

        radioButton.type = 'radio';
        radioButton.name = 'task_'+Date.now();

        radioButton.addEventListener('click',function(e){
            e.stopPropagation();
            listItem.style.textDecoration = this.checked ? 'line-through' : 'none';
        });

        listItem.appendChild(radioButton);
        listItem.appendChild(document.createTextNode(taskValue));

        taskList.appendChild(listItem);

        taskInput.value = '';
    }else{
        alert('Please enter the task.');
    }
});
