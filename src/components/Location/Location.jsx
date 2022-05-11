import './Location.scss'
import DeleteImg from '../../lib/image/delete.png'
import EditImg from '../../lib/image/edit.png'
import LocationImg from '../../lib/image/location.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Location = () => {
	const [show, setShow] = useState(false);
	const openModal = () => setShow(true);
	const closeModal = () => setShow(false);

	const [location,setLocation] = useState([])
	useEffect(() => {
      fetch('http://localhost:5000/address')
	  .then(res => res.json())
	  .then(data => setLocation(data))
	},[])

	const handlySubmit = e => {
		e.preventDefault();
		const {manzil,location,file,info} = e.target.elements
		console.log(manzil.value,location.value,file.value,info.value);
		if(manzil.value && location.value && info.value) {
			fetch('http://localhost:5000/newAddress',{
			method:'POST',
			header:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
                addressName:manzil.value,
				addressText:info.value,
				addressLoc:location.value,
				imageArr:file.value
			})
		})
		.then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err))
          alert('qo`shildi')
		}else{
			alert('malumotlar to`liq emas')
		}
	}
    return(
        <div className="location">
         <div className="container">
        <table className="table">
	<thead>
		<tr>
			<th>Manzil</th>	
			<th>Matn</th>
			<th>Location</th>
			<th></th>
			<th></th>
			<th></th>
		</tr>
	</thead>
	<tbody>
	{
		location && location.map((e,i) => (
			<tr key={i}>
			<td>{e.address_name}</td>
			<td>{e.address_text}</td>
			<td><Link to={e.address_loc}><button className="location-btn"><img src={LocationImg} alt="location" className="location-img" /></button></Link></td>
			<td></td>
			<td></td>
			<td>
               <div>
                    <button className='edit-btn'><img src={EditImg} alt="edit" /></button>
                    <button className='delete-btn'><img src={DeleteImg} alt="delete" /></button>
                </div>
                </td>
		</tr>
		))
	}
	</tbody>
</table>
        </div>
		{!show && <button className="add-btn" onClick={openModal}><i className="add-name">Qo'shish</i></button>}
		<form className={show ? "add-tech" : "hide"} onSubmit={handlySubmit} encType="multipart/form-data">
			<div className="add-tech-content">
				<div className="add-tech-left">
					<p className="add-tech-title">Qo'shish</p>
					<span className="add-tech-close" onClick={closeModal}>&times;</span>
					<label className="add-tech-label">Manzil</label>
					<input name='manzil' type="text" className="add-tech-input" />
					<label className="add-tech-label">Location</label>
					<input name='location' type="text" className="add-tech-input" />
					<div className="add-tech-switch">
					<label className="add-tech-check">Navinla</label>
					<input   className="form-check-input" defaultChecked={false}  type="checkbox" role="switch" />
					</div>
				</div>
				<div className="add-tech-right">
				    <label className="add-tech-label">Rasm</label>
					<input name='file' type="file" className="add-tech-input-img" multiple/>
					<label className="add-tech-label">Matn</label>
					<textarea name='info' type="text" className="add-tech-input" />
					<button  className="add-tech-btn"><i className="add-name">Qo'shish</i></button>
				</div>
			</div>
		</form>
        </div>
    )
}
export default Location;