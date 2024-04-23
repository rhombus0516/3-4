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

    const completeButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    completeButton.textContent = '完了';
    deleteButton.textContent = '削除';
    
    completeButton.addEventListener('click', function() {
        const parent = this.parentElement; 
        parent.remove(); 
        addCompletedTask(task); 
    });

    deleteButton.addEventListener('click', function(){
        const parent = this.parentElement; 
        parent.remove(); 
    });

    listItem.appendChild(completeButton); 
    listItem.appendChild(deleteButton); 
    
    incompAreaList.appendChild(listItem);

}
function addCompletedTask(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    const backButton = document.createElement('button');
    backButton.textContent = '戻す';
    backButton.addEventListener('click', function() {
        const parent = this.parentElement;
        parent.remove();
        addTask(task)
    });

    listItem.appendChild(backButton);
    document.getElementById('comp-area-list').appendChild(listItem);
}