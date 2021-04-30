// Milestone 1
// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

// Milestone 2
// Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

// Milestone 3
// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.

/////////////////////
//F U N C T I O N S//
/////////////////////
const printHtml = (target, color, name) => {
  return $(target).append(`
  <li>
        <i class="fas fa-cat fa-2x" style ="color:${color}"></i>
        <span>${name}</span>
  </li>
  `)
}

////////E N D/////////
//F U N C T I O N S//
/////////////////////

$(function(){
  // console.log("doc ready");

  const cats = [
    {
      name: "Birillo",
      age: 15,
      color: "#8B4513",
      sex: "male"
    },
    {
      name: "Gina",
      age: 7,
      color: "#000000",
      sex: "female"
    },
    {
      name: "Paul",
      age: 2,
      color: "#00BFFF",
      sex: "male"
    },
    {
      name: "Fragola",
      age: 4,
      color: "#F0FFFF",
      sex: "male"
    },
    {
      name: "Sansone",
      age: 15,
      color: "#A52A2A",
      sex: "male"
    },
  ];

  // Milestone 1: ciclo forEach
  // LO UTILIZZO PER VEDERE I CONTENUTI DI UN ARRAY

  cats.forEach((cat) => {
    //cat corrisponde a cats[i]
    console.log(cat); // mi restituisce gli oggetti (cat)dell'array (cats)
    // stampo i gatti nell'ul grazie alla funzione printHtml
    printHtml("ul.cats", cat.color, cat.name)
    // senza return
  });

  // aggiungo e rimuovo classe active (effetto hover) --- per allenamento ---
  $(".fa-cat").mouseenter(function (){
    $(this).addClass("active");
  });
  $(".fa-cat").mouseleave(function (){
    $(this).removeClass("active");
  });
  
 

}); // END DOC.READY

