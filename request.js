var h2 = document.querySelector("h2")
var addfriend = document.querySelector("#add-Friend")
var flag = 0
 

addfriend.addEventListener("click", function(){
    if(flag == 0){

        h2.innerHTML = "friends"
        h2.style.color = "green"
        addfriend.innerHTML = "Remove Freind"
        flag = 1  
    }else{
        
        h2.innerHTML = "stranger"
        h2.style.color = "red"
        addfriend.innerHTML = "Add Friend"

        
        flag = 0
        
    }
  
     
     
})
 