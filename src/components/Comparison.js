import React,{useContext} from 'react'
import { MainContext } from "../context/Context";



const Comparison = ({id}) => {
    const { likes } = useContext(MainContext);
    
    return (

        <div>
            
            {
                likes.map((like) => {
                    return (
                        <li>{like}</li>
                    )
                })
            }
        
        
        </div>
    )
}

export default Comparison
