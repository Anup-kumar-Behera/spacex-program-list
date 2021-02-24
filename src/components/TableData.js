import React from 'react'
import {Link} from 'react-router-dom'

const TableData = (props) => {
    let {dataFromApi} = props
    return (
        <div className='table-responsive text-white'>
            <table className="table text-white" >
                        <tbody>
                        {dataFromApi.map((item, index) => (
                                <tr key={index}>
                                    <td className='td1'>
                                        <div className="card mb-0" >
                                            <div className="row g-0">
                                                <div className="d-flex col-md-4 justify-content-center">
                                                    <img src={item.links.mission_patch_small} alt={item.mission_name}/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body ">
                                                        <h5 className="card-title"><i>Mission-Name: </i><strong>{item.mission_name}</strong> </h5>
                                                        <p className="card-text"><strong>Launch-Year:</strong> {item.launch_year}  |   <strong>Flight_number:</strong> {item.flight_number} </p>
                                                        <p><strong>Rocket_name:</strong>  <i>{ item.rocket.rocket_name}</i>  | launch_success: {item.launch_success? <i>Success</i> : <i>Failure</i>}</p>
                                                        <p><strong>Launch_site:</strong>  <i>{ item.launch_site.site_name_long}</i> </p>
                                                        <p className="card-text">{item.details}</p>
                                                        <a href={item.links.wikipedia}>More</a>

                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </td>
                                </tr>
                        ))}
                        </tbody>
                    </table>
        </div>
    )
}
export default TableData