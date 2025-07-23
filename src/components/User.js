import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="m-4 p-4 bg-gray-100 h-50 w-100 rounded-lg hover:border">
      <h2>Name:{name}</h2>
      <p>Email:pradeepcse1245@gmail.com</p>
      <p>Location:Bengalore</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default User;
