import React from 'react'

export const ExampleComponent = ({ text }) => {
  return (
    <div
      style={{
        fontWeight: 'bold',
        fontSize: 4,
        color: 'primary'
      }}
    >
      Example Component: {text}
    </div>
  )
}
