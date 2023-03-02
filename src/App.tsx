import React from 'react'

import MainEditor from './components/Layout/MainEditor'
import Sidebar from './components/Layout/Sidebar'
import ElementEditor from './components/Layout/ElementEditor'

function App() {
    return (
        <section className="">
            <section className="flex">
                <section className="w-2/12 pl-10 pr-5 bg-gray-300 min-h-screen">
                    <Sidebar />
                </section>

                <section className="w-8/12">
                    <MainEditor />
                </section>

                <section className="w-2/12">
                    <ElementEditor />
                </section>
            </section>
        </section>
    )
}

export default App
