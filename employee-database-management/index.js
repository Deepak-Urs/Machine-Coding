// IIFE --> Immediately invoked Function Expression
// (async function () {
//   const data = await fetch("./data.json");
//   const res = await data.json();
//   console.log("Hello world!");

//import './data.json'
//   let employees = res;
//   let selectedEmployeeId = employees[0].id;
//   let selectedEmployeeObject = employees[0];
// })();

// function hello() {
//   console.log("hello world!");
// }

// hello();
// import "./data.json";

async function initilizer() {
    const data = await fetch('./data.json')
    const res = await data.json()
    //const res = 'data.json'

    let employees = res;
    let selectedEmployeeId = employees[0].id;
    let selectedEmployee = employees[0];
  
    const employeeList = document.querySelector(".employees__names--list");
    const employeeInfo = document.querySelector(".employees__single--info");
  
    //  add employee logic
    const createEmployee = document.querySelector(".createEmployee");
    const addEmployeeModal = document.querySelector(".addEmployee");
    const addEmployeeForm = document.querySelector(".addEmployee_create");
  
    createEmployee.addEventListener("click", () => {
      addEmployeeModal.style.display = "flex";
    });

    // hiding the modal
    addEmployeeModal.addEventListener('click', (e) => {
        console.log('addEmployee clicked',e);
        if(e.target.className === "addEmployee") {
            addEmployeeModal.style.display = "none"
        }
    })

    const dobInput = document.querySelector('.addEmployee_create--dob')
    dobInput.max = `${new Date().getFullYear() - 18}-${new Date().toISOString().slice(5, 10)}`  

    // the form submit handling
    addEmployeeForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = new FormData(addEmployeeForm)
        const values = [...formData.entries()];
        let empData = {};
        console.log(values);

        values.forEach((val) => {
            empData[val[0]] = val[1];
        })

        empData.id = employees[employees.length - 1].id + 1
        empData.age = new Date().getFullYear() - parseInt(empData.dob.slice(0,4),10)
        empData.imgUrl = empData.imageUrl || "https://cdn-icons.-png.flaticon.com/512/0/93/png"
        //empData.address = employees[employees.length - 1].id + 1
        console.log(empData);
        employees.push(empData);

        renderEmployees();
        addEmployeeForm.reset();
        addEmployeeModal.style.display = "none"
    })
  
    // select employee logic
    employeeList.addEventListener("click", (e) => {
      if (e.target.tagName === "DIV" && selectedEmployeeId !== e.target.id) {
        selectedEmployeeId = e.target.id;
        renderEmployees();
        renderSingleEmployee();
      }

      if(e.target.tagName == "I") {
         employees = employees.filter((emp) => String(emp.id) !== e.target.parentNode.id)

         if(String(selectedEmployeeId) === e.target.parentNode.id) {
          selectedEmployeeId = employees[0]?.id || -1
          selectedEmployee = employees[0] || {}
          renderSingleEmployee()
         }

         renderEmployees()
      }
    });
  
    // render employee list
    const renderEmployees = () => {
      employeeList.innerHTML = "";
      employees.forEach((emp) => {
        const employee = document.createElement("div");
        employee.classList.add("employees__names--item");
  
        if (parseInt(selectedEmployeeId, 10) == emp.id) {
          employee.classList.add("selected");
          selectedEmployee = emp;
        }
  
        employee.setAttribute("id", emp.id);
        employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class=employeeDelete">X</i>`;
  
        employeeList.append(employee);
      });
    };
  
    const renderSingleEmployee = () => {
      if(selectedEmployeeId === -1) {
        employeeInfo.innerHTML = "";
        return
      }
      employeeInfo.innerHTML = `
      <img src="${selectedEmployee.imageUrl}" />
      <span>Name - ${selectedEmployee.firstName} ${selectedEmployee.firstName}</span>
      <span>Salary - ${selectedEmployee.salary}</span>
      <span>Mobile - ${selectedEmployee.contactNumber}</span>
      <span>DOB - ${selectedEmployee.dob}</span>
      `;
    };
  
    if (selectedEmployee) {
      renderSingleEmployee();
    }
    renderEmployees();
  }
  
  function main() {
    console.log("main called");
  
    initilizer();
  }
  
  main();
  