// immediately invoked function expression --> IIFE
(async function () {
    const data = await fetch('./data.json')
    const res = await data.json()
    console.log(res);
    let employees = res;
    let showModal = false

    // pre-fetch 1st user data
    let selectedEmployeeId = employees[0].id;
    let selectedEmployee = employees[0];

    const employeeList = document.querySelector(".employees__names--list")
    const employeeInfo = document.querySelector(".employees__single--info")
    

    // Add Employee logic later
    const createEmployee = document.querySelector(".createEmployee")
    const addEmployeeModal = document.querySelector(".addEmployee")
    const addEmployeeForm = document.querySelector(".addEmployee__create")

    createEmployee.addEventListener('click', () => {
        addEmployeeModal.style.display = "flex";
    })

    addEmployeeModal.addEventListener('click', (e) => {
        if(e.target.className === 'addEmployee') {
            addEmployeeModal.style.display = "none";
        }
    })

    const dobInput = document.querySelector('.addEmployee__create--dob')
    dobInput.max = `${new Date().getFullYear() - 18}-${new Date().toISOString().slice(5, 10)}`

    addEmployeeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(addEmployeeForm)
        const values = [...formData.entries()]
        console.log(values);

        let empData = {}
        values.forEach(val => {
            empData[val[0]] = val[1]
        })
        
        empData.id = employees[employees.length - 1].id + 1;
        empData.age = new Date().getFullYear() - parseInt(empData.dob.slice(0,4), 10);
        empData.imageUrl = empData.imageUrl || "https://cdn-icons-png.flaticon.com/512/0/93.png";

        employees.push(empData);

        renderEmployees();
        addEmployeeForm.reset();
        addEmployeeModal.style.display = "none";
    })

    

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

    



    //const openModal = () => {
    //    console.log('openModal clicked');
        
    //}


    if(selectedEmployee) renderSingleEmployee();
    renderEmployees()
})()