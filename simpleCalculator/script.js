function dis(val) {
  //document.getElementById("display").value += val
  if (val == "=") {
    console.log("Equal");
    const string = document.getElementById("display").value * 2;

    document.getElementById("display").value = string;
  } else {
    document.getElementById("display").value += val;
  }
}

function clr() {
  document.getElementById("display").value = "";
}

function solve() {
  const val = document.getElementById("display").value;
  const ans = math.evaluate(val);
  document.getElementById("display").value = ans;
}

let arr = [1, 2, 3, 4, 5];
let arrCopy = [];

let squared = arr.forEach((item) => {
  arrCopy.push(item ** 2);
});

console.log(arrCopy);
