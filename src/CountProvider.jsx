import React from 'react'

export const CountContext = React.createContext()

export const CountProvider = ({ children }) => {
  const [count, setCount] = React.useState(0)
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  )
}
