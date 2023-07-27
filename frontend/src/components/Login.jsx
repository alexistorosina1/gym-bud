import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../slices/loginSlice";
import Signup from "./Signup";
import { useState } from "react";

function Login() {
  const { email, password } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [formMode, setFormMode] = useState("login");

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleFormToggle = () => {
    setFormMode(formMode === "login" ? "signup" : "login");
  };

  return (
    <>
      {formMode === "signup" ? (
        <Signup handleFormToggle={handleFormToggle} />
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="w-full max-w-md bg-white shadow-md rounded-md p-8">
            <h2 className="text-3xl font-semibold mb-4">Sign in to your account</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
                />
              </div>
            </form>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition-colors">
              Sign in
            </button>
            <p className="mt-4">
              Not a member?
              <a className="text-blue-500 cursor-pointer" onClick={handleFormToggle}>
                {" "}
                Sign up
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;


// import { useDispatch, useSelector } from "react-redux";
// import { setEmail, setPassword } from "../slices/loginSlice";
// import Signup from "./Signup";
// import { useState } from "react";



// function Login(){
//     const { email, password } = useSelector((state) => state.login)
//     const dispatch = useDispatch()
//     const [formMode, setFormMode] = useState("login")

//     const handleEmailChange = (e) => {
//         dispatch(setEmail(e.target.value))
//     }

//     const handlePasswordChange = (e) => {
//         dispatch(setPassword(e.target.value))
//     }

//     const handleFormToggle = () => {
//         setFormMode(formMode === "login" ? "signup" : "login")
//     }

//     return(
//         <>
//             {formMode === "signup" ? (
//                 <Signup handleFormToggle={handleFormToggle}/>
//             ) : (
//                 <div className="login-card">
//                     <h2>Sign in to your account</h2>
//                     <form>
//                         <label>
//                             Email address
//                             <input
//                             type="email"
//                             value={email}
//                             onChange={handleEmailChange}
//                             />
//                         </label>
//                         <br />
//                         <label>
//                             Password
//                             <input
//                             type="password"
//                             value={password}
//                             onChange={handlePasswordChange}
//                             />
//                         </label>
//                     </form>
//                     <button>Sign in</button>
//                     <p>Not a member?
//                         <a onClick={handleFormToggle}> Sign up</a>
//                     </p>
//             </div>
//             )
//         }
//         </>
//     )
// }

// export default Login;