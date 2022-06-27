import './Product.scss'
// import DeleteImg from '../../lib/image/delete.png'
// import EditImg from '../../lib/image/edit.png'
// import Vector from '../../lib/image/Vector.png'
// import SwitchModel from '../Switch/Switch'
import {storage} from '../../lib/Firebase/Firebase'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from 'react'
import axios from 'axios';
const Birthday = () => {
	const [show, setShow] = useState(false);
	const [products,setProducts] = useState([])
	// const [category,setCategory] = useState([])
	const [urlBirthday,setUrlBirthday] = useState("")
	const [progress,setProgress] = useState(0)
	const openModal = () => setShow(true);
	const closeModal = () => setShow(false);
	useEffect(() => {
		fetch('http://localhost:9000/allbirthday')
		.then(res => res.json())
		.then(data => setProducts(data))
		return ()=>{}
	},[])
	const handlyAddBirthday = e => {
		e.preventDefault()
		const {lavozim,name,tabrik} = e.target.elements
	 
		axios({
			method: "post",
			url: 'http://localhost:9000/createbirthday',
			timeout: 1000 * 5, // Wait for 5 seconds
			headers: {
			  "Content-Type": "application/json"
			},
			data: {
				birthday_name:lavozim.value,
				birthday_congrtulation:tabrik.value,
				birthday_who:name.value,
				birthday_pics:urlBirthday
			}
		  })
		.then(res => {
			alert('Create birthday')
		})
		.catch(error => {
            console.log(error);
        });
		lavozim.value = []
		tabrik.value = []
		name.value = []
	}
	const handlyChange =e => {

		fetch('http://localhost:9000/udelete',{
			method:"PUT",
			headers:{
				'Content-Type': 'application/json'
			 },
			 body:JSON.stringify({
				birthday_id:e.target.name
			 })
		})
		.then(res => res.json())
		.then(data => console.log(data))
		
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
			  setUrlBirthday(downloadURL)
			//   console.log(downloadURL);
			});
		  }
		);
	  };

	  const handlyCh = e => {
		// e.preventDefault()
		// this.stopPropagation();
		const file = e.target.files[0]
		uploadFiles(file);
		// console.log(file);
  
	  }
    return(
        <div className="product">
         <div className="container">
        <table className="table">
	<thead>
		<tr>
			<th>ID</th>  
			<th>Lavozim</th>	
			<th>Tabrik</th>
			<th>Ismi</th>
			<th>Rasm</th>
			<th>Sana</th>
			<th></th>
			<th></th>
		</tr>
	</thead>
	<tbody>
	{
		products && products.map((e,i) => (
			<tr key={i}>
			<td>{e.birthday_id}</td>
			<td>{e.birthday_name}</td>
			<td>{e.birthday_congrtulation}</td>
			<td>{e.birthday_who}</td>
			<td><img src={e.birthday_pics} alt="birthday" width={170} /></td>
			<td>{e.birthday_at}</td>
			<td>
			<div className="form-switch">
                <input name={e.birthday_id}  className="form-check-input" defaultChecked={e.is_deleted}  type="checkbox" role="switch" onClick={handlyChange} />
                   </div>
            </td>
			<td>
               <div>
                    <button className='edit-btn'>Edit</button>
                </div>
                </td>
		</tr>
		))
	}
	</tbody>
</table>
        </div>
        {!show && <button className="add-btn"  onClick={openModal}><i className="add-name">Qo'shish</i></button>}
	     <form  className={show ? "add-bir" : "hide"} onSubmit={handlyAddBirthday} encType="multipart/form-data">
			 <div className="add-bir-content">
				 <span className="add-bir-close" onClick={closeModal}>&times;</span>
				 <p className="add-bir-title">Qo'shish(Birthday)</p>
			     <div className="add-modal-all">
             <div className='add-modal-left'>
              <label className='add-modal-label'>Lavozim</label>
              <input name='lavozim' type="text" className="add-modal-input" placeholder='Lavozim'/>
              <label className='add-modal-label'>Ism Familya</label>
               <textarea name="name" cols="50" rows="7" className='add-modal-short'></textarea>
              <label className='add-modal-label'>Xodim rasmi</label>
              <input name='image' type="file" className="add-modal-img" onChange={handlyCh}/>
			  <h2>{progress}%</h2>
              {/* <form  onSubmit={handlyChangee}>
              <button className="add-modal-img-btn" type='submit'><img src={Check} alt="" className="img" width={20}/></button>
              </form> */}
              {/* <h2 className="uploade">{progress}%</h2> */}
              </div>
              <div className="add-modal-right">
              <label className='add-modal-label'>Tabrik</label>
               <textarea name="tabrik" cols="40" rows="13" className='add-modal-more'></textarea>
                
            <button type='submit' className="add-modal-btn"><span className="btn-name">Qo'shish</span></button>
              </div>
             </div>
				   {/* <input type="text" className="add-bir-input" /> */}
						   {/* <button className="add-tech-btn"><i className="add-name">Qo'shish</i></button> */}
			  </div>
		 </form>
        </div>
    )
}
export default Birthday;