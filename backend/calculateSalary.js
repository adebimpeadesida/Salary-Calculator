var salaryCalculator = function() {
  var intern = 1;
  var associate = 2;
  var manager = 3;
  var cExecutive = 4;
  var director = 5;
  
  var salaries = {
    intern: {
      stipend: 15000
    },
    associate: {
      transport: 10000,
      basic:60000,
      total:70000
    },
    manager: {
      transport: 20000,
      houseAllowance:30000,
      basic:100000,
      total: 150000
    },
    cExecutive:{
      transport:30000,
      housing: 40000,
      travelling: 50000,
      basic: 130000,
      total: 250000
    },
    director: {
      transport:40000,
      housing: 50000,
      feeding: 10000,
      basic: 200000,
      travelling: 50000,
      total: 350000
    }
    
  }
  Date.prototype.monthDays= function(){
        var d= new Date(this.getFullYear(), this.getMonth()+1, 0);
        return d.getDate();
      }
      var d = new Date();
      var dayOfMonth = d.getDate();
      var daysInMonth = d.monthDays();
  
  var id = document.getElementById('user-id').value
  var password = document.getElementById('user-password').value
  if(id<1 || id>5){
    document.getElementById('output-display').innerHTML = "Invalid User Id";
    return;
  }
  this.calculate = function(id, password) {
      
    if(intern == id && password == 'password') {
      var perDay = salaries.intern.stipend/daysInMonth;
      return perDay*dayOfMonth;
    }
    if(associate == id && password == 'password') {
      var perDay = salaries.associate.total/daysInMonth;
      return perDay*dayOfMonth;
    }
    if(manager == id && password == 'password') {
      var perDay = salaries.manager.total/daysInMonth;
      return perDay*dayOfMonth;
    }
    
    if(cExecutive == id && password == 'password') {
      var perDay = salaries.cExecutive.total/daysInMonth;
      return perDay*dayOfMonth;
    }
    
    if(director == id && password == 'password') {
      var perDay = salaries.director.total/daysInMonth;
      return perDay*dayOfMonth;
    }
    
  }

  document.getElementById('output-display').innerHTML = this.calculate(id,password);
  
}
