$(".deleteAll").on("click",() => {
    if(confirm("You sure you wanan do this m8 ?")){
        localStorage.removeItem("json_data");
        $("#todo-list").empty();
    }
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

  const addTodo = (title,id) => {
    if(!title || !id){
        title = document.querySelector("#newItem").value
        if(title){
            id = storeLocal(title);
        }
    }
    if(title){
        let li = '<li style="display:none;" data-id="'+id+'">'+title+'<a href="#" class="btn btn-sm btn-danger m-1 delete">Delete</a></li>'
        $("#todo-list").append(li);
        $("li[data-id="+id+"]").fadeIn();
        deleteEventListener();
    }
  }

  const deleteEventListener = () => {
    $(".delete").on("click",function() {//imp
        let id = $(this).parent().attr("data-id")
        $("li[data-id="+id+"]").slideUp()// imp
        // retrieve LC data
        let data = JSON.parse(localStorage.getItem("json_data"));
    
        // remove the specified ID
        delete data[id]
    
        // return updated data back to LC
        localStorage.setItem("json_data",JSON.stringify(data));
    });
    }

  $(".btn").on("click",addTodo);

  let json_data = JSON.parse(localStorage.getItem("json_data"));
  if(json_data){// improvement
    json_data.forEach(item => {
        if(item){
            addTodo(item.title,item.id);
        }
      })
  }




