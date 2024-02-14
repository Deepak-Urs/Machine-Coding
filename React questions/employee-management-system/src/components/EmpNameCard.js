const EmpNameCard = ({inputData, openNewEmployee, deleteEmployeeData}) => {
    return (
        <div className="emp-name-card" >
            <span style={{backgroundColor: 'beige'}} onClick={openNewEmployee}>{inputData.firstName+" "+inputData.lastName}</span>
            <span onClick={deleteEmployeeData}>❌</span>
        </div>
    )
}

export default EmpNameCard
