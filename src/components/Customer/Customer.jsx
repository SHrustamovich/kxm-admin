import './Customer.scss'
import DeleteImg from '../../lib/image/delete.png'
import { useEffect, useState } from 'react'
import DeleteData from '../DeleteDate/DeleteData'
import Moment from 'react-moment';
const Customer = () => {
	const [show, setShow] = useState(false);
	const openModal = () => setShow(true);
	const closeModal = () => setShow(false);
    const [customer,setCustomer] = useState([])
	useEffect(() => {
		fetch('https://matrasback.herokuapp.com/customer')
		.then(res => res.json())
		.then(data => setCustomer(data))
	})
	const handlyChange =e => {

		fetch('https://matrasback.herokuapp.com/updateCustomer',{
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
        <div className="customer">
        <div className="container">
        <table className="table">
	<thead>
		<tr>
			<th>ID</th>
			<th>Sana</th>
			<th>Telefon raqami</th>
			<th>Qatra aloqa</th>
			<th></th>
		</tr>
	</thead>
	<tbody>
	{
		customer && customer.map((e,i) => (
			<tr key={i}>
			<td>{e.customer_id}</td>
			<td><Moment element="span">
				{e.created_on}
            </Moment>
				</td>
			<td>{e.customer_number}</td>
			<td>
				<div className="form-switch">
  <input name={e.customer_id}  className="form-check-input" defaultChecked={e.customer_iscalled}  type="checkbox" role="switch" onClick={handlyChange} />
</div>
</td>
			<td>
				{!show && <button className='delete-btn' onClick={openModal}><img src={DeleteImg} alt="" /></button>}
			</td>
		</tr>
		))
	}
	</tbody>
</table>
        </div>
		<DeleteData closeModal={closeModal} show={show}/>
        </div>
    )
}
export default Customer;