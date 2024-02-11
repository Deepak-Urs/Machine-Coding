import { useState } from "react";

const Folder = ({ explorer }) => {
    const [expand, setExpand] = useState(false)
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    })

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true)

        setShowInput({
            visible: true,
            isFolder
        })
    }

    const onAddFolder = (e) => {
        if(e.keyCode === 13 && e.target.value) {
            setShowInput({...showInput, visible: false});
        }
    }


    if (explorer.isFolder) {
        return (
            <div style={{ marginTop: 5 }}>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span>🗂 {explorer.name}</span>

                    <div>
                        <button title="Add new Folder" onClick={(e) => handleNewFolder(e, true)}>🗂 +</button>
                        <button title="Add new File" onClick={(e) => handleNewFolder(e, false)}>📄 +</button>
                    </div>
                </div>

                <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                    {
                        showInput.visible && (<div>
                            <span>{showInput.isFolder ? "🗂 " : "📄"}</span>
                            <input type="text" className="inputContainer__input"
                                autoFocus
                                onBlur={() => setShowInput({ ...showInput, visible: false })}
                                onKeyDown={onAddFolder}
                            />
                        </div>)
                    }
                    {explorer.items.map(exp => {
                        return (
                            <Folder key={exp.id} explorer={exp} />
                        )
                    }
                    )}
                </div>
            </div>
        )
    } else {
        return (<span className="file">📄 {explorer.name}</span>)
    }

}

export default Folder
