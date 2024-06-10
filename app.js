let gamSeq=[];
let userSeq=[];
let start=false;
let level=0;
let btns=[document.querySelector(".btn1"),document.querySelector(".btn2"),document.querySelector(".btn3"),document.querySelector(".btn4")];
let h3=document.querySelector("#level");
let btn=document.querySelectorAll("button");
document.addEventListener("keypress",function(){
    if(start==false){
        flashbtn();
        start=true;
    }
})
function change(b){
    b.classList.add("flash");
    setTimeout(function(){
        b.classList.remove("flash");
    },500);
}
function flashbtn(){
    level++;
    h3.innerHTML=`level ${level}`;
    let num=Math.floor(Math.random()*3);
    let b=btns[num];
    gamSeq.push(b);      
    console.log("gamseq",gamSeq);                        
    change(b);
    
}
// function tp(){
// }
// function check(){ 

// else{
//     console.log("game over");
// }
// }
let val=0
function btnprs(){
    userSeq.push(this);
    console.log(userSeq);
         if(userSeq.length==gamSeq.length){
            console.log("hello");
            let cnt=0;
            for(let j=0;j<gamSeq.length;j++){
                if(gamSeq[j]==userSeq[j]){
                    cnt++;
                }
        }
        if(gamSeq.length==cnt){
            flashbtn();
            userSeq=[];
        }
        else{
            h3.innerHTML="game over (press any key to restart) ";
            start=false; 
            level=0;
            }
           
        }


}

    // for(let k=1;k<=level;k++){
        for(i of btn){
            i.addEventListener("click",btnprs);
        
        //         if(gamSeq[k-1]==userSeq[0]){
        //             val++;
        //         }
        //         else{
        //             console.log("game over");

        //         }
        //         console.log(val)
        //         if(val==level){
        //             flashbtn();
        //             val=0;
        //             userSeq=[];
        //         }

        }
    //}

