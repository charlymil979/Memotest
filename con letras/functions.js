let foto = document.querySelectorAll(".invisible");
let item = document.querySelectorAll("li");
let win= document.getElementsByClassName("win")
let compare = [];
let cont=0
let fichas=["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H","I","I","J","J","K","K","L","L","M","M","N","N","P","P","Q","Q","R","R","S","S"]
let fichas2=[]
let prueba=[]

//creando un array del largo del array fichas, cada elemento del array es otro array, de 2 elementos, el 1ro un num al azar y el 2do un indice//
for(let i=0;i<fichas.length;i++){
fichas2[i]=[i,fichas[i]]
}
for(let i=0;i<fichas.length;i++){
   indice=Math.round(Math.random()*100)
      prueba.push([indice,i])
}

console.log(fichas2)
//Ordenando el array por el valor de los numeros al azar, el indice queda desordenado//
prueba.sort()


//Definiendo el dibujo de las fichas con los indices desordenados
for(i=0;i<fichas.length;i++){
   foto[i] = fichas2[i];
   // foto[i].textContent = fichas[prueba[i][1]];
}
// foto.forEach((it, i) => {
//   if (foto[i].textContent === "D" || foto[i].textContent === "E") {
//     foto[i].style.color = "#000000";
//   }
// });


item.forEach((it, i) => {
  item[i].addEventListener("click", () => {
    let visible = document.getElementsByClassName("active");
    if (visible.length < 2) {
      foto[i].classList.add("active")
      compare.push(i)
      compare.push(foto[i].textContent)
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


