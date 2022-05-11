const SwitchModel = ({children}) => {
    return(
        <div className="switch">
           <div className="form-switch">
            <input name="switchh" className="form-check-input" type="checkbox" role="switch" />
            </div>
            {children}
        </div>
    )
}
export default SwitchModel;