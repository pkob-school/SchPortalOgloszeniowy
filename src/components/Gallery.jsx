import { useState } from 'react';

function Galeria() {
    const [images, setImages] = useState([])
    const [imageSizes, setImageSizes]= useState([]);
    for (let i = 0; i < 5; i++) {
        let imgWidth = Number.parseInt(Math.random() * 400);
        let imgHeight = Number.parseInt(Math.random() * 400);
        images.push(`https://picsum.photos/${imgWidth}/${imgHeight}`);
        imageSizes.push({x: imgWidth, y: imgHeight});
    }

    return (
        <div id="imgContainer" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {images.map((image, index)=>(
            <img src={image} key={index} height={imageSizes[index].y} width={imageSizes[index].x} style={{borderRadius: "5px", flexBasis: "30%", boxShadow: "10px 10px 5px lightblue"}}/>
            ))}
        </div>
    )
}
export default Galeria;