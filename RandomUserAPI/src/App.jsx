import { useState, useEffect } from 'react'
import { getRandomUser } from "./api/index.js";
import './App.css'
import UserCard from "./components/UserCard.jsx";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // getRandomUser().then((user) => console.log(user));
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, []);

  console.log(userData);
  
  // refresh button function

  const handleRefresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }

  return (
    <>
      <div className='App flex flex-col m-8 shadow-xl'>
        {
          userData && ( <UserCard data={userData} /> )
        }
      </div>
      <div className='flex justify-center items-center'>
        <button onClick={handleRefresh} className='border-2 border-red-600 p-2'>Refresh User</button>
      </div>
    </>
  )
}

export default App;

// {
//   userData ? (userData.map((e) => <UserCard data={e} />)) : (<h2>No Data Found</h2>)
// }
