let json_data = [
    {
        title: "saad"
    },
    {
        title: "ahmad"
    }
]
let list = document.querySelector(".flex-container");
json_data.forEach(item => {
    let n = document.createElement("div");
    n.setAttribute("class","flex-item")
    n.innerText = item.title;
    list.append(n);
})
