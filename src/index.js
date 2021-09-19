import "./styles.css";

// Cache DOM
const newProjectBtn = document.querySelector('#new-project-btn');
const popUp = document.querySelector('.add-project-popup');
const addBtn = document.querySelector('.add-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const containerList = document.querySelector('[data-lists]');
const newInput = document.querySelector('[data-new-input-list]');

// Create Local Storage keys
const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_ID_KEY = 'task.selected.id';

// Get the values from Local Storage or have a default projectList array if LS is empty
let projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || 
[
  { id: 1,
    name: 'default',
    tasks: ['Homework', 'Workouts'] }
];

// Get selected projects from LS
let selectedListID = localStorage.getItem(LOCAL_STORAGE_ID_KEY);

renderList();

// New Project pop up event
newProjectBtn.addEventListener('click', () => {
  showPopUp();
});

cancelBtn.addEventListener('click', function() {
  hidePopUp();
});

function showPopUp() {
  popUp.classList.add('active');
}

function hidePopUp() {
  popUp.classList.remove('active');
}

// Add button event
addBtn.addEventListener('click', () => {
  const projectName = newInput.value;
  if(projectName == null || projectName === '') return;
  // Create the project object and push it to the list array
  const list = CreateList(projectName);
  newInput.value = null;
  projectList.push(list);
  saveAndRender();
});

// Event when click and select a project title on sidebar
containerList.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedListID = e.target.dataset.listID;
    saveAndRender();
  }
})

// Factory function
function CreateList(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: []
  }
}

// Render the project title on the sidebar
function renderList() {
  clearList(containerList);
  projectList.forEach(list => {
    const listElement = document.createElement('li');
    listElement.classList.add('project-name');
    listElement.dataset.listID = list.id;
    listElement.innerText = list.name;
    if(list.id == selectedListID) {
      listElement.classList.add('active-list');
    }
    containerList.appendChild(listElement);
  })
}

function clearList(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(projectList));
}

function saveAndRender() {
  save();
  renderList();
}
