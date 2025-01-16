document.addEventListener("DOMContentLoaded", () => {
  const incidentForm = document.getElementById("incidentForm");
  const resourceForm = document.getElementById("resourceForm");
  const incidentList = document.querySelector("#incidentList ul");
  //const resourceList = document.querySelector("#resourceList ul");


  incidentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const incidentType = document.getElementById("incidentType").value;
      const location = document.getElementById("location").value;

      const li = document.createElement("li");
      li.textContent = `Type: ${incidentType}, Location: ${location}`;
      incidentList.appendChild(li);

      incidentForm.reset();
  });

  resourceForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const resourceType = document.getElementById("resourceType").value;
      const quantity = document.getElementById("quantity").value;

      const li = document.createElement("li");
      li.textContent = `Resource: ${resourceType}, Quantity: ${quantity}`;
      resourceList.appendChild(li);

      resourceForm.reset();
  });
});
