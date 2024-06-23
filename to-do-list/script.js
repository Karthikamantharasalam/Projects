const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement('li');

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `task${listContainer.getElementsByTagName('li').length + 1}`;

        let label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.textContent = inputBox.value;

        li.appendChild(checkbox);
        li.appendChild(label);

        // Create the cross icon span
        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; // Unicode for '×' symbol
        span.className = "close";
        span.onclick = function() {
            removeTask(span);
        };
        li.appendChild(span);

        listContainer.appendChild(li);
        
    }
    inputBox.value = '';
    saveData()
}

function removeTask(element) {
    element.parentElement.remove();
}

function toggleTask(checkbox, label) {
    if (checkbox.checked) {
        label.style.textDecoration = "line-through";
    } else {
        label.style.textDecoration = "none";
    }
}

// Add remove functionality to existing tasks
document.querySelectorAll('.close').forEach(span => {
    span.onclick = function() {
        removeTask(span);
    };
});
function saveData(){
    localStorage.setItem("data", JSON.stringify(listContainer.innerHTML));

}

