import React from 'react'

import HeaderComponent from '../components/header'
import { FunctionalsContent } from '../context/context'

const Layout = ({children}) => {
  const {titleName}= React.useContext(FunctionalsContent)
    return (
        <div className="content">
      <HeaderComponent/>
        <div className="container">
         <div className="row">
           <div className="col-12">
           <h1 className="pb-5 display-3">{titleName}</h1>
           </div>
         </div>
       </div>
        {children}
        </div>
    )
}

export default Layout
