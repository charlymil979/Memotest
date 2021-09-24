let foto = document.querySelectorAll("img");
let item = document.querySelectorAll("li");
let win= document.getElementsByClassName("win")
let compare = [];
let cont=0
let fichas=["imag/avocado.png","imag/banana.png","imag/carrot.png","imag/cherries.png","imag/ear-of-corn.png","imag/eggplant.png","imag/grapes.png","imag/hamburger.png","imag/hot-dog.png","imag/hot-pepper.png","imag/kiwi-fruit.png","imag/meat-on-bone.png","imag/mushroom.png","imag/pineapple.png","imag/pizza.png","imag/poultry-leg.png","imag/red-apple.png","imag/strawberry.png","imag/avocado.png","imag/banana.png","imag/carrot.png","imag/cherries.png","imag/ear-of-corn.png","imag/eggplant.png","imag/grapes.png","imag/hamburger.png","imag/hot-dog.png","imag/hot-pepper.png","imag/kiwi-fruit.png","imag/meat-on-bone.png","imag/mushroom.png","imag/pineapple.png","imag/pizza.png","imag/poultry-leg.png","imag/red-apple.png","imag/strawberry.png"]

let prueba=[]

//creando un array del largo del array fichas, cada elemento del array es otro array, de 2 elementos, el 1ro un num al azar y el 2do un indice//
for(let i=0;i<fichas.length;i++){
   indice=Math.round(Math.random()*100)
      prueba.push([indice,i])
}
//Ordenando el array por el valor de los numeros al azar, el indice queda desordenado//
 prueba.sort()

//Definiendo el dibujo de las fichas con los indices desordenados
for(i=0;i<fichas.length;i++){
   foto[i].src = fichas[prueba[i][1]];
}


item.forEach((it, i) => {
  item[i].addEventListener("click", () => {
    let visible = document.getElementsByClassName("active");
    if (visible.length < 2) {
      foto[i].classList.add("active")
      compare.push(i)
      compare.push(foto[i].src)
      cont++
      document.getElementsByClassName("toques")[0].textContent =cont;
      document.getElementsByClassName("toques")[1].textContent =cont;
         if(compare.length>4){compare=[]}
            if (compare[1] === compare[3]) {
               if (compare[0] !== compare[2]){
                  foto[compare[0]].classList.add("fixed")
                  foto[compare[2]].classList.add("fixed")
                  let completed=document.getElementsByClassName("fixed")
                  if(completed.length===fichas.length){
                     setTimeout(() => {
                        win[0].classList.add("done");                        
                     }, 1000);
                  }
            }
      else{compare=[]}
      }
          } else {
      foto.forEach((f, i) => {
        (compare = []), foto[i].classList.remove("active");
      });
    }
  })
});


