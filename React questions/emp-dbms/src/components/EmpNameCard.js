const EmpNameCard = ({firstName, lastName}) => {
    return (
        <div className="emp-name-card">
            <h4>{firstName} {lastName}</h4>
            <span>❌</span>
        </div>
    );
}

export default EmpNameCard;