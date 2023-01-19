let clientCounter = 56;
const maxClients = 70;

const calculateClientsInHotel = function (clientCounter, maxClients) {
  while (clientCounter < maxClients) {
    console.log(clientCounter);
    clientCounter += 1;
  }

  return `Your hotel are full!You have ${clientCounter} clients in Your hotel!`;

  // if (clientCounter === maxClients) {
  //   console.log();
  // } else {
  //   console.log(``);
  // }
};

console.log(calculateClientsInHotel(clientCounter, maxClients));
