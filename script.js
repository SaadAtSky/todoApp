// var json_data = [
//     {
//       "userId": 1,
//       "id": 1,
//       "title": "delectus aut autem",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 2,
//       "title": "quis ut nam facilis et officia qui",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 3,
//       "title": "fugiat veniam minus",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 4,
//       "title": "et porro tempora",
//       "completed": true
//     },
//     {
//       "userId": 1,
//       "id": 5,
//       "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//       "completed": false
//     }
//   ];

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

  const del = (element) => {
    list.removeChild(element.parentElement)
    // retrieve LC data
    let data = JSON.parse(localStorage.getItem("json_data"));

    // remove the specified ID
    delete data[element.parentElement.dataset.id]

    // return updated data back to LC
    localStorage.setItem("json_data",JSON.stringify(data));
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
    console.log(list)
  }

  const addEventListener = () => {
    let delBtns = document.querySelectorAll(".delete");
    delBtns.forEach((item) => {
      item.addEventListener("click",() => {del(item)});
    })
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




