import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const AdminDashboardContainer = styled.main`
  line-height: 1.8;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
`

const Section = styled.section`
  margin: 20px 0;
`;

const Heading = styled.h2`
  text-align: center;
  color: #05445e;
`;

const Card = styled.div`
  background-color: ${({ bgcolor }) => bgcolor || "#f7f9fa"};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const SubHeading = styled.h4`
  margin-bottom: 15px;
`;

const Input = styled.input`
  margin-left: 2%;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;

const Button = styled.button`
  margin-top: 1%;
  margin-left: 2%;
  padding: 10px 15px;
  width: ${({ wide }) => (wide ? "200px" : "auto")};
  background-color: ${({ primary }) => (primary ? "#05445e" : "#e74c3c")};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#189ab4" : "#c0392b")};
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #0b0202;
  text-align: left;
  background-color: #05445e;
  color: white;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #0b0202;
  text-align: left;
`;

const StatusMessage = styled.p`
  margin-top: 10px;
  font-weight: bold;
  color: #05445e;
`;


const AdminDashboard = () => {
  const [seatingData, setSeatingData] = useState([]);
  const [statusMessage, setStatusMessage] = useState("Waiting to add students...");
  const [editStudent, setEditStudent] = useState(null);
  const [newSeatNumber, setNewSeatNumber] = useState("");
  const [newStudent, setNewStudent] = useState({
    registration_number: "",
    name: "",
    department: "",
    year: "",
    seat_number: "",
  });

  const api_url = "https://server-u9ga.onrender.com/Student";

  useEffect(() => {
    axios
      .get(api_url)
      .then((response) => {
        setSeatingData(response.data);
        setStatusMessage("Data loaded successfully.");
      })
      .catch((error) => {
        setStatusMessage(`Error fetching data: ${error.message}`);
      });
  }, []);

  const handleEdit = (student) => {
    setEditStudent(student);
    setNewSeatNumber(student.seat_number);
  };

  const handleSave = () => {
    if (!newSeatNumber) {
      setStatusMessage("Seat number cannot be empty!");
      return;
    }

    const updatedStudent = { ...editStudent, seat_number: newSeatNumber };

    axios
      .put(`${api_url}/${editStudent.id}`, updatedStudent)
      .then(() => {
        const updatedSeatingData = seatingData.map((student) =>
          student.id === editStudent.id ? updatedStudent : student
        );
        setSeatingData(updatedSeatingData);
        setEditStudent(null);
        setNewSeatNumber("");
        setStatusMessage("Seat number updated successfully.");
      })
      .catch((error) => {
        setStatusMessage(`Error updating data: ${error.message}`);
      });
  };

  const handleCancel = () => {
    setEditStudent(null);
    setNewSeatNumber("");
  };

  const handleDelete = (id) => {
    axios
      .delete(`${api_url}/${id}`)
      .then(() => {
        const updatedSeatingData = seatingData.filter(
          (student) => student.id !== id
        );
        setSeatingData(updatedSeatingData);
        setStatusMessage("Student deleted successfully.");
      })
      .catch((error) => {
        setStatusMessage(`Error deleting data: ${error.message}`);
      });
  };

  const handleAddStudent = () => {
    if (
      !newStudent.registration_number ||
      !newStudent.name ||
      !newStudent.department ||
      !newStudent.year ||
      !newStudent.seat_number
    ) {
      setStatusMessage("All fields are required to add a new student!");
      return;
    }

    axios
      .post(api_url, newStudent)
      .then((response) => {
        setSeatingData([...seatingData, response.data]);
        setNewStudent({
          registration_number: "",
          name: "",
          department: "",
          year: "",
          seat_number: "",
        });
        setStatusMessage("New student added successfully.");
      })
      .catch((error) => {
        setStatusMessage(`Error adding student: ${error.message}`);
      });
  };

  return (
    <AdminDashboardContainer>
      <Title>Admin Dashboard</Title>
      <Section>
        <Card bgcolor="#f0f8ff">
          <Heading>Add New Student</Heading>
          <div>
            <Input
              type="text"
              placeholder="Registration Number"
              value={newStudent.registration_number}
              onChange={(e) =>
                setNewStudent({ ...newStudent, registration_number: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Name"
              value={newStudent.name}
              onChange={(e) =>
                setNewStudent({ ...newStudent, name: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Department"
              value={newStudent.department}
              onChange={(e) =>
                setNewStudent({ ...newStudent, department: e.target.value })
              }
            />
            <Input
              type="number"
              placeholder="Year"
              value={newStudent.year}
              onChange={(e) =>
                setNewStudent({ ...newStudent, year: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Seat Number"
              value={newStudent.seat_number}
              onChange={(e) =>
                setNewStudent({ ...newStudent, seat_number: e.target.value })
              }
            />
            <Button onClick={handleAddStudent} primary wide>
              Add Student
            </Button>
          </div>
        </Card>
      </Section>

      <Section>
        <Card bgcolor="#eafaf1">
          <Heading>Manage Seats</Heading>
          <StatusMessage>Status: {statusMessage}</StatusMessage>
          <Table>
            <thead>
              <tr>
                <TableHeader>Reg. No.</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Department</TableHeader>
                <TableHeader>Year</TableHeader>
                <TableHeader>Seat No.</TableHeader>
                <TableHeader>Actions</TableHeader>
              </tr>
            </thead>
            <tbody>
              {seatingData.map((student) => (
                <tr key={student.id}>
                  <TableCell>{student.registration_number}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.department}</TableCell>
                  <TableCell>{student.year}</TableCell>
                  <TableCell>
                    {editStudent && editStudent.id === student.id ? (
                      <Input
                        type="text"
                        value={newSeatNumber}
                        onChange={(e) => setNewSeatNumber(e.target.value)}
                      />
                    ) : (
                      student.seat_number
                    )}
                  </TableCell>
                  <TableCell>
                    {editStudent && editStudent.id === student.id ? (
                      <>
                        <Button onClick={handleSave}>Save</Button>
                        <Button onClick={handleCancel}>Cancel</Button>
                      </>
                    ) : (
                      <Button onClick={() => handleEdit(student)}>Edit</Button>
                    )}
                    <Button onClick={() => handleDelete(student.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Section>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
