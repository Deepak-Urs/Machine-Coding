import { useState } from "react";

const Folder = ({ explorer }) => {
    const [expand, setExpand] = useState(false)
    console.log('console.log(explorerData);', explorer);
    
    if(explorer.isFolder) {
        return (
            <div style={{marginTop: 5}}>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span>🗂 {explorer.name}</span>
                </div>
    
                {expand && <div style={{paddingLeft: 25}}>
                    {explorer.items.map(exp => {
                        return (
                            <span>{explorer.isFolder ? <span>🗂</span> : <span>📄</span>}{exp.name}</span>
                        )
                    }
                    )}
                </div>}
            </div>
        )
    } else {
        return (<span className="file">📄 {explorer.name}</span>)
    }
    
}

export default Folder
