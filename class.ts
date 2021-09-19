class Employee {
    constructor(private id: string | number,public name: string, readonly gender: boolean){}
    print(){ console.log(`I am ${this.name} - ${this.id} gender ${this.gender ? 'Male' : 'Female'}`) }
}

const tyson = new Employee(1, 'tyson', true);
const pen = new Employee(2, 'pen', false);

let employees: Employee[] = [];
employees.push(tyson);
employees.push(pen);

employees.map(employee => console.log(employee.print()))