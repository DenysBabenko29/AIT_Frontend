import React from 'react'

const Friend: React.FC<{href: string, count: number}> = ({href, count}) => {
  return (
    <img src={href} alt={`friend${count}`} />
  )
}

export default Friend