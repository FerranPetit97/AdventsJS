const gifts = ["cat", "game", "socks"];

function wrapping(gifts) {
  let giftsWrapped = [];

  gifts.forEach((gift) => {
    let wrap = "*";
    let size = gift.length;
    let giftWrapped = "";

    console.log(giftWrapped);

    for (let i = 0; i <= size; i++) {
      wrap = `${wrap}*`;
    }

    giftWrapped = `${wrap}\n*${gift}*\n${wrap}`;

    giftsWrapped.push(giftWrapped);
  });

  return giftsWrapped;
}

console.log(wrapping(gifts));
