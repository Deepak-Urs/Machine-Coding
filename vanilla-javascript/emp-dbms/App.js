// immediately invoked function expression --> IIFE
(async function () {
    const data = await fetch('./data.json')
    const res = await data.json()
    console.log(res);
    let employees = res;

    // pre-fetch 1st user data
    let selectedEmployeeId = employees[0].id;
    let selectedEmployee = employees[0];

    const employeeList = document.querySelector(".employees__names--list")
    const employeeInfo = document.querySelector(".employees__single--info")

    // Add Employee logic later

    //Select Employee Logic
    employeeList.addEventListener('click', (e) => {
        if(e.target.tagName === 'SPAN' && selectedEmployeeId !== parseInt(e.target.id)) {
            selectedEmployeeId = e.target.id;
            renderEmployees();
            renderSingleEmployee()
        }
    })


    const renderEmployees = () => {
        employeeList.innerHTML = ""
        employees.forEach(emp => {
            //creating a span element
            const employee = document.createElement("span");
            employee.classList.add("employees__names--item");

            if(parseInt(selectedEmployeeId, 10) === emp.id) {
                employee.classList.add("selected");
                selectedEmployee = emp;
            }

            employee.setAttribute("id", emp.id);
            employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">❌</i>`

            employeeList.append(employee)

        });
    }

    //render individual employee

    const renderSingleEmployee = () => {
        employeeInfo.innerHTML = `<img src="${selectedEmployee.imageUrl} alt="emp-img-${selectedEmployee.firstName}-${selectedEmployee.lastName}" />
        <div class="employees__single--heading">${selectedEmployee.firstName} ${selectedEmployee.lastName}</div>
        <div class="employees__single--info">Address - ${selectedEmployee.address}</div>
        <div class="employees__single--info">Email - ${selectedEmployee.email}</div>
        <div class="employees__single--info">Contact No. - ${selectedEmployee.contactNumber}</div>
        <div class="employees__single--info">DOB - ${selectedEmployee.dob}</div>
        `
    }


    if(selectedEmployee) renderSingleEmployee();
    renderEmployees()
})()