import './Product.scss'
import DeleteImg from '../../lib/image/delete.png'
import EditImg from '../../lib/image/edit.png'
import Vector from '../../lib/image/Vector.png'
import SwitchModel from '../Switch/Switch'
import { useEffect, useState } from 'react'
const Product = () => {
	const [show, setShow] = useState(false);
	const [products,setProducts] = useState([])
	const [category,setCategory] = useState([])
	const openModal = () => setShow(true);
	const closeModal = () => setShow(false);
	useEffect(() => {
		fetch('http://localhost:5000/product')
		.then(res => res.json())
		.then(data => setProducts(data))
		return ()=>{}
	},[])
	useEffect(() => {
		fetch('http://localhost:5000/allCotegory')
		.then(res => res.json())
		.then(data => setCategory(data))
		return ()=>{}
	},[])

	const handlyAddProduct = e => {
		e.preventDefault()
		const {toifa,tovar,narx,yuklama,razmer,kafolat,sigim,aksiya,info} = e.target.elements
		// const {rasm} = e.target.files;
		const rasm = document.querySelector('.add-product-input').files;
		console.log(rasm);
		const data = new FormData();

		data.append('files',rasm);
		

		

		fetch('http://localhost:5000/newProduct', {
			method:'POST',
			headers:{
				'Content-Type': 'application/json',
			 },
			 files:rasm.value,
			 body:JSON.stringify({
				productName:tovar.value,
				productPrice:narx.value,
				productWight:yuklama.value,
				productSize:razmer.value,
				productWarranty:kafolat.value,
				productSuitable:sigim.value,
				productPriceAksiya:aksiya.value,
				productText:info.value,
				cotegoryId:toifa.value,
			 })
		})
		.then(res => res.json())
		.then(data => console.log(data))
	}
	const handlyChange =e => {

		fetch('http://localhost:5000/udateActiveProduct',{
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
        <div className="product">
         <div className="container">
        <table className="table">
	<thead>
		<tr>
			<th>Maxsulot nomlari</th>	
			<th>Toifalar</th>
			<th>Narxi</th>
			<th>Yuklama</th>
			<th>Razmeri</th>
			<th>Status</th>  
			<th></th>
		</tr>
	</thead>
	<tbody>
	{
		products && products.map((e,i) => (
			<tr key={i}>
			<td>{e.product_name}</td>
			<td>{e.cotegory_id}</td>
			<td>{e.product_price}</td>
			<td>{e.product_weight}</td>
			<td>{e.product_sice}</td>
			<td>
			<div className="form-switch">
                <input name={e.product_id}  className="form-check-input" defaultChecked={e.is_active}  type="checkbox" role="switch" onClick={handlyChange} />
                   </div>
            </td>
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
        {!show && <button className="add-btn"  onClick={openModal}><i className="add-name">Qo'shish</i></button>}
	     <form  className={show ? "add-product" : "hide"} onSubmit={handlyAddProduct} encType="multipart/form-data">
			 <div className="add-product-content">
				 <span className="add-product-close" onClick={closeModal}>&times;</span>
				 <p className="add-product-title">Qo'shish</p>
				 <div className="add-product-column">
					 <div className="add-product-one">
						 <label className="add-product-label">
							 <img src={Vector} alt="sa" className='add-product-img' width={54}/>
							 <input name='rasm'   type="file" className="add-product-input" multiple/>
						 </label>
					 </div>
					 <div className="add-product-two">
						  <label className="add-label">Toifalar</label>
						  <select name='toifa'>
                        {
							category && category.map((e,i) => (
									<option key={i} value={e.cotegory_id}>{e.cotegory}</option>
									))
								}                   
								</select>
						  <label className="add-label">Tovar nomi</label>
                          <input name='tovar' type="text" className="add-input" placeholder='masalan: Lux Soft Memory'/>                        
						  <label className="add-label">Narxi</label>
                          <input name='narx' type="text" className="add-input" placeholder='masalan: 20 000'/>                        
						  <label className="add-label">Yuklama</label>
                          <input name='yuklama' type="text" className="add-input" placeholder='masalan: 200 kg'/>                        
					 </div>
					 <div className="add-product-three">
					      <label className="add-label">Razmeri</label>
                          <input name='razmer' type="text" className="add-input" placeholder='masalan: 200 x 140 x 40'/>                        
						  <label className="add-label">Kafolat</label>
                          <input name='kafolat' type="text" className="add-input" placeholder='masalan: 1 yil'/>                        
						  <label className="add-label">Sig'm</label>
                          <input name='sigim' type="text" className="add-input" placeholder='masalan: 2'/>  
						  <label className="add-label">Aksiya Narxi</label>
                          <input name='aksiya' type="text" className="add-input" placeholder='masalan: 1 200 000'/>  
					 </div>
					 <div className="add-product-four">
						  <label className="add-label">Aksiya Narxi</label>
                          <textarea name="info" className="add-area" placeholder='info...'></textarea>
						   <div className="add-product-switch">
							   <div className="add-product-switch-name">Navinla</div>
							    <div className="add-s"><SwitchModel/></div>
						   </div>
						   <div className="add-product-switch">
							   <div className="add-product-switch-name">Active  </div>
							   <div className="add-s"><SwitchModel/></div>
						   </div>
						   <button className="add-tech-btn"><i className="add-name">Qo'shish</i></button>
					 </div>
				 </div>
			 </div>
		 </form>
        </div>
    )
}
export default Product;