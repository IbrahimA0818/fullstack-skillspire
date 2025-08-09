import React, { useState, useEffect } from 'react';

const App = () => {
  const [title, setTitle] = useState(0);
  const [address, setAddress] = useState({

    phoneNumber: "978-435-1780",

    address:{

      houseNumber: "E-142/10",

      street: "Street 50",

      district: "Garden Town",

      city: "Karachi",

    },

  });

  useEffect(() => {
    document.title = title

    console.log("The title has been updated")

  }, [title]);

  const changeAddressState = () =>{
    setAddress(prev => ({
        adress: {
          ...prev.address
        },
        ...prev,
        houseNumber: "R-214",
        street: "Napier Road",
        district: "North Karachi"
      }));
    };

  return (

    <div>

      <button onClick={ changeAddressState }>Update state</button>

      <div>State: {JSON.stringify(address)}</div>

      Condition used inside a Hook

      <button onClick={() => setTitle(title + 1)}>+1</button>


    </div>

  );

};

export default App;