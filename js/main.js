'use strict'
{
    const card = document.querySelector('#card');
    const cardFront = document.querySelector('#card-front');
    const cardBack = document.querySelector('#card-back');
    const button = document.querySelector('#button');
    const words = [
        {'en': 'read', 'ja': '読む'},
        {'en': 'write', 'ja': '書く'},
        {'en': 'eat', 'ja': '食べる'},
        {'en': 'run', 'ja': '走る'},
        {'en': 'walk', 'ja': '歩く'},
    ];

    card.addEventListener('click',()=>{
        flip();
    });


    button.addEventListener('click',()=>{
        next();
    });

    function next(){
        if (card.className === 'open'){
            card.addEventListener('transitioned', setCard);
            flip();
        }else{
            setCard();
        }
    }

    function setCard(){
        const num = Math.floor(Math.random() * words.length);
        cardFront.innerHTML = words[num]['en'];
        cardBack.innerHTML = words[num]['ja'];
        card.removeEventListener('transitioned', setCard);
    }

    setCard();

    window.addEventListener('keyup',(e)=>{
        if(e.key === 'Enter'){
            flip();
        }else if(e.key === 'Shift'){
            next();
        }
        console.log(e.key);
    });

    function flip() {
        card.className = card.className === '' ? 'open' : '';
    }

}