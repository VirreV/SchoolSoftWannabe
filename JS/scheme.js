let container = document.querySelector("#schemeContainer");
for(let i = 0; i < 6; i++){
    for(let j = 0; j < 56; j++){
        let x = document.createElement("div");
        x.className = "schemeBorders";
        x.style.gridRow = (j+1) + "/" + (j+2);
        x.style.gridColumn = (i+1) + "/" + (i+2);
        if(j == 0){
            x.style.borderTop = "1px solid lightgray";
        }
        if(i == 0){
            x.style.borderLeft = "1px solid lightgray";
        }
        container.appendChild(x);
    }
}
for(let i = 0; i < 55; i++){
    let clockDiv = document.createElement("div");
    clockDiv.className = "schemeItems";
    clockDiv.style.gridColumn = "1/2";
    clockDiv.style.gridRow = (i+2) + "/" + (i+3);
    clockDiv.innerHTML = (8+parseInt(i/6)) + ":" + (i%6) + "0";
    if(parseInt(i/6) < 2){
        clockDiv.innerHTML = "0" + clockDiv.innerHTML;
    }
    container.appendChild(clockDiv);
}