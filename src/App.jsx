import { useState, useEffect } from "react";
import Form from "./components/Form";
import Main from "./components/Main";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  const handleFormSubmit = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  return (
    <div>
      {user ? <Main user={user} /> : <Form onSubmit={handleFormSubmit} />}
    </div>
  );
}

export default App;
