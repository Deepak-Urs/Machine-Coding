(async function(){
    const data = (await fetch('./data.json'));

    let empData = await data.json();
    let selEmpId = empData[0].id;
    let selEmp = empData[0];

    const empList = document.querySelector('.employees__names--list');
    const empInfo = document.querySelector('.employees__single--info');

    //const emps = empData.map(e => {return <div id={e.id}>{e.firstName} + " " + {e.lastName}</div>})
    const renderEmployees = () => {
        empList.innerHTML = "";
        empData.forEach(emp => {
            const employee = document.createElement("span");
            employee.classList.add("employees__names--item"); 

            if(parseInt(selEmpId,10) === emp.id) {
                employee.classList.add("selected");
                selEmp = emp;
            }

            employee.setAttribute("id", emp.id);
            employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">❌</i>`
            empList.append(employee)
        });
    }
    renderEmployees()
    
})();
