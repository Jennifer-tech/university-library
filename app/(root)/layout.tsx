import Header from '@/components/header'
import React, { ReactNode } from 'react'

const Layout = ( {children}: {children: ReactNode}) => {
  return (
    <main className="root-container">
      <div className='mx-auto max-w-7xl border border-blue-400'>
        <Header /> 
        <div className='mt-20 pb-20'>{children}</div>
      </div>
    </main>
  )
}

export default Layout