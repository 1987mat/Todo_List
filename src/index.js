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
const tasksContainer = document.querySelector('[data-tasks-container]');
const taskPopup = document.querySelector('.new-task-popup');
const closeFormIcon = document.querySelector('.close-popup-icon');
const taskForm = document.querySelector('.task-form');
const taskNameInput = document.getElementById('task-name-input');
const taskDescriptionInput = document.getElementById('task-description');
const taskDateInput = document.getElementById('task-date-input');
const addTaskPopupBtn = document.querySelector('.add-task-btn');
const deleteProjectBtn = document.querySelector('.delete-project-btn');

const editTaskPopup = document.querySelector('.edit-task-popup');
const closeEditFormIcon = document.querySelector('.close-popup-icon-edit');
const taskNameInputEdit = document.getElementById('task-name-input-edit');
const taskDescriptionInputEdit = document.getElementById('task-description-edit');
const taskDateInputEdit = document.getElementById('task-date-input-edit');
const taskFormEdit = document.querySelector('.task-form-edit');


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
    renderProjectList();
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
  previewContainer.style.pointerEvents = '';
  hidePopUp();
  clearList(containerList);
  save();
  renderProjectList();
})

addTaskPopupBtn.addEventListener('click', function openTaskPopUp() {
  taskPopup.classList.remove('hidden');
  wrapperDiv.classList.add('inactive');
  taskNameInput.value = null;
  taskDescriptionInput.value = null;
  taskDateInput.value = null;
})

// Add new task to task container
taskForm.addEventListener('submit', function addTask(e) {
  e.preventDefault();
  let selectedProject = projectList.find(item => item.id === selectedProjectID);
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
  selectedProject.tasks.push(task);
  saveAndRender();
})

taskFormEdit.addEventListener('submit', function updateTask(e) {
  e.preventDefault();
  let selectedProject = projectList.find(item => item.id === selectedProjectID);
  let updatedTaskName = taskNameInputEdit.value;
  let updatedTaskDescription = taskDescriptionInputEdit.value;
  let updatedTaskDate = taskDateInputEdit.value;
  // let complete = false;
  editTaskPopup.classList.add('hidden');
  wrapperDiv.classList.remove('inactive');

  let taskToEditID;

  for(let i = 0; i < tasksContainer.children.length; i++) {
    if(tasksContainer.children[i].classList.contains('editMode')) {
      taskToEditID = tasksContainer.children[i].firstElementChild.id;
    }
  }

  selectedProject.tasks.forEach(item => {
    if(taskToEditID === item.id) {
      item.name = updatedTaskName;
      item.description = updatedTaskDescription;
      item.dueDate = updatedTaskDate;
    }
  })
  saveAndRender();   
})

closeFormIcon.addEventListener('click', function closeForm() {
  taskNameInput.value = null;
  taskDateInput.value = null;
  taskDescriptionInput.value = null;
  taskPopup.classList.add('hidden');
  wrapperDiv.classList.remove('inactive');
})

closeEditFormIcon.addEventListener('click', function closeEditForm() {
  taskNameInput.value = null;
  taskDateInput.value = null;
  taskDescriptionInput.value = null;
  editTaskPopup.classList.add('hidden');
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

function taskEvents(taskListItem) {
  const editBtn = taskListItem.querySelector('button.edit');
  const removeBtn = taskListItem.querySelector('button.remove');
  editBtn.onclick = editTask;
  removeBtn.onclick = removeTask;
}

function editTask() {
  editTaskPopup.classList.remove('hidden');
  wrapperDiv.classList.add('inactive');
  let listItem = this.parentNode;

  for(let i = 0; i < listItem.children.length; i++) {

    if(listItem.children[i].tagName.toLowerCase() === 'label') {
      taskNameInputEdit.value = listItem.children[i].innerText;
    }
    if(listItem.children[i].classList.contains('description-info')) {
      taskDescriptionInputEdit.value = listItem.children[i].innerText;
    } 
    if(listItem.children[i].classList.contains('date-info')) {
      taskDateInputEdit.value = listItem.children[i].innerText;
    }
  }
  listItem.classList.toggle('editMode');
}

function removeTask() {

  Swal.fire({
    title: 'Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {

      let parentDiv = this.parentElement.children;
      for(let i = 0; i < parentDiv.length; i++) {
        if(i === 0) {
          selectedTaskID = parentDiv[i].id;
          console.log(selectedTaskID)
        }
      }
      let selectedProject = projectList.find(project => project.id === selectedProjectID);
      selectedProject.tasks = selectedProject.tasks.filter(task => task.id !== selectedTaskID);
      saveAndRender(); 
    }
  })
}

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
  renderProjectList();
  showPreview();
}

function clearList(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function renderProjectList() {
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

    const taskList = document.createElement('div');
    taskList.className = 'task-div';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = task.id;
    const label = document.createElement('label');
    label.innerText = task.name;
    label.htmlFor = task.id;
    const taskInfoDiv = document.createElement('div');
    const description = document.createElement('p');
    description.classList.add('description-info');
    description.classList.add('hidden');
    description.innerText = task.description;
    const date = document.createElement('p');
    date.classList.add('date-info');
    date.classList.add('hidden');
    date.innerText = task.dueDate;
    const status = document.createElement('p');
    status.classList.add('status-info');
    status.classList.add('hidden');
    status.innerText = task.complete;
    const editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.innerText = 'Edit';
    const removeButton = document.createElement('button');
    removeButton.className = 'remove';
    removeButton.innerText = 'Delete';

    taskList.append(...[
      checkbox, label, description, date, status, editButton, removeButton
    ]);

    taskInfoDiv.innerHTML = `
      <strong>Title :</strong> ${label.innerText} 
      <br><br>
      <strong>Description :</strong> ${description.innerText} 
      <br><br>
      <strong>Due Date :</strong> ${date.innerText} 
      <br><br>
      <strong>Completed :</strong> ${status.innerText}
    `;

    taskInfoDiv.classList.add('hidden');
    taskInfoDiv.classList.add('task-info-div');
    taskList.appendChild(taskInfoDiv);

    label.onclick = function showHiddenTaskInfo() {
      taskInfoDiv.classList.toggle('hidden');
    }
    tasksContainer.appendChild(taskList);
    taskEvents(taskList); 
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
