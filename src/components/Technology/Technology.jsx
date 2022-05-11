import './Technology.scss'
import DeleteImg from '../../lib/image/delete.png'
import EditImg from '../../lib/image/edit.png'
// import { Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
const Technology = () => {
	const [tech, setTech] = useState([]);
	const [show, setShow] = useState(false);
	const openModal = () => setShow(true);
	const closeModal = () => setShow(false);

	useEffect(() => {
		fetch('http://localhost:5000/technologies')
		.then(res => res.json())
		.then(data => setTech(data))
		return;
	},[])

	const handlySubmit = e => {
		e.preventDefault()
		const {name,info,pics} = e.target.elements
		console.log(name.value,info.value,pics.value);
		alert('qo`shildi')
		fetch('http://localhost:5000/newtechnologie',{
			method:'POST',
			headers:{
				'Content-Type': 'application/json'
			 },
			 body:JSON.stringify({
				technologie_name:name.value,
				technologie_title:info.value,
				technologie_video:pics.value
			 })

		})
	}
	
    return(
        <div className="technology">
         <div className="container">
        <table className="table">
	<thead>
		<tr>
			<th>Nomlari</th>	
			<th>Matn</th>
			<th>Video</th>
			<th></th>
			<th></th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		{
			tech && tech.map((e,i) => (
				<tr key={i}>
			<td>{e.technologie_name}</td>
			<td>{e.technologie_title}</td>
			<td><a href={e.technologie_video}>{e.technologie_video}</a></td>
			<td></td>
			<td>
                    <button className='edit-btn'><img src={EditImg} alt="edit" /></button>
			</td>
			<td>
               <div>
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
		<form className={show ? "add-tech" : "hide"} onSubmit={handlySubmit}>
			<div className="add-tech-content">
				<div className="add-tech-left">
					<p className="add-tech-title">Qo'shish</p>
					<span className="add-tech-close" onClick={closeModal}>&times;</span>
					<label className="add-tech-label">Nomi</label>
					<input name='name' type="text" className="add-tech-input" />
					<label className="add-tech-label">Nomi</label>
					<input name='info' type="text" className="add-tech-input" />
					<div className="add-tech-switch">
					<label className="add-tech-check">Navinla</label>
					<input   className="form-check-input" defaultChecked={false}  type="checkbox" role="switch" />
					</div>
				</div>
				<div className="add-tech-right">
				    <label className="add-tech-label">Rasm</label>
					<input name='file' type="file" className="add-tech-input-img" multiple/>
					<label className="add-tech-label">Video</label>
					<input name='pics' type="text" className="add-tech-input" />
					<button type='submit' className="add-tech-btn"><i className="add-name">Qo'shish</i></button>
				</div>
			</div>
		</form>
        </div>
    )
}
export default Technology;