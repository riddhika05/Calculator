const container=document.querySelector(".container");
const display=document.querySelector(".display");
arr=["AC","C","+/ -","÷",7,8,9,"X",4,5,6,"-",1,2,3,"+","%",0,".","="]
fun=[ac,one,two]
for(let i=0;i<20;i++)
 {const button=document.createElement("button");
    if(i!=19)
    button.style.backgroundColor="rgb(55,55,55)";
    else
    button.style.backgroundColor="#2563EB";
    button.style.width="81px";
    button.style.height="50px";
    button.textContent=arr[i];
    button.style.borderRadius="50px";
    button.style.margin="3px";
    button.style.border="1px solid rgba(0,0,0,0)";
    if(i==4||i==5||i==6||i==10||i==8||i==9||i==12||i==13||i==14||i==16||i==17||i==18||i==19)
    button.style.color="white";
    else
    button.style.color="#2563EB";
    button.style.fontSize="20px";
    button.style.fontWeight="700";

    // button.style.=
    button.addEventListener('click',fun[i]);
    container.appendChild(button);
 }
function one()
{
    display.textContent+=" 1 ";
    console.log(1);

}
function two()
{
    display.textContent+=" 2 ";
    console.log(2);
}
function ac(){
   display.textContent="";
}