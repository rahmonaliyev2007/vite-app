import React from 'react'

function List({ items }) {
    return (
        <div>
            {items.map((item, index) => {
                return (
                    <div key={index} className='card'>{item}</div>
                )
            })}
        </div>
    )
}

export default List