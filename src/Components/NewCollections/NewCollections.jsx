import React from "react";
import new_collection from '../Assets/new_collections'
import './NewCollections.css'
import Item from "../Item/Item";

const NewCollections = () => {
    return <div className="new-collections">
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="collections">
         {
            new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old={item.old}  />
            })
         }
        </div>
    </div>;
};

export default NewCollections;
