document.getElementById("formTask").addEventListener('submit', saveTask);

   alert("It works");


   function saveTask (e){ // capturar el event, e, capturar informacion cuando se ejecutta eñ evento sumbit.
        console.log(e);

        let tittle = document.getElementById('tittle').value;
        let description = document.getElementById('description').value;

        
        if (tittle == '' || description == ''){
            alert('Tittle or description of taskt empty');
        }
        else{
            const task = {
                tittle,
                description
            }

            console.log(tittle + " " + description);
            

            if(localStorage.getItem('tasks') == null){//si la memoria esta vacia de tareas
                let tasksList = [];
                tasksList.push(task);
                localStorage.setItem('tasks', JSON.stringify(tasksList));

            }else{  
                let tasks = JSON.parse(localStorage.getItem('tasks'));
                tasks.push(task);

                localStorage.setItem('tasks',JSON.stringify(tasks));
                
            }   
            getTasks();
        }   
                e.preventDefault();
                
   }


   function getTasks(){

    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById("tasks");

    tasksView.innerHTML = '';

    for(let i = 0; i < tasks.length; i++){
    console.log(tasks[i]);       

    }
    

   }


  