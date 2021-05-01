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
        <i class="fas fa-ribbon fa-2x" style="color:${color}"></i>
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
      sex: "female"
    },
    {
      name: "Sansone",
      age: 15,
      color: "#A52A2A",
      sex: "male"
    },
  ];

  // Milestone 1: stampo i gattini in ul
  // ciclo forEach LO UTILIZZO PER VEDERE I CONTENUTI DI UN ARRAY (no return)
  cats.forEach((cat) => {
    //cat corrisponde a cats[i]
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

  // Milestone 2;
  // aggiungo un fiocco ai gatti
  // .map LO UTILIZZO PER CLONARE I CONTENUTI DI UN ARRAY IN UN ALTRO ARRAY E MODIFICARLI (return obbligatorio)
  const pink = "#FF69B4";
  const blue = "#1E90FF";

  const newCats = cats.map((cat)=>{
    // var      (se è vero che....     ) ? se è true : se è falso
    let color = cat.gender === "female" ? pink : blue;
    let opacity = cat.age / 10;
    return {
      // prendo tutto il contenuto originale di cat
      ...cat,
      // e aggiungo l'oggetto ribbon con le relative proprietà
      ribbon: {
        color,
        opacity,
      },
    }
  });
  // console.log(newCats);
  
  // Milestone 2; 
  // divido i gatti femmina e i gatti maschi in due diversi array
  // .filter LO UTILIZZO PER FILTRARE I CONTENUTI DI UN ARRAY (return obbligatorio)
  const catsFemale = newCats.filter((cat) => {
    return cat.sex === "female"
  });
  // console.log(catsFemale)
  const catsMale = newCats.filter((cat) => {
    return cat.sex === "male"
  });
  // console.log(catsMale)

  // li stampo a video in due nuove ul
  catsFemale.forEach((cat) => {
    printHtml("ul.female", cat.color, cat.name)
  });
  catsMale.forEach((cat) => {
    printHtml("ul.male", cat.color, cat.name)
  });


  // Milestone 3
  // Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio
  const mergeCats = [...catsFemale, ...catsMale];
  console.log(mergeCats)
  // li stampo a video
  mergeCats.forEach((cat) => {
    printHtml("ul.ordered", cat.color, cat.name)
  });
}); // END DOC.READY

