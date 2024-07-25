import React from 'react'

const SelectCloudHeader = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-transparent w-screen fixed top-0">
    <div className="flex items-center">
      <img src="https://placehold.co/40x40?text=Logo" alt="NeuraBug Logo" className="mr-2" />
      <span className="text-xl font-bold text-zinc-900 ">NeuraBug</span>
    </div>
    <div className="flex items-center">
      <img src="https://placehold.co/40x40?text=Avatar" alt="User Avatar" className="rounded-full mr-2" />
      <span className="text-zinc-900 ">John Wick</span>
    </div>
  </header>
  )
}

export default SelectCloudHeader