const messages = [
  "Oscar",
  "Ana",
  "Nicolay",
  "Diego",
  "Laura",
  "Simon",
  "Carolina",
  "Paulina",
  "Sofia",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

module.exports = { randomMsg };