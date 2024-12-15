// DirectorInterface and TeacherInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Director class implementing DirectorInterface
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  // Teacher class implementing TeacherInterface
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  // createEmployee function
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
// Test cases with detailed logs
const employee1 = createEmployee(200);
console.log("Employee 1:", employee1.workFromHome(), employee1.getCoffeeBreak(), employee1 instanceof Teacher);

const employee2 = createEmployee(1000);
console.log("Employee 2:", employee2.workFromHome(), employee2.getCoffeeBreak(), employee2 instanceof Director);

const employee3 = createEmployee("$500");
console.log("Employee 3:", employee3.workFromHome(), employee3.getCoffeeBreak(), employee3 instanceof Director);

  