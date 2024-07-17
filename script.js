const container=document.querySelector(".container");
const display=document.querySelector(".display");
let exp;
arr=["AC","C","+/ -","÷",7,8,9,"X",4,5,6,"-",1,2,3,"+","%",0,".","="]
fun=[ac,c,plumi,div,seven,eight,nine,mul,four,five,six,sub,one,two,three,add,per,zero,dot]
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
    display.textContent+="1";
    console.log(1);
  
}
function two()
{
    display.textContent+="2";
    console.log(2);
    
   
}
function ac(){
   display.textContent="";
}
function c()
{
    if(display.textContent.length>1)
        display.textContent=display.textContent.slice(0,-1);
       else
       display.textContent="";
}
function plumi()
{   if(display.textContent.charAt(0)!="-")
    display.textContent= "-"+ display.textContent;
    else
    display.textContent= display.textContent.slice(1);
}
function div()
{
    display.textContent+="÷";
    
}
function seven()
{
    display.textContent+="7";
}
function eight()
{
    display.textContent+="8";
}
function nine()
{
    display.textContent+="9";
}
function mul()
{
    display.textContent+="×";
    
}
function four()
{
    display.textContent+="4";

}
function five()
{
    display.textContent+="5";
}
function six()
{
    display.textContent+="6";
}
function sub()
{
    display.textContent+="-";
}
function one()
{
    display.textContent+="1";
}
function two()
{
    display.textContent+="2";
}
function three()
{
    display.textContent+="3";
}
function zero()
{
    display.textContent+="0";
}
function per()
{
    display.textContent+="%";
}
function dot()
{
    display.textContent+="."; 
}
function add()
{
    display.textContent+="-";
}