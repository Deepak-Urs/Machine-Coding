import { useState } from "react";

function Folder({ explorer }) {
    console.log(explorer);
    const [expand, setExpand] = useState(false)
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    })

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();
        setExpand(!expand)
        setShowInput({
            visible: true,
            isFolder
        })
    }

    const addNewFolder = (e) => {
        if(e.keyCode === 13 && e.target.value) {
            //add logic
            setShowInput({...showInput, visible: false})
        }
    }
    if(explorer.isFolder) {
        return (<div style={{marginTop:5}}>
            <div className="folder" onClick={() => setExpand(!expand)}>
                <span style={{fontWeight: 'bold'}}>ø</span>
                {explorer.name}
                <div>
                    <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
                    <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
                </div>
                </div>


                <div style={{ display: expand ? "block": "none", paddingLeft:25}}>
                    {
                        showInput.visible && (
                            <div className="inputContainer">
                                <span>{showInput.isFolder ? 'ø' : '¬'}</span>
                                <input 
                                    type="text" 
                                    autoFocus 
                                    onKeyDown={() => addNewFolder()}
                                    className="inputContainer__input"
                                    onBlur={() => setShowInput({...showInput, visible: false})}
                                />
                            </div>
                        )
                    }
                    {explorer.items.map((exp) => {
                        return <Folder key={exp.id} explorer={exp} />
                    })}
                </div>
        </div>)
    }
    else {
        return <span className="file"><span style={{fontWeight: 'bold'}}>¬</span> {explorer.name}</span>
    }
    
}

export default Folder