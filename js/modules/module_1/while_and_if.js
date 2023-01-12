let clientCounter = 56;
const maxClients = 70;

// console.log(clientCounter);
// console.log(maxClients);

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

if (clientCounter === maxClients) {
  console.log("Your hotel are full!");
} else {
  console.log(`You have ${clientCounter} clients in Your hotel!`);
}
