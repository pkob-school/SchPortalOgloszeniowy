import { useState } from 'react';

function Galeria() {
    const [images, setImages] = useState([""])
    for (let i = 0; i < 10; i++) {
        setImages([...images, "https://www.lorem.picsum/200/200"]);
    }
    
    return (
        <div id="imgContainer" style={{flex: 1}}>
            {images.map((image)=>(
            <img src={image}/>
            ))}
        </div>
    )
}
export default Galeria;