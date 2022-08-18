let addBtn = document.getElementById('add_btn')
addBtn.addEventListener('click', addItem)
let parentList = document.getElementById('parentList');
function addItem(e) {
    if (parentList.children[0].className == "emptyMsg") {
        parentList.children[0].remove()
    }
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling
    let currentItemName = currentInput.value

    let newLi = document.createElement('li')
    // newLi.classList.add('list-group-item')
    newLi.className = "list-group-item d-flex justify-content-between"
    newLi.innerHTML = `<h3 class="flex-grow-1">${currentItemName}</h3>
           <button class="btn btn-warning mx-5">Edit</button>
           <button class="btn btn-danger"  onclick="removeItem(this)">Remove</button>`
    parentList.appendChild(newLi)
}

function removeItem(currElement) {
    currElement.parentElement.remove()
    let parentList = document.getElementById('parentList');
    if (parentList.children.length <= 0) {
        let newEmptyMsg = document.createElement("h3")
        newEmptyMsg.classList.add("emptyMsg")
        newEmptyMsg.textContent = "Nothing is here. Please Add a item!!"
        parentList.appendChild(newEmptyMsg)
    }
}

function editItem(currElement) {
    if (currElement.textContent == "Done") {
        currElement.textContent = "Edit"
        let currItemName = currElement.previousElementSibling.value
        let currHeading = document.createElement('h3');
        currHeading.className = "flex-grow-1"
        currHeading.textContent = currItemName
        currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling)
    } else {
        currElement.textContent = "Done"
        let currItemName = currElement.previousElementSibling.textContent
        let currInput = document.createElement('input');
        currInput.type = "text"
        currInput.placeholder = "Item Name"
        currInput.className = "form-control"
        currInput.value = currItemName

        currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling)
    }
}