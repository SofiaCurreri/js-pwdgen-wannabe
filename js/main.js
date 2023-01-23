const user_name = prompt("Qual è il tuo nome?");
const user_surname = prompt("Qual è il tuo cognome?");
const fav_color = prompt("Qual è il tuo colore preferito?");

document.getElementById('frase').innerHTML = "La tua password è: " + user_name + user_surname + fav_color + "23";