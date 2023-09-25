// /* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// // import { auth } from "../firebase";

// const RegisterForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );
//       // Handle successful registration
//     } catch (error) {
//       console.log(error);
//       // Handle registration error
//     }
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegisterForm;
