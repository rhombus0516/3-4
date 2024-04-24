//const onClickAdd = () => {
//}
const addButton = document.getElementById('add-button');
const input = document.getElementById('add-text')
const incompAreaList = document.getElementById('incomp-area-list')

//task追加
addButton.addEventListener('click', function(event){
    const task = input.value.trim();
    if (task) {
        addTask(task);
        input.value = '';
    }
});

//リスト
function addTask(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    const buttonDiv = document.createElement('div');
    buttonDiv.style.display = 'flex';
    buttonDiv.style.justifyContent = 'space-between';

    const completeButton = document.createElement('button');
    completeButton.textContent = '完了';
    completeButton.style.backgroundColor = '#4D89FF';
    completeButton.style.color = 'white';
    completeButton.style.borderRadius = '8px';
    completeButton.addEventListener('click', function() {
        const parent = this.parentElement.parentElement; 
        parent.remove(); 
        addCompletedTask(task); 
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.style.backgroundColor = '#cc3300';
    deleteButton.style.color = 'white';
    deleteButton.style.borderRadius = '8px';
    deleteButton.addEventListener('click', function(){
        const parent = this.parentElement.parentElement; 
        parent.remove(); 
    });

    buttonDiv.appendChild(completeButton);
    buttonDiv.appendChild(deleteButton);

    listItem.appendChild(document.createTextNode(' '));
    listItem.appendChild(buttonDiv);
    
    incompAreaList.appendChild(listItem);
}

function addCompletedTask(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    const backButton = document.createElement('button');
    backButton.textContent = '戻す';

    backButton.style.backgroundColor = '#03D00B';
    backButton.style.color = 'white';


    backButton.addEventListener('click', function() {
        const parent = this.parentElement;
        parent.remove();
        addTask(task)
    });

    listItem.appendChild(backButton);
    document.getElementById('comp-area-list').appendChild(listItem);
}