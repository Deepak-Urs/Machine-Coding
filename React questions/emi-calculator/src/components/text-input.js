function TextInput({title, state, setState, name}) {
    const updateValue = (e) => {
        let val = e.target.value
        console.log('TYPEOF e.target.value', typeof(e.target.value));

        if(name === 'fee' || name === 'interest') {
            val = val.slice(0,2)
        }
        setState(val)
    }

    return (
        <>
            <span className='title'>
                {title}
            </span>
            <input 
            type="number" 
            value={state}
            name={name}
            onChange={(e) => updateValue(e)} placeholder={title} 
            />
        </>
    )
}

export default TextInput;