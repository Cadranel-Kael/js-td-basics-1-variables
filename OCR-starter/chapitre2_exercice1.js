// Prédiction de valeurs
/*
- Initialisez une variable a (syntaxe ES6) à la valeur 2 ;
- Décrémentez a de 1 ;
- Incrémentez-la de 1 ;
- Initialisez une variable b (syntaxe ES6) à la valeur 8 ;
- Incrémentez b de 2 ;
- Définissez une contante c comme étant la somme de a et du résultat de la multiplication de b par b ;
- Déclarez une contante d et affectez-lui comme valeur a * b + b ;
- Déclarez une contante e et affectez-lui comme valeur a * (b + b) ;
- Déclarez une contante f et affectez-lui comme valeur a * b / a ;
- Déclarez une contante g et affectez-lui comme valeur b / a * a ;
- Devinez les valeurs à présent contenues dans chacune de ces 7 variables ;
- Affichez les valeurs des 7 variables dans la console
*/

let a = 2;
console.log(`a = ${a}`);

a = a - 1;
console.log(`a = ${a}`);

a= a + 1;
console.log(`a = ${a}`);

let b = 8;
console.log(`b = ${b}`);

b= b + 1;
console.log(`b = ${b}`);

const c = a + b^2;
console.log(`c = ${c}`);

const d = a * b + b;
console.log(`d = ${d}`);

const e = a * (b + b);
console.log(`e = ${e}`);

const f = a * b + b;
console.log(`f = ${f}`);

const g = b / a * a;
console.log(`g = ${g}`);

