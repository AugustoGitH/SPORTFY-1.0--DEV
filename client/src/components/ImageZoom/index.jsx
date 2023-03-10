import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import React, { useState, useCallback} from "react"

export default function MyImage({ ...rest}){
    const [isZoomed, setIsZoomed] = useState(false);

    const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
      }, [])

    return (
        <ControlledZoom style={{width: "100%", height: "100%"}} isZoomed={isZoomed} onZoomChange={handleZoomChange}>
            <img {...rest}></img>
        </ControlledZoom>
    );
}