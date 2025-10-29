// src/App.tsx
import React from 'react';
import './App.css';

function App() {
  return (
    <main className="main">
      <h1>Very Important Form</h1>
      <form className="form">
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input name="fullName" id="fullName" type="text" />
        </div>
        <div>
          <label htmlFor="favAnimal">What is Your Favourite Pet?</label>
          <select name="favAnimal" id="favAnimal">
            <option value="dog">Dog 🐶</option>
            <option value="cat">Cat 😺</option>
            <option value="bird">Bird 🐦</option>
            <option value="fish">Fish 🐟</option>
            <option value="devil">Tasmanian Devil 😈</option>
          </select>
        </div>
        <div>
          <input type="checkbox" name="agreeToTerms" id="agreeToTerms" />
          <label htmlFor="agreeToTerms">
            I Agree to all Terms and Conditions
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;  