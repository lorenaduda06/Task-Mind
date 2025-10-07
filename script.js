let array_tasks = [];
let check = [];

onload = function() {
    let nome_item = localStorage.getItem("array_tasks");

    let tarefas_check = JSON.parse(localStorage.getItem("check")) || [];

    if(nome_item === null) {
        array_tasks = [];
    }
    else {
        array_tasks = JSON.parse(nome_item);
    }

    let listUl = document.getElementById("task");

    for (let i = 0; i < array_tasks.length; i++) {
        let itemLi = document.createElement("li");

        let itemBtn = document.createElement("button");
        itemBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                            </svg> `;

        itemBtn.addEventListener("click", function() {
            itemLi.style.display = "none";

            tarefas_check.push(array_tasks[i]);

            localStorage.setItem("check", JSON.stringify(tarefas_check));
        });

        if (tarefas_check.includes(array_tasks[i])) {
            itemLi.style.display = "none";
        }
        else {
            itemLi.innerHTML = array_tasks[i] + " ";

            itemLi.appendChild(itemBtn);

            listUl.appendChild(itemLi);
        }
    }
}

function atualizarTarefa() {
    const list = document.getElementById("task");

    const item = document.createElement("li");

    const btnCheck = document.createElement("button"); 

    btnCheck.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg> `;

    let inp = document.getElementsByTagName("input")[0].value;

    item.innerHTML = inp + " ";

    item.appendChild(btnCheck);

    list.appendChild(item);

    let tarefas_salvas = JSON.parse(localStorage.getItem("array_tasks")) || [];

    tarefas_salvas.push(inp);

    localStorage.setItem("array_tasks", JSON.stringify(tarefas_salvas));

    array_tasks = tarefas_salvas;

    btnCheck.addEventListener("click", function() {
        item.style.display = "none";

        let tarefas_check = JSON.parse(localStorage.getItem("check")) || [];

        tarefas_check.push(inp);

        localStorage.setItem("check", JSON.stringify(tarefas_check));
    });

    localStorage.setItem("array_tasks", JSON.stringify(array_tasks));
}

function cleanInput() {
    let btn = document.getElementById("botao");

    btn.addEventListener("click", function() {
        const inp = document.getElementsByTagName("input")[0];
        inp.value = '';
    });
}

cleanInput();

localStorage.clear();