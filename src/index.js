
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante
let nome = "Felipe"
let exp = '10000'
let nivel = (0)

if (exp <= 1000){
nivel = 'Ferro'
}
   
if(exp > 1000 && exp <=2000){
    nivel = 'Bronze'
}
if(exp > 2000 && exp <=5000){
    nivel = 'Prata'
}
if(exp > 5000 && exp <=7000){
    nivel = 'Ouro'
}
if(exp > 7000 && exp <=8000){
    nivel = 'Platina'
}
if(exp > 8000 && exp <=9000){
    nivel = 'Ascendente'
}
if(exp > 9000 && exp <=10000){
    nivel = 'Imortal'
}
if(exp > 10000){
    nivel = 'Radiante'
}

console.log("O Herói de nome " + nome + " está no nivel de " + nivel);