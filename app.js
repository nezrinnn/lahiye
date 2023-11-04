let button = document.querySelector("button")
let plus = document.querySelector(".plus")
let input = document.querySelector("input")
let ul = document.querySelector("ul")
let img = document.querySelector(".no")
let li = document.querySelector("li")
let a = [];

let listContainer = document.getElementById('list-container');
let artanDeyer = true;

function manageSorting() {
    let tasks = Array.from(listContainer.getElementsByTagName('li'));

    if (artanDeyer) {
        tasks.sort((a, b) => a.textContent.localeCompare(b.textContent));
        artanDeyer = false;
    } else {
        tasks.sort((a, b) => b.textContent.localeCompare(a.textContent));
        artanDeyer = true;
    }

    listContainer.innerHTML = '';
    tasks.forEach(task => listContainer.appendChild(task));

    let sortButton = document.querySelector('.sort-btn');
    sortButton.textContent = artanDeyer ? 'A-Z' : 'Z-A';
}


function user() {
    if (input.value == "" || input.value.trim() == "") {
        // alert(" Please write information")
    }
    else {
        ul.style.display = "block";
        let li = document.createElement("li");
        li.classList.add('note');
        a.push(input.value);

        li.innerText = input.value;
        li.innerHTML += "<span><img src=\"./assets/Group77.svg\" alt=\"photo3\"></span>";

        let img = li.children[0];
        img.addEventListener("click", event => {
            li.remove();
            console.log("Isledi")

        })

        ul.append(li);
        input.value = ""
        img.addEventListener("click", e => {
            e.preventDefault()
            e.target.parentElement.remove()
        })
    }
}


function user2() {
    if (event.key == 'Enter') {
        user()
        event.target.value = "";
    }
}

function canselHover() {
    event.target.src = "./assets/Group70.svg"
}
function hoverCansel() {
    event.target.src = "./assets/Group77.svg"
}



img.addEventListener("mouseover", canselHover)
img.addEventListener("mouseleave", hoverCansel)

input.addEventListener("keyup", user2)

button.addEventListener("click", user)
plus.addEventListener("click", user)


document.querySelector(".no").addEventListener("click", event => {
    event.target.parentElement.children[0].value = "";

})