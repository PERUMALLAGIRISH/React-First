// literal
var employee = {
  basicSalary: 30000,
  overtime: 10,
  rate: 20,

  getWage: function() {
    return this.basicSalary + this.overtime * this.rate;
  }
};

var result = employee.getWage();
console.log(result);
