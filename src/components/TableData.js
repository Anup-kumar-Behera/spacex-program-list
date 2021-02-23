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
                                        <div className="card mb-0">
                                            <div className="row g-0">
                                                <div className="d-flex col-md-4 justify-content-center">
                                                    <img src={item.links.mission_patch_small} alt={item.mission_name}/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body ">
                                                        <h5 className="card-title"><i>Mission-Name: </i><strong>{item.mission_name}</strong></h5>
                                                        <p><strong>Flight_number: {item.flight_number} </strong></p>
                                                        <p className="card-text">{item.details}</p>
                                                        <p className="card-text"><small >Launch-Year: {item.launch_year}</small></p>
                                                        {/* <a className="waves-effect waves-light btn-small">More</a> */}
                                                        {/* <Link to={`/moreInfo/mission_name=${item.mission_name}`}>More</Link> */}
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