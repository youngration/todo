import React from 'react'

export default ({ setFilter, flag, children }) => (
  <button
    onClick={setFilter}
    style={{
      color: flag ? '#cccccc' : '#000000'
    }}
  >
    {children}
  </button>
)