var SalaryCalculator = function() {
  var intern = 1;
  var associates = 2;
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
  var date = (new Date()).getDate();
  this.calculate = function(id, password) {
    if(intern == id && password == 'password') {
      var internSalary = salaries.intern;
      
      return internSalary.stipend - (internSalary.stipend/date);
    }
    if(associate == id && password == 'password') {
      var associateSalary = salaries.associate;
      
      return associateSalary.total - (associateSalary.total/date);
    }
    if(manager == id && password == 'password') {
      var managerSalary = salaries.manager;
      
      return managerSalary.total - (managerSalary.total/date);
    }
    
    if(cExecutive == id && password == 'password') {
      var cExecutiveSalary = salaries.cExecutive;
      
      return cExecutiveSalary.total - (cExecutiveSalary.total/date);
    }
    
    if(director == id && password == 'password') {
      var directorSalary = salaries.director;
      
      return directorSalary.total - (directorSalary.total/date);
    }
    

    
  }
  
}
