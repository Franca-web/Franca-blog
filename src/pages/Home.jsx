import React, { useEffect, useState } from "react";
import axios from "axios";
//import Auth from ".components/styles/post.css";
// string => "jakjdskf", int => 35
/**
 * TODO: 1. useEffect, axios, http verbs, http requests
 * Http Verbs / Http methods: get, post, put, delete, CRUD
 * TODO: ()=> {
 *     Tjaksdfajdskf
 * }
 * person = {
 *  name: "francisca",
 *  age: 21,
 *  email: "fablay002@st.ug.edu.gh"
 * }
 * person.name
 * ["francisca", "name", "string"]
 * @returns {JSX.Element}
 * @constructor
 */
function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div>
      <h1> Home</h1>
      {posts.map((post) => {
        return (
          <div className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Home;
