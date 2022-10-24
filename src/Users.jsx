import React from "react";
import { useQuery } from "@tanstack/react-query";

import Pagination from "./Pagination";
import { API_URL, API_SEED } from "./constants";
import { useSearchParams } from "react-router-dom";

const fetchUsers = async (page) => {
  try {
    const response = await fetch(
      `${API_URL}/?page=${page ?? 1}&results=10&seed=${API_SEED}`
    );
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const Users = () => {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page");

  const { data, isLoading } = useQuery(["users", page], () => fetchUsers(page));

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="users-container">
      <Pagination />

      {data.map((user) => (
        <div key={user.login.uuid} className="user-card">
          <img src={user.picture.thumbnail} />
          <div>
            <p className="name">
              {user.name.first} {user.name.last}
            </p>
            <p className="email">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;

