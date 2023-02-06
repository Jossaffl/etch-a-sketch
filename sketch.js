div_container = document.getElementById("container")

for(i = 0; i <= 528; ++i){
    const split_div = document.createElement("div");
    split_div.classList.add("untraced");
    div_container.appendChild(split_div);

    split_div.addEventListener("mouseover", (e)=>{
            split_div.setAttribute("style","backGround-color:black;")
        })
    
    
}



