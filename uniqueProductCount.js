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

  const getUniqueProductCount = (arr) => {
    let data = {};
    arr.forEach((item) => {
      let k = item.productName;
      if (data[k]) {
        data[k] += 1;
      } else {
        data[k] = 1;
      }
    });
    return data;
  };
  
  console.log(getUniqueProductCount(listOfProducts));