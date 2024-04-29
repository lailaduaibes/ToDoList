
const form = document.getElementById('form');
const inputtask = document.getElementById('newtodo');
const alltasks = [];


    form.addEventListener('submit', function(event){
        event.preventDefault();

        if (inputtask.value.trim() === "") {
            alert('please enter a new todo task');
            return;
           
        }
   
        addtask();
       
    });


        function addtask() {
            var inputtask = document.getElementById('newtodo').value.trim();
           
            var listitem = document.createElement('li');
            listitem.id = 'listitem';
            const span = document.createElement('span');
            span.textContent = inputtask;
            span.id = 'todotext';
            const div = document.createElement('div');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            let deletebutton = document.createElement('button');
            deletebutton.id = 'deletebutton';
            const deleteicon = document.createElement('i');
            deleteicon.className = 'fa-solid fa-trash';
             deletebutton.appendChild(deleteicon);
           
            let insertbutton = document.createElement('button');
            insertbutton.id = 'insertbutton';
            const inserticon = document.createElement('i');
            inserticon.className = "fa-solid fa-pencil";
             insertbutton.appendChild(inserticon);

            

            listitem.appendChild(span);
            div.appendChild(checkbox);
            div.appendChild(deletebutton);
            div.appendChild(insertbutton);
            listitem.appendChild(div);
            document.getElementById('newtodo').value = " ";
          
       
            alltasks.push(listitem);
          

            all();
           
         
}
const tasklist = document.getElementById('alltasklist');
tasklist.addEventListener('click', function (event) {
    const target = event.target;
    if (target.tagName === 'BUTTON' || target.tagName==='I') {
        if (target.id === 'deletebutton' || target.className === 'fa-solid fa-trash') {
            parent = target.closest('li');
            parent.remove();
            let index = alltasks.indexOf(parent);
            
            
            if (index != -1) {
                alltasks.splice(index, 1);

            }
          
            
           
            
        }
        else if (target.id === 'insertbutton' || target.className === 'fa-solid fa-pencil') {
            parent = target.closest('li');
            span = parent.querySelector('span');
            span.textContent = "   "; // Clear the span content
            let newtaskname = prompt("Enter the new task name");
            if (newtaskname !== null) {
                span.textContent = newtaskname;
      
            }
            
            
         

     
          
            
        }

       

    }
});
tasklist.addEventListener('change', function (event) {
    target = event.target;
    if (target.tagName === 'INPUT') {
        if (target.type === 'checkbox') {
            let li = target.closest('li');
            let span = li.querySelector('span');
            if (target.checked) {
          
                span.style.color = 'red';
                span.style.textDecoration = 'line-through';
                
            }
            else {
               
                span.style.color = 'black';
                span.style.textDecoration = 'none';
                
               
            }
        }
    }


});

const done = document.getElementById('done');
done.addEventListener('click', function (event) {
   
    const pre = document.getElementById('alltasklist');
    const newitems= document.createElement('ul');

    alltasks.forEach(function (item) {
        button = item.querySelector('INPUT[TYPE="checkbox"]');
        if (button.checked) {
            newitems.appendChild(item);

        }
        pre.innerHTML = " ";
        pre.appendChild(newitems);

    });

    
});
const alltask = document.getElementById('all');
alltask.addEventListener('click', function (event) {
    const alltasklist = document.getElementById('alltasklist');
    alltasklist.innerHTML = " ";
    alltasks.forEach(function (item) {
        alltasklist.appendChild(item);
    });


});




function all() {
    const alltasklist = document.getElementById('alltasklist');
    alltasklist.innerHTML = " ";
    alltasks.forEach(function (item) {
        alltasklist.appendChild(item);
    });

    
}
function todo() {
    const pre = document.getElementById('alltasklist');
    const newitems = document.createElement('ul');

    pre.innerHTML = " ";

    alltasks.forEach(function (item) {
        button = item.querySelector('INPUT[TYPE="checkbox"]');
        if (!button.checked) {
            newitems.appendChild(item);

        }
        pre.innerHTML = " ";
        pre.appendChild(newitems);

    });
    pre.innerHTML = " ";
    pre.appendChild(newitems);

   


}


function allDone() {

    for (let i = alltasks.length - 1; i >= 0; i--) {
        const item = alltasks[i];
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            alltasks.splice(i, 1);
        }
    }

    all();
}
function deleteAll() {
    alltasks.length = 0;
    all();

}






    
  


   

    


