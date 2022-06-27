import './Technology.scss'
// import DeleteImg from '../../lib/image/delete.png'
// import EditImg from '../../lib/image/edit.png'
import {storage} from '../../lib/Firebase/Firebase'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import { Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
const Technology = () => {
	const [tech, setTech] = useState([]);
	const [show, setShow] = useState(false);
	const [progress,setProgress] = useState(0)
	const [url,setUrl] = useState("")
	const openModal = () => setShow(true);
	const closeModal = () => setShow(false);

	useEffect(() => {
		fetch('http://localhost:9000/allnews')
		.then(res => res.json())
		.then(data => setTech(data))
		return;
	},[])

	const handlySubmit = e => {
		e.preventDefault()
		const {name,nametext} = e.target.elements
		axios({
			method: "post",
			url: 'http://localhost:9000/news',
			timeout: 1000 * 5, // Wait for 5 seconds
			headers: {
			  "Content-Type": "application/json"
			},
			data: {
				news_title:name.value,
				news_body:nametext.value,
			    news_pics:url
			}
		  })
			.then(res =>{
			  alert('Create new news')
			})
			.catch(error => {
			  console.log(error);
		  });
		  name.value = [];
		  nametext.value = [];
	}

	const uploadFiles = (file) => {
		//
		if (!file) return;
		const sotrageRef = ref(storage, `files/${file.name}`);
		const uploadTask = uploadBytesResumable(sotrageRef, file);
	
		uploadTask.on(
		  "state_changed",
		  (snapshot) => {
			const prog = Math.round(
			  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
			);
			setProgress(prog);
		  },
		  (error) => console.log(error),
		  () => {
			getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
			  setUrl(downloadURL)
			  console.log(downloadURL);
			});
		  }
		);
	  };
	  const handlyChangee = e => {
		e.preventDefault()
		const file = e.target.files[0]
		uploadFiles(file);
	  }

	const handlyChange = e => {
		// e.preventDefault()
        fetch('http://localhost:9000/changedel',{
			method:"PUT",
			headers:{
				'Content-Type': 'application/json'
			 },
			 body:JSON.stringify({
				news_id:e.target.name
			 })
		})
		.then(res => res.json())
		.then(data => console.log(data))
	}
    return(
        <div className="technology">
         <div className="container">
        <table className="table">
	<thead>
		<tr>
			<th>Yangilik</th>	
			<th>Yangilik haqida</th>
			<th>Rasm</th>
			<th>Vaqt</th>
			<th></th>
			<th></th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		{
			tech && tech.map((e,i) => (
				<tr key={i}>
			<td>{e.news_title}</td>
			<td>{e.news_body}</td>
			<td><img src={e.news_pics} alt="news pics" width={390} height={390}/></td>
			<td></td>
				<td>{e.news_at}</td>
			<td>
                    <button className='edit-btn'>edit</button>
			</td>
			<td>
               <div>
                    <button className='delete-btn'>
						<div className="form-switch">
                <input name={e.news_id}  className="form-check-input" defaultChecked={e.is_deleted}  type="checkbox" role="switch" onClick={handlyChange} />
                   </div></button>
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
					<p className="add-tech-title">Qo'shish(News)</p>
					<span className="add-tech-close" onClick={closeModal}>&times;</span>
					<label className="add-tech-label">Yangilik sarlovhasi</label>
					<input name='name' type="text" className="add-tech-input" placeholder='news title'/>
					{/* <label className="add-tech-label">Rasm</label> */}
					<input name='file' type="file" className="add-tech-input-img" onChange={handlyChangee}/>
					<h2>{progress}%</h2>
					<div className="add-tech-switch">
					</div>
				</div>
				<div className="add-tech-right">
				  
					<label className="add-tech-label">Yangilik haqida:</label>
					{/* <input name='pics' type="text" className="add-tech-input" /> */}
					<textarea name="nametext" cols="50" rows="9" className='add-modal-news' placeholder='news body'></textarea>
					<button type='submit' className="add-tech-btn"><i className="add-name">Qo'shish</i></button>
				</div>
			</div>
		</form>
        </div>
    )
}
export default Technology;