import React, { useRef } from 'react';
import editicon from './edit.png';
import delicon from './delete.png';


function To_do_list() {
    // const [task, setTask] = useState('');
    const taskref = useRef(null);

    const addTask = () => {
        // Get the task from the input field
        const newTask = taskref.current.value.trim();
        // Only add task if it's not empty
        if (newTask) {
            // Create a new list item element
       const editbutt = document.createElement('button');
             const li = document.createElement('li');
            const p = document.createElement('label');
            const checkbox = document.createElement('input');
            const checkboxpwrap = document.createElement('div');
            const delbutt = document.createElement('button');
            
            const deleditwrap = document.createElement('div');
            const editinput = document.createElement('input');
            const editbutts = document.createElement('button');
            editbutts.textContent = "Confirm";
            editbutts.style = 'text-align: center;background: white;  display: flex;justify-content: center;align-items: center;width: 96px; height: 48px;border-radius: 6px; ';
            editinput.type = 'text';
            // p.htmlFor = "checkbox";
            checkbox.id = "checkbox";
            checkbox.type = "checkbox";
            checkboxpwrap.appendChild(checkbox);
            checkboxpwrap.appendChild(p);
            checkbox.style = "width: 1.5rem; height: 1.2rem;"
            checkboxpwrap.style = "display: flex; column-gap: 1rem; justify-content: center; align-items: center;"
            delbutt.textContent = "Delete";
            editbutt.textContent = "Edit";
            delbutt.style = "width: 5rem;    height: 2rem; color: white; font-weight: 600; background-color: red; text-align: center; border-radius: 6px;";
            editbutt.style = "width: 5rem; height: 2rem;display: flex;justify-content: center; align-items: center; color: white; font-weight: 600; background-color: orange; text-align: center; border-radius: 6px;";
            deleditwrap.appendChild(editbutt);
            deleditwrap.appendChild(delbutt);
            deleditwrap.style = "column-gap: 1rem; display: flex;"

            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    p.style = "text-decoration: line-through; text-size: 1rem; font-weight: 600; opacity: 0.7; transition: all 0.2s ease-in-out;  "
                }
                else {
                    p.style = "text-size: 1rem; font-weight: 600;";
                }
            })

const mediaQuery = window.matchMedia('(max-width: 768px)');
        // const editButton = document.getElementById('edit-button');
        const editicons = document.createElement('img');
        const delicons = document.createElement('img');
        delicons.style = "width: 24px; height: 24px;";
        delicons.src = delicon;
editicons.src = editicon;
        const handleViewportChange = (event) => {
            if (event.matches) {
                // Set text content to empty for small screens
                editbutt.textContent = '';
                editbutt.style = "width: 2rem; height: 2rem; background: orange; border-radius: 6px; display: flex; justify-content: center; align-items: center;"
                editbutt.appendChild(editicons);
                delbutt.textContent = '';
                delbutt.style = "width: 2rem; height: 2rem; background: red; border-radius: 6px; display: flex; justify-content: center; align-items: center;"
                delbutt.appendChild(delicons);
            } else {
                // Set text content to 'Edit' for larger screens
                editbutt.textContent = 'Edit';
            }
        };

        // Initial check on page load
        handleViewportChange(mediaQuery);


            // Set the innerHTML of the list item to the task
            p.innerHTML = newTask;
            p.style = "text-size: 1rem; font-weight: 600;";
            li.appendChild(checkboxpwrap);

            li.style = "min-height: 2.8rem; overflow-x: auto; column-gap: 1rem; height:3rem; width: 100%; background: white; border-radius: 6px; display: flex; justify-content: space-between; padding-right: 1rem; padding-left: 1rem; align-items: center;"
            // Append the list item to the ul element
            li.appendChild(deleditwrap);
            document.querySelector('ul').appendChild(li);

            // Clear the input field
            taskref.current.value = '';
            delbutt.addEventListener('click', () => {
                document.querySelector('ul').removeChild(li);
            })
            const butt = document.getElementById('butt');
            const input = document.getElementById('input');
            function handleEdit() {
                input.value = p.textContent;
                document.getElementById('task').replaceChild(editbutts, butt);
                editbutt.removeEventListener('click', handleEdit);
            }
            editbutt.addEventListener('click', handleEdit);
            editbutts.addEventListener('click', () => {
                p.textContent = input.value;
                document.getElementById('task').replaceChild(butt, editbutts);
                input.value = ''; editbutt.addEventListener('click', handleEdit);
            })

        }


    }
 

   

    const handleKeyPress = (e) => {
        // Check if Enter key is pressed (key code 13)
        if (e.key === 'Enter') {
            // Prevent the default behavior (inserting a new line)
            e.preventDefault();
            addTask();
        }
    }




    return (
        <div id="to-do" className='md:w-[30rem] md:h-[25rem] h-[100vh] w-[100vw] bg-sky-500 grid-rows-[20%_15%_65%] items-center grid shadow-2xl shadow-blue-500/50'>
            <div className='flex gap-x-10 justify-center w-[100%] text-white'>
                <h1 className='text-3xl font-bold'>To-Do list</h1>
                <div>
                    <label className='text-2xl' htmlFor='date'>Date: </label>
                    <input type="date" name='date' className='text-black rounded-[4px] pl-2' />
                </div>
            </div>
            <div className='flex gap-x-5 justify-center px-4 ' id="task">
                <input ref={taskref} id='input' type='text' onKeyPress={handleKeyPress} placeholder='Enter Your Task' className='w-[70%] h-12 indent-5 rounded-md' />
                <button id='butt' onClick={addTask} className='hover:bg-slate-300 flex justify-center items-center w-24 rounded-md h-12 bg-white text-black'><p>Add</p></button>
            </div>

            <ul className='w-auto md:max-h-56 flex flex-col h-auto md:h-56 px-6 gap-y-3 overflow-y-auto task-list'></ul>
        </div>
    )
}

export default To_do_list;
