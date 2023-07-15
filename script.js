document.querySelector(".deleteAll").addEventListener("click",() => {
    localStorage.removeItem("json_data")
    list.innerHTML = ""
})
const storeLocal = (newTodo) => {
    // get stuff from LC
    let currentData = JSON.parse(localStorage.getItem("json_data"));
    if(!currentData){// improvement: if null then make into array
        currentData = []
    }

    // create new data
    let newData = {
        id: currentData.length,
        title: newTodo,
        completed: false
    }

    // push and store back
    currentData.push(newData);
    localStorage.setItem("json_data",JSON.stringify(currentData));  
    return newData.id
}
  const addDelete = (li) => {
    let del = document.createElement("a");
    del.setAttribute("class","btn btn-sm btn-danger m-1 delete");
    del.append(document.createTextNode("Delete"));
    li.append(del);
  }

  const addTodo = () => {
    let newTodo = document.querySelector("#newItem").value
    let id = storeLocal(newTodo);
    addToList(newTodo,id);
    addEventListener();
  }

  const addToList = (item,id) => {
    let li = document.createElement("li");
    li.append(document.createTextNode(item));
    li.dataset.id = id;
    addDelete(li);
    list.append(li);
  }

  const addEventListener = () => {
    $(".delete").on("click",function() {
        list.removeChild(this.parentElement)
        // retrieve LC data
        let data = JSON.parse(localStorage.getItem("json_data"));
    
        // remove the specified ID
        delete data[this.parentElement.dataset.id]
    
        // return updated data back to LC
        localStorage.setItem("json_data",JSON.stringify(data));
    });
    }

  let list = document.querySelector("#todo-list");
  document.querySelector(".btn").addEventListener("click",addTodo);

  let json_data = JSON.parse(localStorage.getItem("json_data"));
  if(json_data){// improvement
    json_data.forEach(item => {
        if(item){
            addToList(item.title);
        }
      })
  }




