// Crie a função addUser()
function addUser {
  // Obtenha o valor do usuário através das ids player1_name_input e player2_name_input
  player1_name_input
   player2_name_input
  // Armazene esses valores localmente
  window.location(game_page.html)
  // Atribua "game_page.html" para window.location
}

function send() {
   number1 = document.getElementById("number1").value;
   number2 = document.getElementById("number2").value;
   actual_answer = parseInt(number1) * parseInt(number2);
   question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
   input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
   check_button = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
   row = question_number + input_box + check_button ; 
   document.getElementById("output").innerHTML = row
   document.getElementById("number1").value = "";
   document.getElementById("number2").value = "";
}

