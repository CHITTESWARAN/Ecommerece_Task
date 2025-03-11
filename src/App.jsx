import React, { useContext } from "react";
import NavBar from "./pages/NavBar";
import UserContent, { UserContext } from "./UserContent";
import Products from "./pages/Products";
import Footer from "./pages/Footer";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <UserContent>
      <AppContent />
    </UserContent>
  );
};

const AppContent = () => {
  const userContext = useContext(UserContext);
      const {cart,setcart,cartopen,setcartopen}=userContext

  return (
    <div className="flex flex-col items-center w-auto h-auto space-y-6 mt-6">
      <NavBar />
      <CartPage />
          <Products />
          <Footer />
        
      
    </div>
  );
};

export default App;