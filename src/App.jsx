import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Card from './Components/Card';

const App = () => {
  const [animals, setAnimals] = useState([
    { id: nanoid(), name: 'Lion', desc: 'The king of the jungle' },
    { id: nanoid(), name: 'Elephant', desc: 'Gentle giant of the savanna' },
    { id: nanoid(), name: 'Tiger', desc: 'Fierce predator with striped fur' }
  ]);
  const [animalName, setAnimalName] = useState('');
  const [animalDesc, setAnimalDesc] = useState('');

  const handleAddAnimal = () => {
    if (animalName.trim() !== '' && animalDesc.trim() !== '') {
      const id = nanoid(); 
      setAnimals([...animals, { id, name: animalName, desc: animalDesc }]);
      setAnimalName('');
      setAnimalDesc('');
    }
  };

  const handleDeleteAnimal = (id) => {
    const updatedAnimals = animals.filter((animal) => animal.id !== id);
    setAnimals(updatedAnimals);
  };

  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-md-12"> 
          <div className="card col-6">
            <div className="card-header">Add animal</div>
            <div className="card-body">
            <input
            type="text"
            className="form-control mb-2"
            placeholder="Animal Name"
            value={animalName}
            onChange={(e) => setAnimalName(e.target.value)}
          />
          <textarea
            className="form-control mb-2"
            placeholder="Animal Description"
            value={animalDesc}
            onChange={(e) => setAnimalDesc(e.target.value)}
          ></textarea>
            </div>
            <div className="card-footer">
            <button className="btn btn-primary" onClick={handleAddAnimal}>
              Add Animal
            </button>
          </div>
          </div>
        </div>
      </div>
      <div className="row">
        {animals.map((animal) => (
          <div className="col-md-4 mb-3"> 
            <Card
              key={animal.id}
              id={animal.id} 
              name={animal.name}
              desc={animal.desc}
              onDelete={() => handleDeleteAnimal(animal.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
