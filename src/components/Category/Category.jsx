import './Category.scss'
import DeleteImg from '../../lib/image/delete.png'
import EditImg from '../../lib/image/edit.png'
import { useEffect, useState } from 'react'
const Category = () => {
    const [show, setShow] = useState(false);
    const [category,setCategory] = useState([])
	const openModal = () => setShow(true);
	const closeModal = () => setShow(false);
  useEffect(() => {
    fetch('https://matrasback.herokuapp.com/allCotegory')
    .then(res => res.json())
    .then(data => setCategory(data))
  },[])
     
    const handlyAdd = e => {
        e.preventDefault()
        const {name} = e.target.elements
        // console.log(name.value);
        if(name.value){
          fetch('https://matrasback.herokuapp.com/newCategories',{
            method:'POST',
            headers:{
              'Content-Type': 'application/json'
           },
           body:JSON.stringify({
              cotegory:name.value
           })
          })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err))
          alert('qo`shildi')
        }else{
          alert('name kiriting!')
        }
    }
    return(
        <div className="category">
        <div className="container">
        <table className="table">
	<thead>
		<tr>
			<th>Toifalar</th>	
			<th></th>
			<th></th>
			<th></th>
			<th></th>
			<th></th>
		</tr>
	</thead>
	<tbody>
	{
    category && category.map((e,i) => (
      <tr key={i}>
			<td>{e.cotegory}</td>
			<td></td>
			<td></td>
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
       {!show &&  <button className="add-btn"  onClick={openModal}><i className="add-name">Qo'shish</i></button>}
        <form className={show ? "add-modal" : "hide"} onSubmit={handlyAdd}>
          <div className="add-modal-content">
              <span className="add-modal-close" onClick={closeModal}>&times;</span>
              <div className="add-modal-name">Qo'shish</div>
              <label className='add-modal-label'>Kategoriya nomi</label>
              <input name='name' type="text" className="add-modal-input" placeholder='Category name'/>
               <div className="add-holat">
                <h6 className='add-holat-name'>Holat</h6>
              <input name='checkName' className="" type="checkbox"/>
            </div>
            <button type='submit' className="add-modal-btn"><span className="btn-name">Qo'shish</span></button>
          </div>
        </form>
       
        </div>
    )
}
export default Category;