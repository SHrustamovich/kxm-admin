import './DeleteData.scss'
const DeleteData = (child) => {
    const { show, closeModal} = child;
    return(
        <div className={show ? "delete-data" : "hide"}>
            <div className="delete-data-content">
                <p className="delete-data-name">Haqiqatdan ham o`chirmoqchimisiz?</p>
                <div className="delete-data-btn">
                    <button className="delete-data-no" onClick={closeModal}>YO'Q</button>
                    <button className="delete-data-yes" >HA</button>
                </div>
            </div>
        </div>
    )
}
export default DeleteData;