import React from 'react'
import LinksContainer from '../components/links'

const HomePage = () => {
    return (
        <div className="home-menu">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card bg-light">
                    <div className="card-header">
                       <h5 className="text-center">
                       Menu del home
                       </h5>
                    </div>
                <div className="card-body">
                <LinksContainer classList="list-group" classChildren="list-group-item list-group-item-action" />
                </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
