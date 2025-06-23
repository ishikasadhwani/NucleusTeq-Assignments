import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  const user = {
    name: "Ishika Sadhwani",
    email: "ishikasadhwani3@gmail.com",
    phnNo: "7470400785",
    city: "Indore",
  };

  return (
    <>
      <div>
        <UserCard user={user} />
      </div>
    </>
  );
}

export default App;
