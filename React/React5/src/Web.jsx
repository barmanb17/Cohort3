import React from 'react'
import Card from './components/Card'
import Contact from './components/Contact'
import About from './components/About'

const Web = () => {

    let arr = [3,4,5,3,6,4,6,7,3,4,6,3,5,4]
  return (
    <div >
        {
             arr.map((elem, index) => {
                return <Card key={ index}/>
            })
        }

    </div>
  )
}

export default Web