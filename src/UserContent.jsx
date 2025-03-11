import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContent = ({ children }) => {
  const [Name, setName] = useState("Rajesh");
   const [selectedOption, setSelectedOption] = useState("");
   const [cart,setcart]=useState([])
   const [cartopen,setcartopen]=useState(false)
   const [prductprice,setProductPrice]=useState()


  const contextValue = {Name,setName,selectedOption,setSelectedOption,cart,setcart,cartopen,setcartopen
   };

  return (
    <UserContext.Provider value={contextValue}>
        
      {children}
    </UserContext.Provider>
  );
};

export default UserContent;
