import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { asyncDecrementCreator, asyncIncrementCreator, decrementCreator, incrementCreator } from "./store/counterReducer";
import { fetchUsers } from "./store/userReducer";

function App() {
  const count = useSelector(state => state.countReducer.count);
  const users = useSelector(state => state.userReducer.users);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(asyncIncrementCreator())}>Increment</button>
        <button onClick={() => dispatch(asyncDecrementCreator())}>Decrement</button>
        <button onClick={() => dispatch(fetchUsers())}>Get users</button>
      </div>
      <div>
        {users.map(user => 
          <div key={user.id}>{user.name}</div>  
        )}
      </div>
    </div>
  );
}

export default App;
