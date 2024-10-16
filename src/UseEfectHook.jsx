import { useEffect, useState } from "react";

export default function UseEfectHook() {
  const [users, setUSers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUSers(data));
  }, []);

  return users.map((user) => <UserData user={user} key={user.id} />);
}

function UserData({ user }) {
  return (
    <div className="my-2 bg-gray-200 border-2 rounded-md p-4 w-3/12">
      <h1 className="text-xl">Name: {user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company Name: {user.company.name}</p>
      <button className="bg-purple-400 text-2xl font-semibold py-1 px-4 rounded-md mt-2 text-white">
        Contact
      </button>
    </div>
  );
}
