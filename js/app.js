/**
 * WHAT DO WE WANT TO DO??
 * 
 * Input tasks ++
 * Mark as completed
 * list the task
 * award
 * count completed task
 */

// grab each element
const taskInput = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')
const completedBtn = document.getElementById('completedBtn')
const completedList = document.getElementById('completedList')
const completedTasks = document.getElementById('completedTasks')

// array of tasks
let taskArray = []

/**
 * let task = {
 *      id: 1,
 *      task: 'clean bathroom',
 *      dateCreated: '12-03',
 *      dateCompleted: '12-03',
 *      isComplete: true
 * }
 */

let task = {}

// addTaskBtn 
addTaskBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    validateInput()
})

// take input
const validateInput =()=> {
    

    // if (taskInput.value === '') {
    //     alert('Please enter a task before submitting')
    // } else {
    //     makeTask(taskInput.value)
    // }

    taskInput.value === ''  ? alert('Please enter a task before submitting') : makeTask(taskInput.value)

    taskInput.value = ''
}

// make task
const makeTask =(chore)=> {

    const timeStamp = new Date()

    task = {
        id: taskArray.length + 1,
        task: chore,
        isCompleted: false,
        dateAdded: timeStamp.toString(),
        dateCompleted: ''
    }

    addTask(task)
}

const addTask =(obj)=> {

    taskArray = [...taskArray, obj]

    // console.log(taskArray)
    makeTaskItem(taskList, obj)
}

// make li for each task 
const makeTaskItem =(el, item)=> {

    const li = document.createElement('li')
    li.classList.add('list-group-item')

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', `taskId-${item.id}`)
    checkbox.setAttribute('data-id', `${item.id}`)
    checkbox.classList.add('form-check-input', 'checkbox')

    const label = document.createElement('label')
    label.setAttribute('for', `taskId-${item.id}`)
    label.classList.add('form-check-label', 'text-capitalize', 'mx-2', 'task-label')

    // label.innerText = `${item.task} - ${item.dateAdded}`
    const taskSpan = document.createElement('span')
    taskSpan.classList.add('task-span')
    taskSpan.innerText = item.task

    const dateAddedSpan = document.createElement('span')
    dateAddedSpan.classList.add('date-added')
    dateAddedSpan.innerText = ` | ${item.dateAdded}`
    label.appendChild(taskSpan)
    label.appendChild(dateAddedSpan)

    li.appendChild(checkbox)
    li.appendChild(label)

    el.appendChild(li)
}

completedBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    // console.log('clicked')
    validateCompletedTasks()
})

// validate checked tasks
const validateCompletedTasks =()=> {
    let completedArray = []
    const checkboxes = document.querySelectorAll('.checkbox')
    const allTasks = document.querySelectorAll('.task-label')

    // testing...

    for (let i = 0; i < taskArray.length; i++) {
        // console.log(taskArray[i].isCompleted)
        // let isComplete = taskArray[i].isCompleted // t or f
        for (let j = 0; j < checkboxes.length; i++) {

            // console.log(taskArray[i].id, checkboxes[j].getAttribute('data-id'))
            if (taskArray[i].id == parseFloat(checkboxes[j].getAttribute('data-id'))) {
                console.log(taskArray[i].task)
                if (checkboxes[j].checked) {
                    let dateCompleted = new Date()

                    taskArray[i] = {
                        ...taskArray[i],
                        isCompleted: checkboxes[j].checked,
                        dateCompleted: dateCompleted.toString()
                    }
                }

                // for (let i = 0; i < taskArray.length; i++) {
                    // let isComplete =  taskArray[i].isCompleted

                    // isComplete = !isComplete

                }


                allTasks[i].classList.add('text-success')
                completedArray = [...completedArray, allTasks[i].innerText]
                
            }
        }

    console.log(taskArray)

    // end testing...SUCCESS!!

    completedTasks.innerText = completedArray.length
    // console.log(completedArray)
    makeCompleteItem(completedArray)
}

// make li for completedList
const makeCompleteItem =(arr)=> {

    arr.forEach(item => {
        const task = item

        const completedItem = document.createElement('li')
        completedItem.classList.add('list-group-item', 'text-success', 'text-capitalize', 'completed-item')
        completedItem.innerText = task

        completedList.appendChild(completedItem)
    })
}