import React, { Component } from 'react'
import Base from './core/Base'
import TableData from './TableData'
 
class Successful_launch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataFromApi : [],
            isLoaded: false,
        }
    }
    componentDidMount(){
        fetch('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                dataFromApi:json,
            })
        });
    }
     render() {
        let {isLoaded, dataFromApi} = this.state

         return (
            <Base title="All Successful Launches by SpaceX">
                <div>
                    {console.log(dataFromApi)}
                    {!isLoaded? (<div className="d-flex text-white justify-content-center">
                        <div className="spinner-border text-primary" role="status" style={{marginTop:'200px'}}>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>) :
                        <TableData dataFromApi={dataFromApi}/>
                    }
                </div>
            </Base>
         )
     }
 }
 
export default Successful_launch