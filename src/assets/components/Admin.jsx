import { useState } from "react";

export const Admin = ({ employees, setEmployees }) => {
  const [newEmployee, setNewEmployee] = useState({
    id: 0,
    name: "",
    lastname: "",
    position: "",
  });

  function onSave() {
    const lastedID = employees.length === 0 ? 0 : employees.at(-1).id;
    // condition ? true : false;
    //-1 คือย้อนไปจาก 0 จะไปเจอตัวสุดท้าย
    setEmployees([...employees, { ...newEmployee, id: lastedID + 1 }]);
    //{ ...newEmployee, id: lastedID+1 } มีปีกกามาบอกว่าจะมีการปรับค่า คือยัดค่า id ลงไปเพิ่มนะ
  }

  function onChange(event) {
    const { name, value } = event.target;
    setNewEmployee((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function onDelete(employeeId) {
    setEmployees(employees.filter((employee) => employee.id !== employeeId));
  }

  return (
    <>
      <div className="create-user">
        <h2>Create User Here</h2>
        <div className="text-center">
          <input
            className="text-input"
            type="text"
            placeholder="Name"
            name="name"
            value={newEmployee.name}
            onChange={onChange}
          />
          <input
            className="text-input"
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={newEmployee.lastname}
            onChange={onChange}
          />
          <input
            className="text-input"
            type="text"
            placeholder="Position"
            name="position"
            value={newEmployee.position}
            onChange={onChange}
          />
          <button
            onClick={() => {
              onSave();
            }}
          >
            Save
          </button>
        </div>
      </div>
      <div className="table-admin">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
                <td>
                  <button
                    onClick={() => {
                      onDelete(employee.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
