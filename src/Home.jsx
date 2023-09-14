import { useState } from "react";
import { NavBar } from "./assets/components/NavBar";
import { Admin } from "./assets/components/Admin";
import { User } from "./assets/components/User";
import "./Home.css";

const mockEmployees = [
  {
    id: 0,
    name: "employee 1",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

function Home() {
  const [sector, setSector] = useState("");
  const [employees, setEmployees] = useState(mockEmployees);

  //refactor
  const isUser = sector === "user";
  const isAdmin = sector === "admin";

  const getHeaderText = () => {
    if (isUser) return "Home - User Sector";
    if (isAdmin) return "Home - Admin Sector";
    return "React - Assessment";
  };
  //ถ้าฟังก์ชั่น return ค่าเดียวไม่ต้องใส่ปีกกาก็ได้

  return (
    <div className="home-narmal">
      <NavBar />
      <h1>
        Generation Thailand <br />
        {getHeaderText()}
      </h1>
      <div className="sector">
        <div className="button">
          <button
            onClick={() => {
              setSector("user");
            }}
          >
            User Home Sector
          </button>

          <button
            onClick={() => {
              setSector("admin");
            }}
          >
            Admin Home Sector
          </button>
        </div>
      </div>

      {isAdmin && <Admin employees={employees} setEmployees={setEmployees} />}
      {isUser && <User employees={employees} />}
    </div>
  );
}

export default Home;
