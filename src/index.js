import "./styles.css";

// DOM elements
const newProjectBtn = document.querySelector('#new-project-btn');
const popUp = document.querySelector('.add-project-popup');
const addProjectBtn = document.querySelector('.add-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const containerList = document.querySelector('[data-lists]');
const newInput = document.querySelector('[data-new-input-list]');
const previewContainer = document.querySelector('.todo-list-container');
const projectTitlePreview = document.querySelector('.project-title-preview');
const taskTemplate = document.querySelector('#task-template');
const tasksContainer = document.querySelector('[data-tasks-container]');
const newTaskInput = document.querySelector('#task-input');
const addTaskBtn = document.querySelector('.add-icon-link');
const editTaskBtn = document.querySelector('.edit-task-btn');
const deleteTaskBtn = document.querySelector('.delete-task-btn');
const deleteProjectBtn = document.querySelector('.delete-project-btn');

// Create Local Storage keys
const LOCAL_STORAGE_LIST_KEY = 'project.lists';
const LOCAL_STORAGE_ID_KEY = 'project.selected.id';

let projectList;
let selectedProjectID = localStorage.getItem(LOCAL_STORAGE_ID_KEY);
let selectedTaskID;

window.onload = function getProjectList() {
  projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)); 
  if(projectList !== null) {
    renderList();
  } else {
    projectList = [];
  }
}

// EVENT LISTENERS
newProjectBtn.addEventListener('click', function clickNewProjectBtn() {
  showPopUp();
  newProjectBtn.style.display = 'none';
})

cancelBtn.addEventListener('click', function cancelProjectBtn() {
  hidePopUp();
  newInput.value = '';
  newProjectBtn.style.display = 'block';
})

function showPopUp() {
  popUp.classList.add('active');
}

function hidePopUp() {
  popUp.classList.remove('active');
}

addProjectBtn.addEventListener('click', function addNewProject() {
  let projectName = newInput.value;
  if(projectName == null || projectName === '') return;

  // Create the project object and push it to the list array
  const project = CreateProject(projectName);
  newInput.value = null;
  projectList.push(project);
  newProjectBtn.style.display = 'block';
  hidePopUp();
  clearList(containerList);
  save();
  renderList();
})

addTaskBtn.addEventListener('click', function addNewTask() {
  let taskName = newTaskInput.value;
  if(taskName == null || taskName === '') return;

  // Create the task object and push it to the array
  const task = CreateTask(taskName);
  newTaskInput.value = null;
  let selectedProject = projectList.find(element => element.id === selectedProjectID);
  selectedProject.tasks.push(task);
  saveAndRender();
})

containerList.addEventListener('click', function selectProjectFromList(e) {
  
  if (e.target.tagName.toLowerCase() === 'li') {
    // Add a unique data attribute ID to the li element and assign it to the selectedProjecttID variable
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

tasksContainer.addEventListener('click', function getSelectedTaskID() {
  if(e.target.tagName.toLowerCase() === 'input') {
    selectedTaskID = e.target.id;
  }
})

deleteTaskBtn.addEventListener('click', function deleteSingleTask() {
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
          clearList(project);
          saveAndRender(project);
        }
      })
    }   
  })
})

editTaskBtn.addEventListener('click', function editTask() {
  alert('edit task')
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
    const radio = taskElement.querySelector('input');
    radio.id = task.id;
    radio.name = 'check';
  
    const label = taskElement.querySelector('label');
    label.htmlFor = task.id;
    label.classList.add('single-task-label');
    label.append(task.name);
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
