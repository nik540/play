let random = (min, max) => {
  let rand = (Math.random() * (max + 1 - min) + min);
  return Math.floor(rand)
}
alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));