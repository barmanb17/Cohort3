import React from 'react'

const Fruits = () => {
    const fruits = [
        "Apple",
        "Banana",
        "Orange",
        "Mango",
        "Pineapple"
    ]
    return (
        <div>
            {
fruits.map((item, index) => (
    <h1 key={index}>{item}</h1>
))
            }
        </div>
    )
}

export default Fruits