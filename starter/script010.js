/*****************************
* 10 - Opérateurs de base
*/

// 1. Déclarer les variables now, ageJohn, ageMark, yearJohn et yearMark
// puis affecter aux trois premières les valeurs 2022, 28 et 33

let ageJohn, ageMark, yearJohn, yearMark;

const now = 2022;
ageJohn = 28;
ageMark = 33;

// Opérateurs mathématiques

// 2. Affecter à yearJohn sa date de naissance
// (en la calculant à partir de l'année courante et de son âge)
// idem pour yearMark
// puis afficher la date de naissance de John 
// et "Mark est né en …"

yearJohn = now - ageJohn; //C'est une expression
console.log(`John est née en ${yearJohn}`);

yearMark = now - ageMark;
console.log(`Mark est née en ${yearMark}`);

// 3. Afficher l'année à laquelle nous serons dans deux ans
// le double de l'année
// le dixième de l'année

console.log(`Dans deux ans nous serons en ${now+2}`)
console.log(`Dans dans 2x ${now} : ${now*2}`)
console.log(`Dans dans 1/10 de ${now} : ${now/10}`)

// Opérateurs logiques (<, >, <=, >=, &&, ||(pipe))

// 4. …

console.log(`Mark est-il née après 2021 ? ${yearMark>2021}`);

console.log(typeof(1 + 1));


// Opérateur typeof

