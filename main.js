var n = 0;
var m = 0;
var i=document.querySelector('h1');
function change() {
    n = Math.floor((Math.random()) * 6) + 1;
    m = Math.floor((Math.random()) * 6) + 1;
    var r1='dice'+n+'.png';
    var r2='dice'+m+'.png';
     if(n>m)
        {
            i.innerHTML="Player 1 Win";
        }
    else if(n<m)
        {
            i.innerHTML="Player 2 win";
        }
    else{
        i.innerHTML="Game Tie";
    }
   
   document.querySelector('.dice1').setAttribute('src',r1);
    document.querySelector('.dice2').setAttribute('src',r2);
    
    
}
