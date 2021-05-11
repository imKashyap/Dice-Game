const btn = document.querySelector('.btn--all');
btn.addEventListener('click', function(){
    var player1=document.getElementById('name-input1').value;
    var player2=document.getElementById('name-input2').value;
    sessionStorage.setItem("player1", player1);
    sessionStorage.setItem("player2", player2);
    location.href="match.html";
});