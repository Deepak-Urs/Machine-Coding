const EmpNameCard = ({inputData, openNewEmployee}) => {
    return (
        <div className="emp-name-card" onClick={openNewEmployee}>
            <span>{inputData.firstName+" "+inputData.lastName}</span>
            <span>❌</span>
        </div>
    )
}

export default EmpNameCard
