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
const deleteProjectBtn = document.querySelector('.delete-list-btn');
const deleteTaskBtn = document.querySelector('.delete-task-btn');

// Create Local Storage keys
const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_ID_KEY = 'task.selected.id';

// Get the values from Local Storage or have a default projectList array if LS is empty
let projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

// Get selected projects from LS
let selectedListID = localStorage.getItem(LOCAL_STORAGE_ID_KEY);

let selectedTaskID;

// EVENT LISTENERS
newProjectBtn.addEventListener('click', () => {
  showPopUp();
  newProjectBtn.style.display = 'none';
})

cancelBtn.addEventListener('click', function() {
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

addProjectBtn.addEventListener('click', () => {
  
  let projectName = newInput.value;
  if(projectName == null || projectName === '') return;

  // Create the project object and push it to the list array
  const project = CreateProject(projectName);
  newInput.value = null;
  projectList.push(project);
  newProjectBtn.style.display = 'block';
  hidePopUp();
  saveAndRender();
})

addTaskBtn.addEventListener('click', () => {
  let taskName = newTaskInput.value;
  if(taskName == null || taskName === '') return;

  // Create the task object and push it to the array
  const task = CreateTask(taskName);
  newTaskInput.value = null;
  let selectedProject = projectList.find(element => element.id === selectedListID);
  selectedProject.tasks.push(task);
  saveAndRender();
})

containerList.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    // Add a unique data attribute ID to the li element and assign it to the selectedListID variable
    selectedListID = e.target.dataset.listID;
    saveAndRender();
  } 
})

deleteProjectBtn.addEventListener('click', () => {
  projectList = projectList.filter(project => project.id !== selectedListID);
  selectedListID = null;
  saveAndRender(); 
})

tasksContainer.addEventListener('click', e => {
  if(e.target.tagName.toLowerCase() === 'input') {
    selectedTaskID = e.target.id;
  }
})

deleteTaskBtn.addEventListener('click', () => {
  projectList.forEach(project => {
    if(project.id === selectedListID) {
      let selectedTaskArray = project;
      project.tasks = selectedTaskArray.tasks.filter(task => task.id !== selectedTaskID);
      clearList(project);
      saveAndRender(project);
    }   
  })
})

// FUNCTIONS
function CreateProject(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: []
  }
}

function CreateTask(name) {
  return {
    id: Date.now().toString(),
    name: name
  }
}

function render() {
  clearList(containerList);
  renderList();
  showPreview();
}

function showPreview() {
  // If the ID of the selected project exists (data-attribute on li), find that element in the array
  const selectedProject = projectList.find(element => element.id === selectedListID);

  // Hide or show the preview container on the main content
  if (selectedListID === null) {
    previewContainer.style.display = 'none';
  } else {
    previewContainer.style.display = 'block';
    projectTitlePreview.innerText = selectedProject.name;
    clearList(tasksContainer);
    renderTasks(selectedProject);
  }
}

function renderList() {
  projectList.forEach(list => {
    const listElement = document.createElement('li');
    listElement.classList.add('project-name');
    // Create a unique data-attribute ID for every li 
    listElement.dataset.listID = list.id;
    listElement.innerText = list.name;

    if(list.id == selectedListID) {
      listElement.classList.add('active-list');
    }
    containerList.appendChild(listElement);
  })
}

function renderTasks(selectedProject) {
  selectedProject.tasks.forEach(task => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector('input');
    checkbox.id = task.id;
    const label = taskElement.querySelector('label');
    label.htmlFor = task.id;
    label.classList.add('single-task-label');
    label.append(task.name);
    tasksContainer.appendChild(taskElement);
  })
}

function clearList(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// LOCAL STORAGE
function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(projectList));
  localStorage.setItem(LOCAL_STORAGE_ID_KEY, selectedListID);
}

function saveAndRender() {
  save();
  render();
}
