import "./forms.css";

const Forms = () => <>

    <div className="form-container">
        <form>
        <div className="form-header">
            Welcome To CSS. It's a Fascinating World...
        </div>
        <div className="form-group">
            <label>Name :</label>
            <input type="text"/>
        </div>
        <div className="form-group">
            <label>Age :</label>
            <input type="number"/>
        </div>
        <div className="form-group">
        <label>Gender :</label>
            <div className="form-group-radio">
       
            <input type="radio" value={'male'} name="gender" defaultChecked="false"/>
            Male
            <input type="radio" value={'Female'} name="gender" defaultChecked="false"/>
            Female
        </div>
        </div>
        <div className="form-group">
        <label className="checkbox">Terms and Condition Privacy :</label>
            <div className="form-group-checkbox">
                <input type="checkbox" value={'I Agree'}/>
                I Agree
            </div>  
        </div>
        </form>
    </div>  

</>

export default Forms;