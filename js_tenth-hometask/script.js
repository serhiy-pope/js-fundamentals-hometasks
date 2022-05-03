//******************** Tenth hometask *********************

//-------------------------------------Task1-----------------------------
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x);
console.log(y);
console.log(z);

//-------------------------------------Task2-----------------------------
let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
let { names: name2, age2, ages: name4, age4 } = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

//-------------------------------------Task3-----------------------------
function mul(...rest) {
  let result = 1;
  let isNumber;
  for (let i of rest) {
    if (typeof i == "number") {
      result *= i;
      isNumber = true;
    }
  }
  return isNumber ? result : 0;
}
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));

//-------------------------------------Task4-----------------------------
let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return this.data + "";
    });
  },
};

let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return (callback) => {
      this.result = callback();
    };
  },
};
client.calc(123);
console.log(client.result);
console.log(typeof client.result);

//-------------------------------------Task5-----------------------------
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

function mapBuilder(keys, values) {
  let map = new Map();
  for (let i of keys) {
    map.set(i, values[i - 1]);
  }
  return map;
}

let map = mapBuilder(keys, values);
console.log(map.size);
console.log(map.get(2));
