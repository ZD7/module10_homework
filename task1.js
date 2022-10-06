let val = prompt("введите число");
let valNum = val++;
if (isNaN(valNum)){
  console.log("Упс, кажется, вы ошиблись")
} else if (valNum % 2 === 1) {
  console.log("число нечетное")
} else if (valNum % 2 === 0) {
  console.log("число четное")
}