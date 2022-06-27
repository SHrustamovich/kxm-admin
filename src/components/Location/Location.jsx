import './Location.scss'
import { useEffect, useState } from 'react'
const Location = () => {
	const [location,setLocation] = useState([])
	useEffect(() => {
      fetch('http://localhost:9000/network')
	  .then(res => res.json())
	  .then(data => setLocation(data))
	},[])

	
    return(
        <div className="location">
         <div className="container">
        <table className="table">
	<thead>
		<tr>
			<th>Manzil</th>	
			<th>E-mail</th>
			<th>Telegram</th>
			<th>Phone</th>
			<th></th>
			<th></th>
		</tr>
	</thead>
	<tbody>
	{
		location && location.map((e,i) => (
			<tr key={i}>
			<td>{e.location_name}</td>
			<td>{e.email}</td>
			<td>{e.telegram}</td>
			<td>{e.phone}</td>
			<td></td>
			<td>
               <div>
                
                </div>
                </td>
		</tr>
		))
	}
	</tbody>
</table>
        </div>
	
        </div>
    )
}
export default Location;