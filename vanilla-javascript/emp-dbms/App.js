// immediately invoked function expression --> IIF
(async function () {
    const data = await fetch('./data.json')
    const res = await data.json()
    console.log(res);
    let employees = res;

    // pre-fetch 1st user data
    let selectedEmployeeId = employees[0].id;
    let selectedEmployee = employees[0];

    const employeeList = document.querySelector(".employee__names--list")
    const employeeInfo = document.querySelector(".employee__single--list")

    // Add Employee logic later

    //Select Employee Logic



    const renderEmployees = () => {
        employeeList.innerHTML = ""
        employees.forEach(emp => {
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
    renderEmployees()
})()