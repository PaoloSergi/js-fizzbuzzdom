let myRow = document.querySelector(".row");

for (let i=1; i<=100; i++){
    myRow.innerHTML += `<div class="col m-3 number${i}"></div>`;
    let myCol = document.querySelector(`.number${i}`);
    myCol.innerHTML = `<article class="dom">${i}</article>`;

    if (i % 3 ===0){
        myCol.innerHTML = `<article class="fizz">Fizz</article>`;

        if (i % 5 ===0){
            myCol.innerHTML = `<article class="fizzBuzz">FizzBuzz</article>`;
        }

    } else if (i % 5 ===0){        
        myCol.innerHTML = `<article class="buzz">Buzz</article>`;
    }
}