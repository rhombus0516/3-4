//const onClickAdd = () => {
//}

const addButton = document.getElementById('add-button');
const input = document.getElementById('add-text');
const incomoAreaList = document.getElementById('incomp-area-list');

addButton.addEventListener("click", function(event){
   const task = input.ariaValueMax.trim();
   if(task) {
    addTask(task)
        input.value = '';
   } 
});

function addTask(task){
    const listItem = document.createElement('li');
    listItem.textContent = task;

    const conpleteButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    conpleteButton.textContent = "完了";
    deleteButton.textContent = "削除";
}