//first container so that we can move it
const firstContainer = document.getElementById("data-first-container")

const containerOne = document.querySelector('[data-first-container]')
const containerTwo = document.querySelector('[data-second-container]')
const containerThree = document.querySelector('[data-third-container]')
const containerFour = document.querySelector('[data-fourth-container]')
const containerFive = document.querySelector('[data-fifth-container]')
const containerSix = document.querySelector('[data-sixth-container]')
const containerSeven = document.querySelector('[data-seventh-container]')


//event listeners for the buttons
const rightButton = document.querySelector('[data-move-right-button]')
const leftButton = document.querySelector('[data-move-left-button]')
const clearButton = document.querySelector('[data-button-clear]')

//keys for local storage
const LOCAL_STORAGE_LIST_KEY = 'tasks.listss'

//task template
const taskTemplate = document.getElementById('tasks-template')

//input and forms
const tuesForm = document.querySelector('[form-tues]')
const tuesInput = document.querySelector('[input-tues]')
const monForm = document.querySelector('[form-mon]')
const monInput = document.querySelector('[input-mon]')
const wedForm = document.querySelector('[form-wed]')
const wedInput = document.querySelector('[input-wed]')
const thuForm = document.querySelector('[form-thu]')
const thuInput = document.querySelector('[input-thu]')
const friForm = document.querySelector('[form-fri]')
const friInput = document.querySelector('[input-fri]')
const satForm = document.querySelector('[form-sat]')
const satInput = document.querySelector('[input-sat]')
const sunForm = document.querySelector('[form-sun]')
const sunInput = document.querySelector('[input-sun]')

// overall listS
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [ {
    name: 'monday', 
    tasks: []
    }, {
        name: 'tuesday',
        tasks: []
    },
    {
        name: 'wednesday',
        tasks: []
    },
    {
        name: 'thursday',
        tasks: []
    },
    {
        name: 'friday',
        tasks: []
    },
    {
        name: 'saturday',
        tasks: []
    },
    {
        name: 'sunday',
        tasks: []
    }
]




//render function
function render(){
    const monList = lists.find(lst => lst.name === 'monday')
    const tueList = lists.find(lst => lst.name === 'tuesday')
    const wedList = lists.find(lst => lst.name === 'wednesday')
    const thuList = lists.find(lst => lst.name === 'thursday')
    const friList = lists.find(lst => lst.name === 'friday')
    const satList = lists.find(lst => lst.name === 'saturday')
    const sunList = lists.find(lst => lst.name === 'sunday')


    clearElement(containerOne)
    monList.tasks.forEach(tsk => {
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox = taskElement.querySelector('input')
        checkbox.id = tsk.id
        checkbox.checked = tsk.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = tsk.id
        label.append(tsk.name)
        containerOne.appendChild(taskElement)
    })

    clearElement(containerTwo)
    tueList.tasks.forEach(tsk => {
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox = taskElement.querySelector('input')
        checkbox.id = tsk.id
        checkbox.checked = tsk.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = tsk.id
        label.append(tsk.name)
        containerTwo.appendChild(taskElement)
    })

    clearElement(containerThree)
    wedList.tasks.forEach(tsk => {
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox = taskElement.querySelector('input')
        checkbox.id = tsk.id
        checkbox.checked = tsk.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = tsk.id
        label.append(tsk.name)
        containerThree.appendChild(taskElement)
    })

    clearElement(containerFour)
    thuList.tasks.forEach(tsk => {
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox = taskElement.querySelector('input')
        checkbox.id = tsk.id
        checkbox.checked = tsk.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = tsk.id
        label.append(tsk.name)
        containerFour.appendChild(taskElement)
    })

    clearElement(containerFive)
    friList.tasks.forEach(tsk => {
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox = taskElement.querySelector('input')
        checkbox.id = tsk.id
        checkbox.checked = tsk.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = tsk.id
        label.append(tsk.name)
        containerFive.appendChild(taskElement)
    })

    clearElement(containerSix)
    satList.tasks.forEach(tsk => {
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox = taskElement.querySelector('input')
        checkbox.id = tsk.id
        checkbox.checked = tsk.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = tsk.id
        label.append(tsk.name)
        containerSix.appendChild(taskElement)
    })

    clearElement(containerSeven)
    sunList.tasks.forEach(tsk => {
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox = taskElement.querySelector('input')
        checkbox.id = tsk.id
        checkbox.checked = tsk.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = tsk.id
        label.append(tsk.name)
        containerSeven.appendChild(taskElement)
    })

    save()
    
}

function clearElement(element){
    while (element.lastChild.id !== 'pSort') {
        element.removeChild(element.lastChild);
    }
}

function save(){
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
}

//create task object function
function createTask(name){
    return {id: Date.now().toString(), name: name, complete: false}
}

//event listener for the forms
monForm.addEventListener('submit', e => {
    e.preventDefault()
    const taskName = monInput.value
    if (taskName == null || taskName === '') return
    const task = createTask(taskName)
    monInput.value = null
    const selectedList = lists.find(lst => lst.name === 'monday')
    selectedList.tasks.push(task)
    render()
})

tuesForm.addEventListener('submit', e => {
    e.preventDefault()
    const taskName = tuesInput.value
    if (taskName == null || taskName === '') return
    const task = createTask(taskName)
    tuesInput.value = null
    const selectedList = lists.find(lst => lst.name === 'tuesday')
    selectedList.tasks.push(task)
    render()
})

wedForm.addEventListener('submit', e => {
    e.preventDefault()
    const taskName = wedInput.value
    if (taskName == null || taskName === '') return
    const task = createTask(taskName)
    wedInput.value = null
    const selectedList = lists.find(lst => lst.name === 'wednesday')
    selectedList.tasks.push(task)
    render()
})

thuForm.addEventListener('submit', e => {
    e.preventDefault()
    const taskName = thuInput.value
    if (taskName == null || taskName === '') return
    const task = createTask(taskName)
    thuInput.value = null
    const selectedList = lists.find(lst => lst.name === 'thursday')
    selectedList.tasks.push(task)
    render()
})

friForm.addEventListener('submit', e => {
    e.preventDefault()
    const taskName = friInput.value
    if (taskName == null || taskName === '') return
    const task = createTask(taskName)
    friInput.value = null
    const selectedList = lists.find(lst => lst.name === 'friday')
    selectedList.tasks.push(task)
    render()
})

satForm.addEventListener('submit', e => {
    e.preventDefault()
    const taskName = satInput.value
    if (taskName == null || taskName === '') return
    const task = createTask(taskName)
    satInput.value = null
    const selectedList = lists.find(lst => lst.name === 'saturday')
    selectedList.tasks.push(task)
    render()
})

sunForm.addEventListener('submit', e => {
    e.preventDefault()
    const taskName = sunInput.value
    if (taskName == null || taskName === '') return
    const task = createTask(taskName)
    sunInput.value = null
    const selectedList = lists.find(lst => lst.name === 'sunday')
    selectedList.tasks.push(task)
    render()
})

//EVENT LISTENERS FOR CHECKED BOXES
containerOne.addEventListener('click', e => {
    // check if we clicked on a button 'input'
    if (e.target.tagName.toLowerCase() === 'input'){
        // find the current selected list
        const selectedList = lists.find(lst => lst.name == 'monday')
        // check which task we seslected from the selected list
        const selectedTask = selectedList.tasks.find(tsk => tsk.id === e.target.id)
        selectedTask.complete = e.target.checked
        // if you save and render, the animationw ill not show because
        // it will render as is
        save()
    }
})

containerTwo.addEventListener('click', e => {
    // check if we clicked on a button 'input'
    if (e.target.tagName.toLowerCase() === 'input'){
        // find the current selected list
        const selectedList = lists.find(lst => lst.name == 'tuesday')
        // check which task we seslected from the selected list
        const selectedTask = selectedList.tasks.find(tsk => tsk.id === e.target.id)
        selectedTask.complete = e.target.checked
        // if you save and render, the animationw ill not show because
        // it will render as is
        save()
    }
})

containerThree.addEventListener('click', e => {
    // check if we clicked on a button 'input'
    if (e.target.tagName.toLowerCase() === 'input'){
        // find the current selected list
        const selectedList = lists.find(lst => lst.name == 'wednesday')
        // check which task we seslected from the selected list
        const selectedTask = selectedList.tasks.find(tsk => tsk.id === e.target.id)
        selectedTask.complete = e.target.checked
        // if you save and render, the animationw ill not show because
        // it will render as is
        save()
    }
})

containerFour.addEventListener('click', e => {
    // check if we clicked on a button 'input'
    if (e.target.tagName.toLowerCase() === 'input'){
        // find the current selected list
        const selectedList = lists.find(lst => lst.name == 'thursday')
        // check which task we seslected from the selected list
        const selectedTask = selectedList.tasks.find(tsk => tsk.id === e.target.id)
        selectedTask.complete = e.target.checked
        // if you save and render, the animationw ill not show because
        // it will render as is
        save()
    }
})

containerFive.addEventListener('click', e => {
    // check if we clicked on a button 'input'
    if (e.target.tagName.toLowerCase() === 'input'){
        // find the current selected list
        const selectedList = lists.find(lst => lst.name == 'friday')
        // check which task we seslected from the selected list
        const selectedTask = selectedList.tasks.find(tsk => tsk.id === e.target.id)
        selectedTask.complete = e.target.checked
        // if you save and render, the animationw ill not show because
        // it will render as is
        save()
    }
})

containerSix.addEventListener('click', e => {
    // check if we clicked on a button 'input'
    if (e.target.tagName.toLowerCase() === 'input'){
        // find the current selected list
        const selectedList = lists.find(lst => lst.name == 'saturday')
        // check which task we seslected from the selected list
        const selectedTask = selectedList.tasks.find(tsk => tsk.id === e.target.id)
        selectedTask.complete = e.target.checked
        // if you save and render, the animationw ill not show because
        // it will render as is
        save()
    }
})

containerSeven.addEventListener('click', e => {
    // check if we clicked on a button 'input'
    if (e.target.tagName.toLowerCase() === 'input'){
        // find the current selected list
        const selectedList = lists.find(lst => lst.name == 'sunday')
        // check which task we seslected from the selected list
        const selectedTask = selectedList.tasks.find(tsk => tsk.id === e.target.id)
        selectedTask.complete = e.target.checked
        // if you save and render, the animationw ill not show because
        // it will render as is
        save()
    }
})









// ventlisteners for butotns
rightButton.addEventListener('submit', e =>{
    e.preventDefault()
    firstContainer.style.marginLeft = "-750px";
})
leftButton.addEventListener('submit', e =>{
    e.preventDefault()
    firstContainer.style.marginLeft = "0px";
})
clearButton.addEventListener('click', e => {
    const monList = lists.find(lst => lst.name === 'monday')
    const tueList = lists.find(lst => lst.name === 'tuesday')
    const wedList = lists.find(lst => lst.name === 'wednesday')
    const thuList = lists.find(lst => lst.name === 'thursday')
    const friList = lists.find(lst => lst.name === 'friday')
    const satList = lists.find(lst => lst.name === 'saturday')
    const sunList = lists.find(lst => lst.name === 'sunday')

    monList.tasks = monList.tasks.filter(tsk => !tsk.complete)
    tueList.tasks = tueList.tasks.filter(tsk => !tsk.complete)
    wedList.tasks = wedList.tasks.filter(tsk => !tsk.complete)
    thuList.tasks = thuList.tasks.filter(tsk => !tsk.complete)
    friList.tasks = friList.tasks.filter(tsk => !tsk.complete)
    satList.tasks = satList.tasks.filter(tsk => !tsk.complete)
    sunList.tasks = sunList.tasks.filter(tsk => !tsk.complete)

    save()
    render()
})

render()