import React from 'react'
import { Header } from './Header'

export const Main = ({ children }) => {
    return (
        // <section className="flex max-h-screen min-h-screen overflow-hidden p-8 z-50">
        //     <section className="flex h-screen w-full flex-col">
        //         <main className="h-full pb-24">{children}</main>
        //     </section>
        // </section>
        <section className="flex w-full overflow-hidden">
        <div className="relative flex h-screen w-full flex-col overflow-hidden bg-bgColor">
          <Header />
          <div className="flex w-full flex-col p-6 overflow-y-scroll scrollbar-hide">{children}</div>
        </div>
      </section>
    )
}
