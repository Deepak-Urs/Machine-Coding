import { numberWithCommas } from "../utils/config"

function SliderInput({title, state, min, max, onChange, labelMin, labelMax, underlineTitle }) {
    return (
        <>
            <span className='title'>
                {title}
            </span>
            {state > 0 && (<span className='title' style={{ textDecoration: "underline" }}>
                {underlineTitle}
            </span>)}
            <div>
                <input className='slider' type='range' min={min} max={max} value={state} onChange={onChange} />
                <div className='labels'>
                    {/* nullish coalescing */}
                    <label>{labelMin ?? numberWithCommas(min)}</label>
                    <label>{numberWithCommas(state)}</label>
                    <label>{labelMax ?? numberWithCommas(max)}</label>
                </div>
            </div>
        </>
    )
}

export default SliderInput