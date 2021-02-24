import React, { Component } from 'react'
import TableData from './TableData'
import Base from './core/Base'
import axios from 'axios'

class Launch_year extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            dataFromApi : [],
            isLoaded: false,
            loading:false,
            year:'',
            message:''
        }
        this.cancel = ''
    }
    componentDidMount(){
        fetch(`https://api.spacexdata.com/v3/launches?limit=1000`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                dataFromApi:json,
            })
        });
    }
    onInputChange = (e) => {
        const year = e.target.value
        console.warn(year)
        this.setState({year, loading:true, message:''}, () => {
            this.onSearch(year)
        })
    }
    onSearch = (year) => {
        const searchUrl = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`
        if(this.cancel){
            this.cancel.cancel()
        }
        this.cancel = axios.CancelToken.source()
        axios.get(searchUrl, {
            cancelToken: this.cancel.token
        })
        .then(res => {
            this.setState({dataFromApi:res.data})
        })
        .catch(err => {
            if(axios.isCancel(err) || err){
                this.setState({
                    loading:false,
                    message:'failed to fetch the data'
                })
            }
        })
    }
    render() {
        let {isLoaded, dataFromApi, year} = this.state

        return (
            <Base title="Search Programs by Year">
                <div className="d-flex justify-content-center" style={{marginBottom:'30px'}}>
                    <label className="search-label" htmlFor="search-input">
                        <input
                            type='text'
                            value=''
                            name="year"
                            value={year}
                            style={{backgroundColor:'white', width:'400px'}}
                            id='search-input'
                            placeholder='Enter year to search'
                            className="rounded inp"
                            onChange={this.onInputChange}
                        />
                    </label>
                </div>
                
                <div>
                    {!isLoaded? (<div className="d-flex text-white justify-content-center">
                        <div className="spinner-border text-primary" role="status" style={{marginTop:'200px'}}>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>) :(
                        <div>
                             {dataFromApi? <TableData dataFromApi={dataFromApi} />: <h3></h3>}
                        </div>
                    )
                    }
                    
                </div>
            </Base>
        )
    }
}

export default Launch_year