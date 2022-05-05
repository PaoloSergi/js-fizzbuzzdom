let myMain = document.querySelector("main");

for (let i=1; i<=100; i++){
    let myDiv = document.createElement('div');
    myMain.append (myDiv);
    myDiv.innerHTML = `<article class="dom">${i}</article>`;    

    if (i % 3 === 0){
        myDiv.innerHTML = `<article class="fizz">Fizz</article>`;

        if (i % 5 === 0){
            myDiv.innerHTML = `<article class="fizzBuzz">FizzBuzz</article>`;
        }

    } else if (i % 5 === 0){        
        myDiv.innerHTML = `<article class="buzz">Buzz</article>`;
    }
}