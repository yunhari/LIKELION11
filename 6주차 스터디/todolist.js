let itemlist = [];

let ibt = document.getElementById('inputbutton');
ibt.addEventListener('click', addItem);

function addItem() {
    let item = document.getElementById('itemlist').value;
    if (item !== "") {
        itemlist.push(item);
        document.getElementById('itemlist').value = "";
    }

    showList();
}

function showList() {
    let list = "<ul>";
    for (let i = 0; i < itemlist.length; i++) {
        list += "<li>" + itemlist[i] + "<span class='close' id=" + i + ">" + "\u00D7" + "</span></li>";
    }
    list += "</ul>";
    document.getElementById('toDoList').innerHTML = list;

    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', deleteItem);
    }
}

function deleteItem() {
    let id = this.getAttribute("id");
    itemlist.splice(id, 1);
    showList();
}

let checklist = document.getElementById('toDoList');
checklist.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
});



