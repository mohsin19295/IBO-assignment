const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

const getUniquePrducts = (arr) => {
  let data = {};
  arr.forEach((item) => {
    let k = item.productName;
    if (data[k]) {
      data[k].quantity += item.quantity;
    } else {
      data[k] = item;
    }
  });
  return Object.values(data);
};

console.log(getUniquePrducts(listOfProducts));
