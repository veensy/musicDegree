const input = {
  toto: [{ n: 12, str: "douze" }, { n: 0, str: "zero" }, { n: 1, str: "un" }],
  titi: [{ n: 2, str: "deux" }, { n: 42, str: "quarante-deux" }],
  tutu: [{ n: 1, str: "un" }, { n: 6, str: "six" }]
};

function findTheMax(exodemerde){
// j'ai mis des console.log pour t'aider à voir ce que je fais à chaque etape mais ne les lance pa tous en meme tps sinon tu va pas comprendre ce qui saffiche 
let quand = [];
let est = [];
let ce = 0;
let que = [];
let on = 0;
// ici je recupere la valeur (Object.values) de chaque ligne separement avec un map
Object.values(exodemerde).map((key, index) => {
// a chaque map on a la valeur de toto puis celle de titi puis celle de tutu que je met dans une variable (que)...ta compris hein
  quand[index] = Object.values(key);   
  que = quand[index];
  console.log(que)
  //ensuite pour chaque ligne je fais la somme des nombres 
  Object.values(que).map((k, idx) => {
    // la longeur de (on) me permet de pourvoir la comparer a l'index pour savoir qaund j'ai change de ligne sinon tout s'additionne alors quon veut la somme de chaque ligne 
    on = est.length;
    //console.log(on)
    if (on - 1 !== index) {
      ce = 0;
    }
    // je met la somme de chaque ligne dans un tableau 
    ce = ce + k.n;
    est[index] = ce;
    //console.log(ce)
  });
});
//de ce tableau je cible le plus grand nombre avec Math.max et je recupere son index
let se = est.indexOf(Math.max(...est));
//console.log(se)

// a laide de l'index je recupere la ligne corespondant ici c'est la ligne de titi
let voit = quand[se];
//console.log(voit)
// pour finir je map su cette ligne pour recuperer seulement lla valeur de str que je met dans un tableau et voila 
let jaisoifdepuismoi = [];
Object.values(voit).map((v, i) => {
  jaisoifdepuismoi.push(v.str);
});
//j'espere que tu a trouve mon message caché dans les varible sinon je serais tres decu ...
return jaisoifdepuismoi
}

console.log(findTheMax(input))

