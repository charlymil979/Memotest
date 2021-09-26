let choice=document.querySelectorAll(".choice");
let foto = document.querySelectorAll(".ficha");
let item = document.querySelectorAll("li");
let win= document.getElementsByClassName("win")
let borde= document.getElementsByClassName("borde")
let compare = [];
let cont=0
let emoji=["avocado.png","banana.png","carrot.png","cherries.png","ear-of-corn.png","eggplant.png","grapes.png","hamburger.png","hot-dog.png","hot-pepper.png","kiwi-fruit.png","meat-on-bone.png","mushroom.png","pineapple.png","pizza.png","poultry-leg.png","red-apple.png","strawberry.png","avocado.png","banana.png","carrot.png","cherries.png","ear-of-corn.png","eggplant.png","grapes.png","hamburger.png","hot-dog.png","hot-pepper.png","kiwi-fruit.png","meat-on-bone.png","mushroom.png","pineapple.png","pizza.png","poultry-leg.png","red-apple.png","strawberry.png"]

let svgs=["01.svg","02.svg","03.svg","04.svg","05.svg","06.svg","07.svg","08.svg","09.svg","10.svg","11.svg","12.svg","13.svg","14.svg","15.svg","16.svg","17.svg","18.svg","01.svg","02.svg","03.svg","04.svg","05.svg","06.svg","07.svg","08.svg","09.svg","10.svg","11.svg","12.svg","13.svg","14.svg","15.svg","16.svg","17.svg","18.svg"]

let fichas=[]
let prueba=[]

//creando un array del largo del array fichas, cada elemento del array es otro array, de 2 elementos, el 1ro un num al azar y el 2do un indice//
for(let i=0;i<emoji.length;i++){
   indice=Math.round(Math.random()*1000)
      prueba.push([indice,i])
}

//Ordenando el array por el valor de los numeros al azar, el indice queda desordenado//
prueba.sort()

choice.forEach((it,i)=>{
   choice[i].addEventListener("click", ()=>{
   if(choice[i].classList.contains("0")){
      for (i=0;i<svgs.length;i++){
        fichas[i]=emoji[i]}
      }
         else{
         for (i = 0; i < svgs.length; i++) {
           fichas[i] = svgs[i];
         }
         }
      document.querySelector(".fixed-choice").classList.remove("active")
      //Definiendo el dibujo de las fichas con los indices desordenados
for(i=0;i<fichas.length;i++){
   foto[i].src = fichas[prueba[i][1]];
}
   })
})









item.forEach((it, i) => {
  item[i].addEventListener("click", () => {
     let visible = document.getElementsByClassName("active");
   if(visible.length<2){
      foto[i].classList.add("active")
      cont++
      document.getElementsByClassName("toques")[0].textContent =cont;
      document.getElementsByClassName("toques")[1].textContent =cont;
      compare.push(i)
      compare.push(foto[i].src)
      if(compare.length===4){
               if ((compare[1] === compare[3])&&(compare[0] !== compare[2])) {
                     foto[compare[0]].classList.add("fixed")
                     foto[compare[2]].classList.add("fixed")
                     let completed=document.getElementsByClassName("fixed")
                        if(completed.length===fichas.length){
                           setTimeout(() => {
                              win[0].classList.add("done");                        
                              borde[0].classList.add("done");                        
                           }, 600);
                        
               }
         }
         compare=[]
         setTimeout(() => {
            foto.forEach((it,i)=>{foto[i].classList.remove("active")})
            }, 400);
         
      }     
   }
  })
})

