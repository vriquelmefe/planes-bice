import React, { useState} from 'react'
import axios from 'axios'
import Card from './Card'


const options = [
  { name: "Seguro Vida Activa", id: 58 },
  { name: "Seguro Viaje Protegido", id: 59 },
];

const Planes = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSubmit = async(evt) => {
    evt.preventDefault();
    console.log('evt', evt.target)
    const { value } = evt.currentTarget;
    console.log('value',value)
    setSelectedValue(value);
    const response = await axios.get(`https://dn8mlk7hdujby.cloudfront.net/interview/insurance/${value}`)
    console.log('response', response)
    if(response.data.length > 0){
      setSelectedData(response.data);
    }
  }
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
       <select defaultValue={'DEFAULT'}>
       {[ 
         
            <option disabled key="DEFAULT" value='DEFAULT'>
              Seleccione una opción
            </option>,
            ...options.map(({ name, id }) => (
              <option key={`option-${id}`} value={id}>
                {name}
              </option>
            )),
          ]}
      </select>
      <button >Buscar</button>
      </form>

      <div className="container">

      {selectedData && <Card value={selectedData[selectedValue]} />}
      </div>
    </div>
  )
  
}
export default Planes
