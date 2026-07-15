import React from 'react'

const Skills = (props) => {
  return (
    <div>
        {props.skills.map((item, index) => (
            <h3>{index + 1}.</h3>
        ))}
    </div>
  )
}

export default Skills