let evens = 0
let odds = 0

for (i=0; i<array.length; i++) {
  if (i == 0) {
    console.log("нулевой эл-т")
  } else if (array[i] % 2 === 0 && typeof(array[i]) === "number") {
    evens += 1;
  } else if (array[i] % 2 !== 0 && typeof(array[i]) === "number") {
    odds += 1;
  }
}