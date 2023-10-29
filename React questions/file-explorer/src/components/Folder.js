import { useState } from "react";

function Folder({ explorer }) {
    console.log(explorer);
    const [expand, setExpand] = useState(false)

    if(explorer.isFolder) {
        return (<div style={{marginTop:5}}>
            <div className="folder" onClick={() => setExpand(!expand)}>
                <span style={{fontWeight: 'bold'}}>ø</span>{explorer.name}</div>
            
            <div style={{ display: expand ? "block": "none", paddingLeft:25}}>{explorer.items.map((exp) => {
                return <Folder key={exp.id} explorer={exp} />
            })}</div>
        </div>)
    }
    else {
        return <span className="file"><span style={{fontWeight: 'bold'}}>¬</span> {explorer.name}</span>
    }
    
}

export default Folder