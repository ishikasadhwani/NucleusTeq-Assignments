let sidebar = document.querySelector(".sidebar");
let toggleBtn = document.createElement("div");

document.addEventListener("DOMContentLoaded", function () {
  toggleBtn.classList.add("toggle-btn");
  toggleBtn.innerHTML = "☰";
  document.body.appendChild(toggleBtn);
  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });
});

function logout() {
  window.location.href = "index.html";
}


function loadView(view) {
    const main = document.getElementById("mainContent");
  
    if (view === "view") {
        sidebar.classList.toggle("open");
      main.innerHTML = `
        <h2>Employee List</h2>
        <table border="1" cellpadding="10">
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Department</th><th>Email</th><th>Salary</th><th>Actions</th>
            </tr>
          </thead>
          <tbody id="employeeTableBody">
            <!-- Data will be inserted here -->
          </tbody>
        </table>
      `;
  
      fetch("http://localhost:8080/employees/all")
        .then(res => res.json())
        .then(data => {
          const tbody = document.getElementById("employeeTableBody");
          tbody.innerHTML = data.map(emp => `
            <tr>
              <td>${emp.id}</td>
              <td>${emp.name}</td>
              <td>${emp.department}</td>
              <td>${emp.email}</td>
              <td>${emp.salary}</td>
              <td class="action">
                <button id="edit-btn" onclick="editEmployee(${emp.id})">Update</button>
                <button id="delete-btn"onclick="deleteEmployee(${emp.id})">Delete</button>
              </td>
            </tr>
          `).join("");
        });
    }
  
    else if (view === "add") {
        sidebar.classList.toggle("open");
      main.innerHTML = `
        <h2>Add New Employee</h2>
        <form id="addEmployeeForm">
          <input type="text" id="name" placeholder="Employee Name" required><br><br>
          <input type="text" id="department" placeholder="Department" required><br><br>
          <input type="email" id="email" placeholder="Email" required><br><br>
          <input type="text" id="salary" placeholder="Salary" required><br><br>
          <button type="submit">Add Employee</button>
        </form>
      `;
  
      document.getElementById("addEmployeeForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const employee = {
          name: document.getElementById("name").value,
          department: document.getElementById("department").value,
          email: document.getElementById("email").value,
          salary: document.getElementById("salary").value,
        };
  
        fetch("http://localhost:8080/employees/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(employee)
        }).then(res => {
          if (res.ok) {
            alert("Employee added successfully!");
            loadView("view"); // Refresh the view
          } else {
            alert("Error adding employee.");
          }
        });
      });
    }
  }
  
  function deleteEmployee(id) {
    if (confirm("Are you sure you want to delete this employee?")) {
      fetch(`http://localhost:8080/employees/delete/${id}`, {
        method: "DELETE"
      }).then(res => {
        if (res.ok) {
          alert("Deleted successfully");
          loadView("view");
        } else {
          alert("Failed to delete employee.");
        }
      });
    }
  }

  function editEmployee(id) {
    fetch(`http://localhost:8080/employees/${id}`)
      .then(res => res.json())
      .then(emp => {
        const main = document.getElementById("mainContent");
        main.innerHTML = `
          <h2>Update Employee</h2>
          <form id="updateEmployeeForm">
            <input type="hidden" id="empId" value="${emp.id}" />
            <input type="text" id="name" value="${emp.name}" required><br><br>
            <input type="text" id="department" value="${emp.department}" required><br><br>
            <input type="email" id="email" value="${emp.email}" required><br><br>
            <input type="text" id="salary" value="${emp.salary}" required><br><br>
            <button type="submit">Update Employee</button>
          </form>
        `;
  
        document.getElementById("updateEmployeeForm").addEventListener("submit", function (e) {
          e.preventDefault();
  
          const updatedEmployee = {
            id: document.getElementById("empId").value,
            name: document.getElementById("name").value,
            department: document.getElementById("department").value,
            email: document.getElementById("email").value,
            salary: document.getElementById("salary").value,
          };
  
          fetch(`http://localhost:8080/employees/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedEmployee)
          }).then(res => {
            if (res.ok) {
              alert("Employee updated successfully!");
              loadView("view");
            } else {
              alert("Failed to update employee.");
            }
          });
        });
      });
  }
  
  