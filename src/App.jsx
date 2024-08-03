import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    //post:veri ekleme
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  };

  const updateUser = async (userId, updatedUser) => {
    //put : veri güncelleme
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  };

  const deleteUserById = async (userId) => {
   const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`);

  };

  useEffect(() => {
    //getAllUsers();
    //getUserById(1);

    // const newUser = {
    //   "username": "ali",
    //   "password": "36",
    // };
    // createUser(newUser);

    // updateUser("1324",{
    //   "username" : "Faruk",
    //   "password" : "8528"
    // })

    deleteUserById("1324");
  }, []);

  return <div>25</div>;
}

export default App;
