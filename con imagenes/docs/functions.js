let foto = document.querySelectorAll("img");
let item = document.querySelectorAll("li");
let win= document.getElementsByClassName("win")
let borde= document.getElementsByClassName("borde")
let compare = [];
let cont=0
let fichas=["avocado.png","banana.png","carrot.png","cherries.png","ear-of-corn.png","eggplant.png","grapes.png","hamburger.png","hot-dog.png","hot-pepper.png","kiwi-fruit.png","meat-on-bone.png","mushroom.png","pineapple.png","pizza.png","poultry-leg.png","red-apple.png","strawberry.png","avocado.png","banana.png","carrot.png","cherries.png","ear-of-corn.png","eggplant.png","grapes.png","hamburger.png","hot-dog.png","hot-pepper.png","kiwi-fruit.png","meat-on-bone.png","mushroom.png","pineapple.png","pizza.png","poultry-leg.png","red-apple.png","strawberry.png"]

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
                        borde[0].classList.add("done");                        
                     }, 800);
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


