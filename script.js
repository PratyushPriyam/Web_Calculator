var index = 0
const userInput = document.getElementById("user_input");
var expression = '';

prev_next(index);

function press(num)
{
    expression += num;
    userInput.value = expression;
}

function equal()
{
    userInput.value = eval(expression);
    expression = '';
}

function erase()
{
    expression = '';
    userInput.value = expression;
}

function del()
{
    var str = expression.substring(0, expression.length - 1);
    userInput.value = str;
    expression = str;
}

function ChangeColor()
{
      var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
      var hexcode1 = "";
      var hexcode2 = "";
      var random_index = 0;

      for(let i = 0; i < 6;i++){
        random_index = Math.floor(Math.random() * hex_numbers.length);
          hexcode1 += hex_numbers[random_index];
        random_index = Math.floor(Math.random() * hex_numbers.length);
          hexcode2 += hex_numbers[random_index];
                                }

  document.body.style.background = `linear-gradient(45deg, #${hexcode1} 50%, #${hexcode2} 50%)`;
  document.querySelector("#hexcode1").textContent = hexcode1;
  document.querySelector("#hexcode2").textContent = hexcode2;
            }

function prev_next(i)
{
    index += i;
    var boxes = document.getElementsByClassName("buttons");
    
    for(i = 0;i<boxes.length;i++){
        boxes[i].style.display = "none";
    }
    if(index>boxes.length-1)
        index = 0;
    
    if(index<0)
        index = boxes.length-1;
    boxes[index].style.display = "block";
}

