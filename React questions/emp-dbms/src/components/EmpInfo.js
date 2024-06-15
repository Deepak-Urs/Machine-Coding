const EmpInfo = ({data}) => {
    console.log('EmpInfo', data)
  return (
    <div className="emp-info">
      <div className="emp-info__img">
        <img src={data.img} alt="emp-img" />
        </div>
      <div className="emp-info__name">{data.firstName} {data.lastName}</div>
      <div className="emp-info__age">{data.age}</div>
      <div className="emp-info__email">{data.email}</div>
      <div className="emp-info__salary">{data.salary}</div>
      <div className="emp-info__contact">{data.contactNumber}</div>
    </div>
  )
}

export default EmpInfo
