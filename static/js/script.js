let flag = "black";
function night_day(){
        if (flag == "black"){
            document.body.style.backgroundColor = "white"
            document.style.color = "black"
            flag = "white"
        } 
        else{
            document.body.style.backgroundColor = "black"
            document.style.color = "white"
            flag = "black"
        }

}