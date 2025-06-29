 
        //you get all the codes inside the variable score
     /*  let score = {
        wins: 0,
        losses: 0,
        ties: 0,
       };
       */
      /* console.log(JSON.parse(localStorage.getItem('score')));*/
      let score = JSON.parse(localStorage.getItem('score'));
            if (score === null){
                score ={
             wins: 0,
            losses: 0,
            ties: 0,
                }
            }

updateElement();
        function parameter1(playermove){
            bedan();
            let result = '';
            if (playermove === 'scissors'){
                if (Computermove === 'rock'){
        result = 'you loose.';  
    }else if (Computermove === 'paper'){
        result ='you win.';
    }else{
        result ='Tie.';
    }
            }else if (playermove === 'rock'){
                if (Computermove === 'rock'){
      result = 'Tie.';  
    }else if (Computermove === 'paper'){
        result ='you loose.';
    }else{
        result ='you win.';
    }
            }else{
                if (Computermove === 'rock'){
        result = 'you win.';  
    }else if (Computermove === 'paper'){
        result ='Tie.';
    }else{
        result ='you loose.';
    }
            }
           if (result === 'you win.'){
            score.wins += 1;
           }else if (result === 'you loose.'){
            score.losses += 1;
           }else if (result === 'Tie.'){
            score.ties += 1
           }
   localStorage.setItem('score',JSON.stringify(score));
           
           document.querySelector('.worse').innerHTML = result;
           document.querySelector('.night').innerHTML =  'You picked  ' + playermove + '. computer picked  '+ Computermove +'.';            updateElement();

   /* alert ('You picked  ' + playermove + '. computer picked  '+ Computermove +'.'+ result +
     '                  wins:'+ score.wins + ',losses' + score.losses +',ties'+ score.ties);*/
    //document.body.innerHTML = ('You picked  ' + playermove + '. computer picked  '+ Computermove +'.'+ result +
     //'                  wins:'+ score.wins + ',losses' + score.losses +',ties'+ score.ties);
        }
        
        function updateElement(){
                    document.querySelector('.maina').innerHTML ='wins:'+ score.wins+ ',losses' +score.losses+',ties'+score.ties;
        }

          let Computermove = '';
           
        function bedan(){
            const randomnumber = Math.random();
          
    if (randomnumber >=0 && randomnumber <= 1/3){
        Computermove = 'rock';
    }else if (randomnumber >= 1/3 && randomnumber<= 2/3){
        Computermove = 'paper';
    }else {
        Computermove = 'scissors';
    }
    console.log(Computermove);
        }
         
    