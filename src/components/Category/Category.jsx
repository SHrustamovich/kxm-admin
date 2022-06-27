import './Category.scss'
// import DeleteImg from '../../lib/image/delete.png'
// import Check from '../../lib/image/check.png'
import {storage} from '../../lib/Firebase/Firebase'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from 'react'
import axios from 'axios'
const Category = () => {
  const [progress,setProgress] = useState(0)
  const [url,setUrl] = useState("")
    const [show, setShow] = useState(false);
    const [category,setCategory] = useState([])
	const openModal = () => setShow(true);
	const closeModal = () => setShow(false);
  // console.log(url.value);
  useEffect(() => {
    fetch('http://localhost:9000/courses')
    .then(res => res.json())
    .then(data => setCategory(data))
  },[])

  // const handlyChangee = (e) => {
  //   e.preventDefault()
   
  // }

  
     
    const handlyAdd = e => {
        e.preventDefault()
        const {nameCourse,short_info,more_info} = e.target.elements
        // const image = e.target[2].files[0]
        // console.log(image);
        console.log(nameCourse.value,short_info.value,more_info.value,url);
        // var formData = new FormData();
        // formData.append('course_name',nameCourse.value)
        // formData.append('course_short',short_info.value)
        // formData.append('course_more',more_info.value)
        // formData.append('course_pics',url.toString())
        // axios.post('http://localhost:9000/createcourse',formData,{
        //   // "type":"formData",
        //   "Content-Type":"application/json",
        //   "Access-Control-Allow-Origin": "*",
        // })

        axios({
          method: "post",
          url: 'http://localhost:9000/createcourse',
          timeout: 1000 * 5, // Wait for 5 seconds
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            course_name:nameCourse.value,
            course_short:short_info.value,
            course_more:more_info.value,
            course_pics:url
          }
        })
          .then(res =>{
            alert('Create new course')
          })
          .catch(error => {
            console.log(error);
        });
        nameCourse.value = [];
        short_info.value = [];
        more_info.value = [];
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
      // this.stopPropagation();
      const file = e.target.files[0]
      uploadFiles(file);
      // console.log(file);

    }

    const handlyChange = e => {
      // e.preventDefault()
      // console.log('ok');
      fetch('http://localhost:9000/changecourse',{
        method:"PUT",
        headers:{
          'Content-Type': 'application/json'
         },
         body:JSON.stringify({
           course_id:e.target.name
         })
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
    return(
        <div className="category">
        <div className="container">
          <h1 className='yon'>Yo`nalishlar</h1>
        <table className="table">
	<thead>
		<tr>
			<th>ID</th>	
			<th>Yo`nalish</th>
			<th>Tasnifi</th>
			<th>Yo`nalish haqida</th>
			<th>Yo`nalish rasm</th>
			<th>Edit</th>
			<th>Delete</th>
		</tr>
	</thead>
	<tbody>
	{
    category && category.map((e,i) => (
      <tr key={i}>
			<td>{e.course_id}</td>
			<td>{e.course_name}</td>
			<td>{e.course_short}</td>
			<td>{e.course_more}</td>
    <td><img src={e.course_pics} alt="imageas" /></td>
			<td>
        <div>
                    <button className='edit-btn'>Edit</button>
        </div>
      </td>
			<td>
     	<div className="form-switch">
                <input name={e.course_id}  className="form-check-input" defaultChecked={e.is_deleted}  type="checkbox" role="switch" onClick={handlyChange} />
                   </div>
                </td>
		</tr>
    ))
  }
	</tbody>
</table>
        </div>
       {!show &&  <button className="add-btn"  onClick={openModal}><i className="add-name">Qo'shish</i></button>}
        <form className={show ? "add-modal" : "hide"} onSubmit={handlyAdd} encType='multipart/form-data'>
          <div className="add-modal-content">
              <span className="add-modal-close" onClick={closeModal}>&times;</span>
              <div className="add-modal-name">Qo'shish</div>
             <div className="add-modal-all">
             <div className='add-modal-left'>
              <label className='add-modal-label'>Yo`nalish nomi</label>
              <input name='nameCourse' type="text" className="add-modal-input" placeholder='Course name'/>
              <label className='add-modal-label'>Yo`nalish tasnifi</label>
               <textarea name="short_info" cols="50" rows="7" className='add-modal-short'></textarea>
              <label className='add-modal-label'>Yo`nalish rasmi</label>
              <input name='image' type="file" className="add-modal-img" onChange={handlyChangee} />
              {/* <form action='#' onSubmit={handlyChangee}>
              <button className="add-modal-img-btn" type='submit'><img src={Check} alt="" className="img" width={20}/></button>
              </form> */}
              <h2 className="uploade">{progress}%</h2>
              </div>
              <div className="add-modal-right">
              <label className='add-modal-label'>Yo`nalish haqida</label>
               <textarea name="more_info" cols="40" rows="16" className='add-modal-more'></textarea>
                
            <button type='submit' className="add-modal-btn"><span className="btn-name">Qo'shish</span></button>
              </div>
             </div>
          </div>
        </form>
       
        </div>
    )
}
export default Category;