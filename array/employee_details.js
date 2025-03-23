const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Emily Brown', age: 32, department: 'HR', salary: 48000 }
  ];
  
  function displayEmployees() {
    const employeeHTML = employees.map(emp =>
      `<p>ID: ${emp.id}, Name: ${emp.name}, Department: ${emp.department}, Salary: $${emp.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = employeeHTML;
  }
  
  function calculateTotalSalaries() {
    const total = employees.reduce((acc, emp) => acc + emp.salary, 0);
    alert(`Total Salaries: $${total}`);
  }
  
  function displayHREmployees() {
    const hrEmployees = employees.filter(emp => emp.department === 'HR');
    const hrHTML = hrEmployees.map(emp =>
      `<p>ID: ${emp.id}, Name: ${emp.name}, Salary: $${emp.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = hrHTML || '<p>No HR employees found.</p>';
  }
  
  function findEmployeeById(id) {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
      document.getElementById('employeesDetails').innerHTML =
        `<p>Employee Found: ${employee.name}, Department: ${employee.department}, Salary: $${employee.salary}</p>`;
    } else {
      document.getElementById('employeesDetails').innerHTML = '<p>Employee not found.</p>';
    }
  }
  