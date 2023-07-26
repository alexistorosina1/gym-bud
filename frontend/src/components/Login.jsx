import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../slices/loginSlice";



function Login(){
    const { email, password } = useSelector((state) => state.login)
    const dispatch = useDispatch()

    const handleEmailChange = (e) => {
        dispatch(setEmail(e.target.value))
    }

    const handlePasswordChange = (e) => {
        dispatch(setPassword(e.target.value))
    }

    return(
        <>
            <div>
                <form>
                    <label>
                        Email:
                        <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        />
                    </label>
                </form>
            </div>
        </>
    )
}

export default Login;