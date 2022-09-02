import UserList from "./features/users/UserList";
import { Routes, Route } from "react-router-dom";
import Adduser from "./component/Adduser";
import EditUser from "./features/users/EditUser";
function App() {
  return (
    <div clcpassName="cpntainer mx-auto px-2 max-w-5xl pt-10 md-pt-32">
      <h1 className="text-center font-bold text-2xl  text-gray-700">
        {" "}
        CRUD Operation with Redux Toolkit{" "}
      </h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<Adduser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
