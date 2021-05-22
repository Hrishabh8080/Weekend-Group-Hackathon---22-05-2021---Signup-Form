import React, { Component, useState } from "react";
import '../styles/App.css';

const App = () => {

  const [err, setError] = useState(true)
  const [hello, setHello] = useState("")
  const [email, setEmail] = useState("")

  const voalidData = () => {
    let username = document.querySelector("data-testid='email'").value
    setEmail(username.substring(0, username.lastIndexOf("@")))
    setHello("Hello " + email)

  }


  return (
    <div id="main">
      hello!==""?<p>{hello}</p>: <div>
        <p>{err ? "All fields are mandatory" : ""}</p>
        <form action="" onSubmit={voalidData}>
          <input type="text" placeholder="Name" data-testid='name' required oninvalid="Name is not alphanumeric" /> <br />
          <input type="email" placeholder="Email" data-testid='email' required /> <br />
          <select data-testid='gender' required onInvalid=" Please identify as male, female or others">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="number" placeholder="Phone Number" data-testid='phoneNumber' onInvalid="Phone Number must contain only numbers" required /> <br />
          <input type="password" placeholder="Password" data-testid='password' minLength="7
        " required onInvalid="Password must contain atleast 6 letters" /> <br />
          <button type="submit" data-testid='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App;
