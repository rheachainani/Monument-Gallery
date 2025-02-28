import React, { useState } from "react";
import "./App.css";

const initialMonuments = [
  {
    id: 1,
    name: "Taj Mahal",
    description: "A famous white marble mausoleum.",
    city: "Agra",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/640px-Taj_Mahal_%28Edited%29.jpeg"
  },
  {
    id: 2,
    name: "Eiffel Tower",
    description: "An iconic iron tower in Paris.",
    city: "Paris",
    image: "https://planetrail.co.uk/wp-content/uploads/Eiffel-Tower-Paris-resized.jpg"
  },
  {
    id: 3,
    name: "Great Wall of China",
    description: "A historic wall built to protect China.",
    city: "China",
    image: "https://www.travelandleisure.com/thmb/b2-ee45Q1DEjuzOa51XLhJ7Rfmc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/great-wall-china-tourists-GWOC0417-10bddbf0783644c386178f62117b2132.jpg"
  },
  {
    id: 4,
    name: "Statue of Liberty",
    description: "A symbol of freedom gifted by France to the USA.",
    city: "New York",
    image: "https://cdn.britannica.com/71/99571-050-DFF0A6E5/Statue-of-Liberty-Island-New-York.jpg?w=400&h=300&c=crop"
  },
  {
    id: 5,
    name: "Colosseum",
    description: "An ancient Roman amphitheater known for gladiator battles.",
    city: "Rome",
    image: "https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg"
  },
  {
    id: 6,
    name: "Machu Picchu",
    description: "A 15th-century Inca citadel located in the Andes Mountains.",
    city: "Peru",
    image: "https://www.new7wonders.com/app/uploads/sites/3/2016/08/scott-umstattd-87129-1920x1280.jpg"
  },
  {
    id: 7,
    name: "Pyramids of Giza",
    description: "Ancient Egyptian pyramids built as tombs for pharaohs.",
    city: "Giza",
    image: "https://www.travelandleisure.com/thmb/U6Ts4f8fanbARIPQO9pEGzd8icA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/giza-pyramid-EGYPTSECRETS1016-617b2b1b23dd4fd38bc9f365af7235ab.jpg"
  },
  {
    id: 8,
    name: "Sydney Opera House",
    description: "A world-famous performing arts center in Australia.",
    city: "Sydney",
    image: "https://cdn-imgix.headout.com/tour/20072/TOUR-IMAGE/d85280d5-3c4f-4f54-bd7a-6fc5cc68597f-10732-sydney-sydney-and-bondi-tour-with-sydney-opera-house-tour-01.jpg"
  },
  {
    id: 9,
    name: "Christ the Redeemer",
    description: "A massive statue of Jesus Christ overlooking Rio de Janeiro.",
    city: "Rio de Janeiro",
    image: "https://publisher-ncreg.s3.us-east-2.amazonaws.com/pb-ncregister/swp/hv9hms/media/20231122221124_45448c583eabca7ad6be347939c641312d4ce7570209ad29d3345175aea14fec.jpg"
  }
];

function App() {
  const [monuments, setMonuments] = useState(initialMonuments);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonument, setSelectedMonument] = useState(null);

  const addMonument = () => {
    const newMonument = {
      id: monuments.length + 1,
      name: "New Monument",
      description: "Description here...",
      city: "City here...",
      image: "https://via.placeholder.com/150" // Placeholder image
    };
    setMonuments([...monuments, newMonument]);
  };

  const editMonument = (index) => {
    setSelectedMonument(index);
  };

  const updateMonument = (index, key, value) => {
    const updatedMonuments = [...monuments];
    updatedMonuments[index][key] = value;
    setMonuments(updatedMonuments);
  };

  const deleteMonument = (id) => {
    setMonuments(monuments.filter((monument) => monument.id !== id));
  };

  return (
    <div className="app">
      <h1>Monuments Gallery</h1>
      <div className="controls">
        <button onClick={addMonument}>Add Monument</button>
        <input
          type="text"
          placeholder="Search monument..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="gallery">
        {monuments
          .filter((monument) =>
            monument.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((monument, index) => (
            <div key={monument.id} className="monument-card">
              <img
                src={monument.image}
                alt={monument.name}
                onClick={() => editMonument(index)}
              />
              {selectedMonument === index ? (
                <div className="edit-mode">
                  <input
                    type="text"
                    value={monument.name}
                    onChange={(e) => updateMonument(index, "name", e.target.value)}
                  />
                  <input
                    type="text"
                    value={monument.description}
                    onChange={(e) =>
                      updateMonument(index, "description", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={monument.city}
                    onChange={(e) => updateMonument(index, "city", e.target.value)}
                  />
                  <button onClick={() => setSelectedMonument(null)}>Save</button>
                </div>
              ) : (
                <div className="monument-details">
                  <h3>{monument.name}</h3>
                  <p>{monument.description}</p>
                  <p><strong>{monument.city}</strong></p>
                  <button onClick={() => deleteMonument(monument.id)}>Delete</button>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;

/*import React from "react";
import MonumentGallery from "./components/MonumentGallery";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <h1>Monument Gallery</h1>
      <MonumentGallery />
    </div>
  );
}

export default App;
*/