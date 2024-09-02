import { useState } from 'react';
import './App.css'

function App() {

  const countries = [
    {
      name: "USA",
      states: ["California", "Texas", "New York", "Florida"],
    },
    {
      name: "India",
      states: ["Delhi", "Karnataka", "Maharashtra", "Tamil Nadu"],
    },
    {
      name: "Australia",
      states: ["New South Wales", "Victoria", "Queensland", "Tasmania"],
    },
    {
      name: "Canada",
      states: ["Ontario", "Quebec", "British Columbia", "Alberta"],
    },
  ];


  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  function handleOptions(e) {
    setCountry(e.target.value);
    setState('');
    console.log(country)
    
  }


  return (
    <>
      <div className=' border my-10 flex justify-center'>
        <select name="country" id="country"  onChange={handleOptions} className=' '>
          <option value=''>Select country</option>
          {countries.map((item, index) => (
            <option key={index} value={item.name} >{item.name}</option>
          ))}
        </select>
        <select name='state' id='state'>
          {}
        </select>
      </div>
    </>
  )
}

export default App

// import React, { useState } from "react";

// const App = () => {


//   const countries = [
//     {
//       name: "USA",
//       states: ["California", "Texas", "New York", "Florida"],
//     },
//     {
//       name: "India",
//       states: ["Delhi", "Karnataka", "Maharashtra", "Tamil Nadu"],
//     },
//     {
//       name: "Australia",
//       states: ["New South Wales", "Victoria", "Queensland", "Tasmania"],
//     },
//     {
//       name: "Canada",
//       states: ["Ontario", "Quebec", "British Columbia", "Alberta"],
//     },
//   ];
  
//   // State to store selected country and state
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [selectedState, setSelectedState] = useState("");

//   // Handle country change
//   const handleCountryChange = (e) => {
//     setSelectedCountry(e.target.value);
//     setSelectedState(""); // Reset state when country changes
//   };

//   // Handle state change
//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);
//   };

//   return (
//     <div>
//       <h2>Select Country and State</h2>
      
//       {/* Country Dropdown */}
//       <select value={selectedCountry} onChange={handleCountryChange}>
//         <option value="">Select a Country</option>
//         {countries.map((country, index) => (
//           <option key={index} value={country.name}>
//             {country.name}
//           </option>
//         ))}
//       </select>

//       {/* State Dropdown */}
//       {selectedCountry && (
//         <select value={selectedState} onChange={handleStateChange}>
//           <option value="">Select a State</option>
//           {countries
//             .find((country) => country.name === selectedCountry)
//             .states.map((state, index) => (
//               <option key={index} value={state}>
//                 {state}
//               </option>
//             ))}
//         </select>
//       )}

//       {/* Display selected country and state */}
//       {selectedCountry && selectedState && (
//         <p>
//           Selected Country: {selectedCountry}, Selected State: {selectedState}
//         </p>
//       )}
//     </div>
//   );
// };

// export default App;

