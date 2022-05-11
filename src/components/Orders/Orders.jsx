import { useEffect, useState } from 'react';
import './Orders.scss'
const Orders = () => {
	const [order,setOrder] = useState([])
	// const [isfalse,setIsfalse] = useState()
	useEffect(() => {
		fetch('http://localhost:5000/order')
		.then(res => res.json())
		.then(data => setOrder(data))
	},[])
	 
	
             const handlyChange =e => {

				fetch('http://localhost:5000/updateOrder',{
					method:"PUT",
					headers:{
						'Content-Type': 'application/json'
					 },
					 body:JSON.stringify({
						 id:e.target.name
					 })
				})
				.then(res => res.json())
				.then(data => console.log(data))
				
			 }
    return(
        <div className="orders">
          <div className="container">
				<table className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Ismi</th>
						<th>telefon raqami</th>
						<th>Maxsulot nomlari</th>
						<th>Miqdor</th>
						<th>Qatra aloqa</th>
					</tr>
				</thead>
				<tbody>
         {
			 order && order.map((e,i) => (
					<tr key={i}>
						<td>{e.order_id}</td>
						<td>{e.order_name}</td>
						<td>{e.order_phonenumb}</td>
						<td>
						   {e.product_name}
						</td>
						<td>{e.order_quantity}</td>
						<td><div className="form-switch">
			  <input  name={e.order_id}  className="form-check-input" defaultChecked={e.is_call} type="checkbox" role="switch" onClick={handlyChange}/>
			 
			</div></td>
					</tr>
				))
			}
				</tbody>
			</table>
          </div>
        </div>
    )
}
export default Orders;