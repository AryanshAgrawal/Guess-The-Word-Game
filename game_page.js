player1_name = localStorage.getItem("player1_name");
console.log(player1_name);
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_name").innerHTML = player2_name + " : : ";
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "question turn- " + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn- " + player2_name;

function send() {
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();
    console.log(word);

    char1 = word.charAt(1);
    console.log(char1);

    char2 = word.charAt(Math.floor(word.length / 2));
    console.log(char2);

    char3 = word.charAt(word.length - 1);
    console.log(char3);

    replace_char1 = word.replace(char1, "_");
    console.log(replace_char1);
    replace_char2 = replace_char1.replace(char2, "_");
    console.log(replace_char2);
    replace_char3 = replace_char2.replace(char3, "_");
    console.log(replace_char3);

    questionword = "<h4 id='wordisplay'>Q. " + replace_char3 + "</h4> <br>";
    inputbox = "answer: <input id='inputcheckbox'>";
    checkbutton = "<br> <br> <button class='btn btn-info' onclick='check()'>check</button>";
    row = questionword + inputbox + checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}
questionturn = "player1";
answerturn = "player2";

function check() {
    getanswer = document.getElementById("inputcheckbox").value;
    answer = getanswer.toLowerCase();
    if (answer == word) {
        if (answerturn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;

        }
        else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
        }
        window.alert("Right Answer!!");
    }
    else{
        window.alert("Wrong Answer!!!");
        if (answerturn == "player1") {
            player1_score = player1_score - 1;
            document.getElementById("player1_score").innerHTML = player1_score;

        }
        else{
        player2_score=player2_score-1;
        document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
if(questionturn=="player1"){
questionturn="player2";
document.getElementById("player_question").innerHTML="question turn- "+player2_name;
}
else{
    questionturn="player1";
    document.getElementById("player_question").innerHTML="question turn- "+player1_name;
}
if(answerturn=="player1"){
    answerturn="player2";
    document.getElementById("player_answer").innerHTML="answer turn- "+player2_name;
    }
    else{
        answerturn="player1";
        document.getElementById("player_answer").innerHTML="answer turn- "+player1_name;
    }
    document.getElementById("output").innerHTML="";

}




