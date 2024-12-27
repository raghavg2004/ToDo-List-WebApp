document.addEventListener('DOMContentLoaded', () => {
    const taskTitle = document.getElementById('task-title');
    const taskImage = document.getElementById('task-image');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', () => {
        const title = taskTitle.value.trim();
        const imageFile = taskImage.files[0];

        if (title || imageFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                addTask(title, e.target.result);
            };
            if (imageFile) {
                reader.readAsDataURL(imageFile);
            } else {
                addTask(title, null);
            }

            taskTitle.value = '';
            taskImage.value = '';
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove();
        } else if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
        }
    });

    function addTask(title, imageSrc) {
        const li = document.createElement('li');

        if (title) {
            const taskTitle = document.createElement('span');
            taskTitle.textContent = title;
            li.appendChild(taskTitle);
        }

        if (imageSrc) {
            const img = document.createElement('img');
            img.src = imageSrc;
            li.appendChild(img);
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});
