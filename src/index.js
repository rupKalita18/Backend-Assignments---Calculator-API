const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

app.get("/", (req, res) => {
  res.send("Hello world!");
});

////post methods

app.post("/add", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;

  if (parseFloat(num1) > 1000000 || parseFloat(num2) > 1000000) {
    res.send({
      status: "error",
      message: "Overflow",
      sum: undefined
    });
    return;
  }
  if (parseFloat(num2) < -1000000 || parseFloat(num1) < -1000000) {
    res.send({
      status: "error",
      message: "Underflow",
      sum: undefined
    });
    return;
  }

  if (!isNaN(parseFloat(num1)) && !isNaN(parseFloat(num2))) {
    let sum = parseFloat(num1) + parseFloat(num2);
    if (sum < 1000000) {
      res.send({
        status: "success",
        message: "the sum of given two numbers",
        sum: sum
      });
      return;
    } else {
      res.send({
        status: "error",
        message: "Overflow",
        sum: undefined
      });
      return;
    }
  } else if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
    res.send({
      status: "failure",
      message: "Invalid data types",
      sum: undefined
    });
    return;
  }
});

//subtraction
app.post("/sub", (req, res) => {
  let num1 = parseFloat(req.body.num1);
  let num2 = parseFloat(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.send({
      status: "failure",
      message: "Invalid data types",
      diffrence: undefined
    });
    return;
  }

  if (num1 > 1000000 || num2 > 1000000) {
    res.send({
      status: "error",
      message: "Overflow",
      difference: undefined
    });
    return;
  }

  if (num1 < -1000000 || num2 < -1000000) {
    res.send({
      status: "error",
      message: "Underflow",
      difference: undefined
    });
    return;
  }

  if (!isNaN(num1) || !isNaN(num2)) {
    let diff = num1 - num2;
    res.send({
      status: "success",
      message: "the difference of given two numbers",
      diffrence: diff
    });
    return;
  }
});

//multiply

app.post("/multiply", (req, res) => {
  let num1 = parseFloat(req.body.num1);
  let num2 = parseFloat(req.body.num2);

  if (num1 > 1000000 || num2 > 1000000) {
    res.send({
      status: "error",
      message: "Overflow",
      multiply: undefined
    });
    return;
  }

  if (isNaN(num1) || isNaN(num2)) {
    res.send({
      status: "failure",
      message: "Invalid data types",
      result: undefined
    });
    return;
  }

  if (num2 < -1000000 || num2 < -1000000) {
    res.send({
      status: "error",
      message: "underflow",
      result: undefined
    });
    return;
  }
  if (!isNaN(num1) && !isNaN(num2)) {
    let product = num1 * num2;
    if (product < 1000000) {
      res.send({
        status: "success",
        message: "The product of given numbers",
        result: product
      });
      return;
    } else {
      res.send({
        status: "error",
        message: "Overflow",
        result: undefined
      });
      return;
    }
  }
});

//division

app.post("/divide", (req, res) => {
  let num1 = parseFloat(req.body.num1);
  let num2 = parseFloat(req.body.num2);

  if (num1 > 1000000 || num2 > 1000000) {
    res.send({
      status: "error",
      message: "Overflow",
      result: undefined
    });
    return;
  }

  if (num1 < -1000000 || num2 < -1000000) {
    res.send({
      status: "error",
      message: "Underflow",
      result: undefined
    });
    return;
  }

  if (isNaN(num1) || isNaN(num2)) {
    res.send({
      status: "failure",
      message: "Invalid data types",
      result: undefined
    });
    return;
  }

  if (!isNaN(num1) && !isNaN(num2)) {
    if (num2 === 0) {
      res.send({
        status: "error",
        message: "Cannot divide by zero",
        result: undefined
      });
      return;
    } else {
      res.send({
        status: "success",
        message: "The division of given numbers",
        result: parseFloat(num1) / parseFloat(num2)
      });
      return;
    }
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
