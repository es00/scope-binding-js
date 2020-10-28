let monica = {
  name: 'Monica Geller',
  total: 400,

  addToBalance: function(fee) {
    this.total = this.total + fee;
    return this.name + ' remaining balance is ' + this.total;
  }
}

console.log(monica.addToBalance(100)); // 'Monica Geller remaining balance is 500'

let rachel = {
  name: 'Rachel Green',
  total: 1500
};

const fee = 200;

let rachelAddToBalance = function() {
  // TODO: Implement this function with the constant variable `fee` above.
  this.total = this.total + this.fee;
  console.log(this.name + ' remaining balance is '+ this.fee);
  
};

// DO NOT CHANGE ANYTHING AFTER THIS LINE.

// Resets the state of the objects so it doesn't change across the tests.
let reset = function() {
  monica.total = 400;
  rachel.total = 1500;
}

module.exports = {
  rachelAddToBalance: rachelAddToBalance,
  reset: reset
};

// Call the function. Uncomment these lines to test.
// NOTE: Comment these lines out when submit. Otherwise, it will fail.
// console.log(rachelAddToBalance()); // "Rachel Green remaining balance is 1700"
// console.log(rachelAddToBalance()); // "Rachel Green remaining balance is 1900"
