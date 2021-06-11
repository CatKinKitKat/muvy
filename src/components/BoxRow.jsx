import React from 'react'
import Box from './boxes/Box'

const BoxRow = () => {
  return (
    <>
      <section className="p-5">
        <div className="container">
          <div className="row text-center g-4">
            <Box text="Test" />
          </div>
        </div>
      </section>
    </>
  )
}

export default BoxRow
