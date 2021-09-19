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
            console.log(tittle + " " + description);

        }
        e.preventDefault();

   }