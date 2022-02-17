import Axios from "axios";
import { useState } from "react";


const Form = ({ handleSubmit, btnValue }) => {

    const [firstNameReg, setFirstNameReg] = useState(null);
    const [secondNameReg, setSecondNameReg] = useState(null);
    const [passwordReg, setPasswordReg] = useState(null);

    Axios.post("http://localhost:5500/register",
        {
            firstName: firstNameReg,
            secondName: secondNameReg,
            password: passwordReg
        })

    return (
        <>
            <div className="firstName-container">
                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Your first name"
                    value={firstNameReg}
                    onChange={(e) => { setFirstNameReg(e.target.value) }}
                />
            </div>
            <div className="secondName-container">
                <label htmlFor="secondName">First name</label>
                <input
                    type="text"
                    name="secondName"
                    id="secondName"
                    placeholder="Your second name"
                    value={secondNameReg}
                    onChange={(e) => { setSecondNameReg(e.target.value) }}
                />
            </div>
            <div className="password-container">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your password"
                    value={passwordReg}
                    onChange={(e) => { setPasswordReg(e.target.value) }}
                />
            </div>
            <div className="btn-container">
                <button onSubmit={handleSubmit}>{btnValue}</button>
            </div>
        </>
    );
}

export default Form;