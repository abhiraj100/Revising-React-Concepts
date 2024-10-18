import { useState, useEffect } from "react";
import { getPosts } from "./api";
import "./App.css";
import PostCard from "./components/PostCard";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // getPosts().then((posts) => console.log(posts));
    getPosts().then((posts) => setData(posts));
  }, []);

  return (
    <>
      <div className="App">
        {data ? (data.map((e) => <PostCard value={e} />)) : (<p>No Data</p>)}
      </div>
    </>
  );
}

export default App;
