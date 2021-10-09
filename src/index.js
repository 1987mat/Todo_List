import "./styles.css";

// DOM elements
const newProjectBtn = document.querySelector('#new-project-btn');
const popUp = document.querySelector('.add-project-popup');
const addProjectBtn = document.querySelector('.add-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const containerList = document.querySelector('[data-lists]');
const newInput = document.querySelector('[data-new-input-list]');
const wrapperDiv = document.querySelector('.wrapper');
const previewContainer = document.querySelector('.todo-list-container');
const projectTitlePreview = document.querySelector('.project-title-preview');
const taskTemplate = document.querySelector('#task-template');
const tasksContainer = document.querySelector('[data-tasks-container]');
const taskPopup = document.querySelector('.task-popup');
const taskNameInput = document.querySelector('#task-name-input');
const taskDateInput = document.querySelector('#task-date-input');
const addTaskBtnPopUp = document.querySelector('.add-task-btn');
const saveTaskBtn = document.querySelector('.save-task-btn');
const cancelTaskBtn = document.querySelector('.cancel-task-btn');
const deleteProjectBtn = document.querySelector('.delete-project-btn');

// Create Local Storage keys
const LOCAL_STORAGE_LIST_KEY = 'project.lists';
const LOCAL_STORAGE_ID_KEY = 'project.selected.id';

let projectList,
    selectedProjectID = localStorage.getItem(LOCAL_STORAGE_ID_KEY),
    selectedTaskID;

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', function getProjectList() {
  projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY));

  if(projectList !== null) {
    save();
    renderList();
  } else {
    projectList = [];
  }
})

newProjectBtn.addEventListener('click', function clickNewProjectBtn() {
  showPopUp();
  newProjectBtn.style.display = 'none';
})

cancelBtn.addEventListener('click', function cancelProjectBtn() {
  hidePopUp();
  newInput.value = '';
  newProjectBtn.style.display = 'block';
})

addProjectBtn.addEventListener('click', function addNewProject() {
  let projectName = newInput.value;
  if(projectName == null || projectName === '') return;

  // Create the project object and push it to the project list array
  const project = CreateProject(projectName);
  newInput.value = null;
  projectList.push(project);
  newProjectBtn.style.display = 'block';
  hidePopUp();
  clearList(containerList);
  save();
  renderList();
})

addTaskBtnPopUp.addEventListener('click', function openTaskPopUp() {
  taskPopup.classList.remove('hidden');
  wrapperDiv.classList.add('inactive');
  taskNameInput.value = null;
  taskDateInput.value = null;
})

saveTaskBtn.addEventListener('click', function getTaskInfo() {
  let taskName = taskNameInput.value;
  let taskDate = taskDateInput.value;

  if(taskName === null || taskName === '') return;

  const task = CreateTask(taskName, taskDate);
  taskNameInput.value = null;
  taskPopup.classList.add('hidden');
  wrapperDiv.classList.remove('inactive');
  let selectedProject = projectList.find(item => item.id === selectedProjectID);
  selectedProject.tasks.push(task);
  saveAndRender();
})

cancelTaskBtn.addEventListener('click', function cancelTaskButton() {
  taskPopup.classList.add('hidden');
  wrapperDiv.classList.remove('inactive');
})

containerList.addEventListener('click', function selectProjectFromList(e) {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedProjectID = e.target.dataset.listID;
    saveAndRender();
  } 
})

deleteProjectBtn.addEventListener('click', function deleteProjectFromList() {
  Swal.fire({
    title: 'Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your project has been deleted.',
        'success'
      )
      projectList = projectList.filter(project => project.id !== selectedProjectID);
      selectedProjectID = null;
      saveAndRender(); 
    }
  })
})

tasksContainer.addEventListener('click', function(e) {
  // Delete single task
  if(e.target.className === 'fa fa-trash') {

    selectedTaskID = e.target.parentElement.parentElement.previousElementSibling.id;
    projectList.forEach(project => {
      if(project.id === selectedProjectID) {

        Swal.fire({
          title: 'Are you sure?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

          if (result.isConfirmed) {
            project.tasks = project.tasks.filter(task => task.id !== selectedTaskID);
            saveAndRender(); 
          }
        })
      }
    })
  }

  if(e.target.name === 'task-name') {
    
    let editButtonConfirm;

    for(let i = 0; i < e.target.parentElement.childElementCount; i++) {

      if(e.target.parentElement.children[i].className === 'edit-btn-confirm') {
        editButtonConfirm = e.target.parentElement.children[i];

        e.target.keyup = setTimeout(function() {
          editButtonConfirm.style.display = 'inline';
        }, 3000);
      }
    }

    let oldTaskName = e.target.value;

    editButtonConfirm.onclick = function() {
      
      // editButtonConfirm.style.display = 'none';
      let selectedProject = projectList.find(item => item.id === selectedProjectID);
      let newTaskName = e.target.value;
      // Swap new task title with old on
      selectedProject.tasks.forEach(item => {
        if(item.name === oldTaskName) {
          item.name = newTaskName;
          saveAndRender();
        }
      })
    }
  }
})


// FUNCTIONS
function CreateProject(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: []
  }
}

function CreateTask(name, dueDate) {
  return {
    id: Date.now().toString(),
    name: name,
    dueDate: dueDate
  }
}

function render() {
  clearList(containerList);
  renderList();
  showPreview();
}

function clearList(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function renderList() {
  projectList.forEach(list => {
    const listElement = document.createElement('li');
    listElement.classList.add('project-name');
    // Create a unique data-attribute ID for every li 
    listElement.dataset.listID = list.id;
    listElement.innerText = list.name;

    if(list.id == selectedProjectID) {
      listElement.classList.add('active-list');
    }
    containerList.appendChild(listElement);
  })
}

function renderTasks(selectedProject) {
  selectedProject.tasks.forEach(task => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const input = taskElement.querySelector('input');
    input.id = task.id;
    input.value = task.name;
    input.class = 'task-name-text';
    const dateInput = taskElement.querySelector('#date-input');
    dateInput.value = task.dueDate;
    tasksContainer.appendChild(taskElement);
  })
}

function showPreview() {
  // If the ID of the selected project exists (data-attribute on li), find that element in the array
  let selectedProject = projectList.find(element => element.id === selectedProjectID);

  // Hide or show the preview container on the main content
  if (selectedProjectID === null) {
    previewContainer.style.display = 'none';
  } else {
    previewContainer.style.display = 'block';
    projectTitlePreview.innerText = selectedProject.name;
    clearList(tasksContainer);
    renderTasks(selectedProject);
  }
}

// LOCAL STORAGE
function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(projectList));
  localStorage.setItem(LOCAL_STORAGE_ID_KEY, selectedProjectID);
}

function saveAndRender() {
  save();
  render();
}

function showPopUp() {
  popUp.classList.add('active');
}

function hidePopUp() {
  popUp.classList.remove('active');
}
