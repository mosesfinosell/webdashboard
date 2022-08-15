import React from 'react'

const RenderBar= ({isSelected,children }) => {
    if (isSelected) {
        return <>{children}</>
    }
    return null;
}


export default RenderBar