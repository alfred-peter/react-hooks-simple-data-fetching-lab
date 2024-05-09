// create your App component here

import React, { useState, useEffect } from 'react'

function App() {
  const [dogImage, setDogImage] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        // Update state with the fetched data
        setDogImage(data.message);
        setIsLoading(false); // Set loading state to false
      })
      .catch(error => console.error('Error fetching data:', error))
  }, []) // Empty dependency array to run the effect only once

  return (
    <div>
      <h1>Random Dog Image</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  )
}

export default App
