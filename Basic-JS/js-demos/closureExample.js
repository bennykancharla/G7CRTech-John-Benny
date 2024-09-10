function Employee(id,name){
    this.setNewVariable = function(newVariable,value){
        newVariable = value;
    }
    this.work = function(){
        console.log(`${name} is working....${email}`)
    }
    this.getEmail =  function(){
        return email;
    }
}



var employee = new Employee(1,"Benny");
// employee.work()


// employee.email = "benny@gmail.com"
// console.log(employee.email)
// employee.work();
// console.log(employee.getEmail());
// console.log(Employee);

// Employee.prototype.email = "benny@gmail.com"

// employee.work();

