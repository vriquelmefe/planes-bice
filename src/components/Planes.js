import React, { useState } from 'react'
import axios from 'axios'
import Card from './Card'


const options = [
  { name: "Seguro Vida Activa", id: 58 },
  { name: "Seguro Viaje Protegido", id: 59 },
];

const Planes = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (evt,id) => {
    console.log('evt', evt.currentTarget)
    const { value } = evt.currentTarget;
    setSelectedValue(value);
    axios.get(`https://dn8mlk7hdujby.cloudfront.net/interview/insurance/${id}`)
    .then((response) => 
    setSelectedData(response.data));
  }
  return (
    <div className="">
       <select onChange={handleChange}>
       {[
            <option selected disabled hidden key="no-option" value={null}>
              Seleccione una opción
            </option>,
            ...options.map(({ name, id }) => (
              <option key={`option-${id}`} value={id}>
                {name}
              </option>
            )),
          ]}
      </select>
      <button onClick={handleChange}>Buscar</button>

      <div className="container">

      {selectedData && <Card value={selectedData[selectedValue]} />}
      </div>
    </div>
  )
  
}
export default Planes
