import { useSelector, useDispatch } from "react-redux";
import {
    setUsername,
    setEmail,
    setPassword,
    setDob,
    setLocation,
} from "../slices/signupSlice"

function Signup(){
    const { formData } = useSelector((state) => state.signup)
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value} = e.target;
        switch (name){
            case "username":
                dispatch(setUsername(value))
                break;
            case "email":
                dispatch(setEmail(value))
                break;
            case "password":
                dispatch(setPassword(value))
                break;
            case "dob":
                dispatch(setDob(value))
                break;
            case "location":
                dispatch(setLocation(value))
                break;
            default:
                break;
        }
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return(
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    />
                    <input 
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    />
                    <input
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    />
                    <input
                    type="date"
                    value={formData.dob}
                    onChange={handleChange}
                    placeholder="MM/DD/YYYY"
                    />
                    <input
                    type="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location"
                    />
                </form>
            </div>
        </>
    )
}

export default Signup;