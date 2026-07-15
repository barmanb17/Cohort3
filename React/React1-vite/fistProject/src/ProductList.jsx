import React from 'react'

const ProductList = (props) => {
  return (
    <div>
        {props.products.map((item,index)=> (
            <h3 key={item.id}>{item.title} {item.price}</h3>
        ))}
    </div>
  )
}

export default ProductList