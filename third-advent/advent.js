const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

function distributeGifts(packOfGifts, reindeers) {
  let chargeLimit = 0;
  let actualCharge = 0;
  let packs = 0;
  let count = 0;

  reindeers.forEach((reindeer) => {
    chargeLimit = chargeLimit + reindeer.length * 2;
  });

  packOfGifts.forEach((gift) => {
    actualCharge = actualCharge + gift.length;
    count = actualCharge;
  });

  while (chargeLimit >= count) {
    count = count + actualCharge;
    packs++;
  }

  return packs;
}

distributeGifts(packOfGifts, reindeers); // 2
