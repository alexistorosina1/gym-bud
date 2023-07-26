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
            <div className="login-card">
                <h2>Sign in to your account</h2>
                <form>
                    <label>
                        Email address
                        <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        />
                    </label>
                    <br />
                    <label>
                        Password
                        <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        />
                    </label>
                </form>
                <button>Sign in</button>
                <p>Not a member?
                    <a> Sign up</a>
                </p>

            </div>
        </>
    )
}

export default Login;