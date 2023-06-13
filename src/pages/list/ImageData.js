import {useParams} from "react-router-dom"
// import {useEffect,useState} from "react"
import { imageCollection } from "../../imageCollection"
const ImageData=(id)=>{

        // const [collectionData, setCollectionData] = useState(null);
    // useEffect(()=>{
    //     fetch(`/api/image-collections/${id}`)
    //     .then((response)=>response.json())
    //     .then((data)=>setCollectionData(data))
    //     .catch((error)=>console.error(error));
    // },[id]);

    // if(!collectionData){
    //     return <div>Loading....</div>
    // }
    
    
    return(
        <>
 {imageCollection.map((collection,index) => (
        <div key={collection.id}>
          <h2>{collection.title}</h2>
          <img src={collection.img} alt={collection.title} />
          <p>Size: {collection.size}</p>
          <button>View Collection</button>
        </div>
      ))}
        </>
    )
}
export default ImageData;