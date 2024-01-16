import React from 'react'
import { BASE_URL } from '../../App'
import {FoodCard,Button} from './../../App.ts'

const SearchResult = ({data:foods}) => {

    //console.log(data);
  return (
    <>
     {foods?.map(({name,image,text,price})=> (<FoodCard key={name}>
        <div className="food_image">
            <img src={BASE_URL+ image} />  
        </div>
        <div className="food_info">
            <div className="info">
                <h3>{name}</h3>
                <p>{text}</p>
            </div>
            <button>${price.toFixed(2)}</button>
        </div>
        </FoodCard>))}
    </>
   

  )
}

export default SearchResult