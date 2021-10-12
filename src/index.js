import "./styles.css";

// DOM elements
const newProjectBtn = document.getElementById('new-project-btn');
const popUp = document.querySelector('.add-project-popup');
const addProjectBtn = document.querySelector('.add-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const containerList = document.querySelector('[data-lists]');
const newInput = document.querySelector('[data-new-input-list]');
const wrapperDiv = document.querySelector('.wrapper');
const previewContainer = document.querySelector('.todo-list-container');
const projectTitlePreview = document.querySelector('.project-title-preview');
const taskTemplate = document.getElementById('task-template');
const tasksContainer = document.querySelector('[data-tasks-container]');
const taskPopup = document.querySelector('.task-popup');
const closeFormIcon = document.querySelector('.close-popup-icon');
const taskForm = document.querySelector('.task-form');
const taskNameInput = document.getElementById('task-name-input');
const taskDescriptionInput = document.getElementById('task-description');
const taskDateInput = document.getElementById('task-date-input');
const addTaskBtnPopUp = document.querySelector('.add-task-btn');
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
  previewContainer.style.pointerEvents = 'none';
})

cancelBtn.addEventListener('click', function cancelProjectBtn() {
  hidePopUp();
  newInput.value = '';
  newProjectBtn.style.display = 'block';
  previewContainer.style.pointerEvents = '';
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
  taskDescriptionInput.value = null;
  taskDateInput.value = null;
})

// Add new task to task container
taskForm.addEventListener('submit', function getTaskInfo(e) {
  e.preventDefault();
  let taskName = taskNameInput.value;
  let taskDescription = taskDescriptionInput.value;
  let taskDate = taskDateInput.value;
  let complete = false;
  const task = CreateTask(taskName, taskDescription, taskDate, complete);
  taskNameInput.value = null;
  taskDescriptionInput.value = null;
  taskDateInput.value = null;
  taskPopup.classList.add('hidden');
  wrapperDiv.classList.remove('inactive');
  let selectedProject = projectList.find(item => item.id === selectedProjectID);
  selectedProject.tasks.push(task);
  saveAndRender();
  console.log(task)
})

closeFormIcon.addEventListener('click', function closeForm() {
  taskNameInput.value = null;
  taskDateInput.value = null;
  taskDescriptionInput.value = null;
  taskPopup.classList.add('hidden');
  wrapperDiv.classList.remove('inactive');
})

// Get selected project's ID
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
  e.preventDefault();

  // Delete single task
  if(e.target.classList.contains('fa') && e.target.classList.contains('fa-trash')) {
  
    selectedTaskID = e.target.parentElement.parentElement.parentElement.firstElementChild.id;
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

    // Show edit popup
  } else if (e.target.classList.contains('fa') && e.target.classList.contains('fa-pencil')) {
      taskPopup.classList.remove('hidden');
      wrapperDiv.classList.add('inactive');

      let parentEl = e.target.parentElement.parentElement.parentElement;

      for(let i = 0; i < parentEl.children.length; i++) {
        
        if(parentEl.children[i].tagName.toLowerCase() === 'label') {
          taskNameInput.value = parentEl.children[i].innerText;
        }
        if(parentEl.children[i].classList.contains('task-description-text')) {
          taskDescriptionInput.value = parentEl.children[i].innerText;
        }
        if(parentEl.children[i].classList.contains('task-date-text')) {
          taskDateInput.value = parentEl.children[i].innerText;
        }
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

function CreateTask(name, description, dueDate, complete) {
  return {
    id: Date.now().toString(),
    name: name,
    description: description,
    dueDate: dueDate,
    complete: complete
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
    const checkbox = taskElement.querySelector('input');
    checkbox.id = task.id;
    checkbox.class = 'task-name-text';
    const label = taskElement.querySelector('label');
    label.innerText = task.name;
    label.htmlFor = task.id;
    const descriptionText = taskElement.querySelector('.task-description-text');
    descriptionText.innerText = task.description;
    const date = taskElement.querySelector('.task-date-text')
    date.innerText = task.dueDate;
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
