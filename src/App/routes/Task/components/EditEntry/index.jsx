import React from 'react'

export default function EditEntry({
    state
}) {
    if(state == "text") {
        return <div style={{
            width: "200px",
            height: "200px",
            background: "red",
        }}>
        </div>
    }
    if(state == "random") {
        return <div style={{
            width: "200px",
            height: "200px",
            background: "blue",
        }}>
        </div>
    }
    return null;
}