var chocolate = Number(prompt(`How many pieces of chocolate you’d like`));
var minusChocolate = chocolate - "10";

if (minusChocolate > 20) {
  console.log(`You ate too much chocolate`);
} else if (minusChocolate >= 10) {
  console.log(`You ate chocolate in moderation`);
} else if (minusChocolate >= 5) {
  console.log(`You didn't have enough chocolate. Would you like some more?`);
} else {
  console.log("Do you want some chocolate?");
}
