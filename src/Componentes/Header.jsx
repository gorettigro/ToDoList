import React, {useState} from "react";

//Estilos
import "../Styles/Header.css";

const Header = ({filtroData}) => {

  return (
    <header>
      <h4 className="logo">ToDo List</h4>
      <div>
        <button className="Al" onClick={() => filtroData('all')}>All</button>
      </div>
      <div>
        <button className="Com" onClick={() => filtroData('completed')}>Completed</button>
        <button className="Unc" onClick={() => filtroData('uncompleted')}>Uncompleted</button>
      </div>
      
    </header>
    
  );
};

export default Header;

