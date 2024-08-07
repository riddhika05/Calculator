const container = document.querySelector(".container");
const display = document.querySelector(".display");
const arr = ["AC", "C", "+/ -", "÷", 7, 8, 9, "×", 4, 5, 6, "-", 1, 2, 3, "+", "%", 0, ".", "="]
const fun = [ac, c, plumi, div, seven, eight, nine, mul, four, five, six, sub, one, two, three, add, per, zero, dot,operate]
let flag = 0;
let exp="";
for (let i = 0; i < 20; i++) {
    const button = document.createElement("button");
    if (i != 19)
        button.style.backgroundColor = "rgb(55,55,55)";
    else
        button.style.backgroundColor = "#2563EB";
    button.style.width = "81px";
    button.style.height = "50px";
    button.textContent = arr[i];
    button.style.borderRadius = "50px";
    button.style.margin = "3px";
    button.style.border = "1px solid rgba(0,0,0,0)";
    if (i == 4 || i == 5 || i == 6 || i == 10 || i == 8 || i == 9 || i == 12 || i == 13 || i == 14 || i == 16 || i == 17 || i == 18 || i == 19)
        button.style.color = "white";
    else
        button.style.color = "#2563EB";
    button.style.fontSize = "20px";
    button.style.fontWeight = "700";


    // button.style.=
    button.addEventListener('click', fun[i]);
    container.appendChild(button);
}
function one() {
    display.textContent += "1";
    exp += "1";
    console.log(1);
    flag = 0;


}
function two() {
    display.textContent += "2";
    exp += "2";
    console.log(2);
    flag = 0;



}
function ac() {
    display.textContent = "";
     exp = "";

}
function c() {
    if (display.textContent.length > 1)
       { display.textContent = display.textContent.slice(0, -2);
          exp =exp.slice(0, -2);

       }
    else
        display.textContent = "";


}
function plumi() {
    if (display.textContent.charAt(0) != "%" && display.textContent.charAt(0) != "×" && display.textContent.charAt(0) != "÷") {
        if (display.textContent.charAt(0) != "-") {
            if (display.textContent.charAt(0) == "+")
                display.textContent = "-"+"(" + display.textContent.slice(1)+")";
            else
                display.textContent ="("+ "-" + display.textContent+")";
        }
        else
            display.textContent = display.textContent.slice(1);
    }
    else
    if(display.textContent.length!=1)
        display.textContent =  display.textContent.charAt(0)+"("+ "-" + display.textContent.slice(1)+")";
    
}
function div() {
    console.log(flag);
    if (flag == 1)
        {display.textContent = display.textContent.slice(0, -2) + " ÷ ";
          exp=exp.slice(0,-2)+" / ";
        }
    else
       {display.textContent += " ÷ ";
         exp += " / ";}
    flag = 1;

}
function seven() {
    display.textContent += "7";
     exp += "7";
    flag = 0;
    

}
function eight() {
    display.textContent += "8";
    flag = 0;
    exp += "8";

}
function nine() {
    display.textContent += "9";
    flag = 0;
    exp+= "9";

}
function mul() {

    if (flag == 1)
        {  display.textContent =display.textContent.slice(0, -2) + " × ";
           exp= exp.slice(0, -2) + " * ";
        }
    else
       { display.textContent += " × ";
         exp+= " * ";

       }
    flag = 1;
}
function four() {
    display.textContent += "4";
    flag = 0;
     exp += "4";
}
function five() {
    display.textContent += "5";
    flag = 0;
    exp += "5";

}
function six() {
    display.textContent += "6";
    flag = 0;
    exp += "6";

}
function sub() {
    if (flag == 1)
       { display.textContent = display.textContent.slice(0, -2) + " - ";
          exp =exp.slice(0, -2) + " - ";
       }
    else
       { display.textContent += " - ";
        exp+=" - ";}

    flag = 1;
  
}

function three() {
    display.textContent += "3";
    flag = 0;
    exp += "3";

}
function zero() {
    display.textContent += "0";
    flag = 0;
    exp += "0";
   
}
function per() {
    if (flag == 1)
       { display.textContent = display.textContent.slice(0, -2) + " % ";
         exp = exp.slice(0, -2) + " % ";
       }
    else
       { display.textContent += " % ";
          exp+= " % ";
       }
    flag = 1;

}
function dot() {
    display.textContent += ".";
    exp+='.';


}
function add() {
    if (flag == 1)
        { display.textContent = display.textContent.slice(0, -2) + " + ";
           exp = exp.slice(0, -2) + " + ";
        }

    else
       { display.textContent += " + ";
          exp+= " + ";

       }
    flag = 1;
    
}
function operate()
{   console.log(exp);
    let tokens = exp .split('');
    console.log(tokens);
    let values = [];
    let ops = [];

   for (let i = 0; i < tokens.length; i++)
   {
       if (tokens[i] == ' ')
       {
           continue;
       }
       if (tokens[i] >= '0' && tokens[i] <= '9')
       {
           let sbuf = "";
           while (i < tokens.length &&
                   tokens[i] >= '0' &&
                       tokens[i] <= '9' || tokens[i]==".")
           {
               sbuf = sbuf + tokens[i++];
           }
           console.log(sbuf);
           values.push(parseFloat(sbuf, 10));
             i--;
        }
       else if (tokens[i] == '+' ||
                tokens[i] == '-' ||
                tokens[i] == '*' ||
                tokens[i] == '/' ||
                 tokens[i] == '%' 
            )
       {
           while (ops.length > 0 &&
                    hasPrecedence(tokens[i],
                                ops[ops.length - 1]))
           {
             values.push(applyOp(ops.pop(),
                              values.pop(),
                            values.pop()));
           }
           ops.push(tokens[i]);
       }
   }
   while (ops.length > 0)
   {
       values.push(applyOp(ops.pop(),
                        values.pop(),
                       values.pop()));
   }
//   console.log(values.pop());
  let val=values.pop();
  console.log(typeof(val));
  if(typeof(val)!='string' && !isNaN(val))
  display.textContent=val;
  else
  display.textContent="Error";
  
}
function hasPrecedence(op1, op2)
{
   if ((op1 == '*' || op1 == '/' || op1=='%' ) &&
          (op2 == '+' || op2 == '-'))
   {
       return false;
   }
   else
   {
       return true;
   }
}
function applyOp(op, b, a)
{
   switch (op)
   {
   case '+':
       return parseFloat((a+b).toPrecision(12));
   case '-':
       return parseFloat((a-b).toPrecision(12));
   case '*':
       return parseFloat((a*b).toPrecision(12));
   case '/':
       if (b == 0)
       {  
         return "Error";
       }
       return parseFloat((a/b).toPrecision(12));
    case '%': console.log((a*b)/100);
        return  parseFloat(((a*b)/100).toPrecision(12));
   }
   return 0;
}
