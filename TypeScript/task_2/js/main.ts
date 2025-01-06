// DirectorInterface and TeacherInterface remain unchanged
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
  
  // Function to check if the employee is a Director
  function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
    return (employee as DirectorInterface).workDirectorTasks !== undefined;
  }
  
  // Function to execute work depending on the employee type
  function executeWork(employee: DirectorInterface | TeacherInterface): void {
    if (isDirector(employee)) {
      console.log(employee.workDirectorTasks()); // Director task
    } else {
      console.log(employee.workTeacherTasks()); // Teacher task
    }
  }
  
// Define the string literal type Subjects
type Subjects = 'Math' | 'History';

// Function to teach the class based on the subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
  return '';
}

// Test cases
console.log(teachClass('Math')); // Teaching Math
console.log(teachClass('History')); // Teaching History
