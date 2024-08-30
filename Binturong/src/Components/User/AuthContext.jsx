// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';
//
// const AuthContext = createContext();
//
// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//
//     const checkAuthStatus = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/user/current-user', {
//                 withCredentials: true
//             });
//             setUser(response.data);
//         } catch (error) {
//             setUser(null);
//         }
//     };
//
//     useEffect(() => {
//         checkAuthStatus();
//     }, []);
//
//     const logout = async () => {
//         try {
//             await axios.post('http://localhost:8080/user/logout', {}, { withCredentials: true });
//             setUser(null);
//         } catch (error) {
//             console.error('Logout failed', error);
//         }
//     };
//
//     return (
//         <AuthContext.Provider value={{ user, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
//
// export default AuthContext;