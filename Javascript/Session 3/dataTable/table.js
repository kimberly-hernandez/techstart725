// THE DATA SET
const data = [
    {
      name: "Brian Holt",
      email: "Holtz@yahoo.com",
      customerNumber: "239012",
      phoneNumber: "1234241324",
    },
    {
      name: "Scott Morris",
      email: "Scottie@yahoo.com",
      customerNumber: "4320423",
      phoneNumber: "4903942932",
    },
    {
      name: "Barbara Liskov",
      email: "TheLiskovPrince@gmail.com",
      customerNumber: "0043023",
      phoneNumber: "9504030493",
    },
    {
      name: "Ellen Spertus",
      email: "elsp48@yahoo.com",
      customerNumber: "2340324",
      phoneNumber: "5034039493",
    },
    {
      name: "Marlyn Meltzer",
      email: "Marlyn Meltzer8@yahoo.com",
      customerNumber: "123453",
      phoneNumber: "3452560293",
    },
  ];

  // GET THE TABLE BODY
var tableBody = document.getElementById("table-body");

// LOOP THROUGH THE ARRAY OF OBJECTS AND CREATE A TABLE ROW AND TABLE DATA ELEMENTS FOR EACH KEY:VALUE PAIR IN THE OBJECT
data.forEach((data) => {
  var tableRow = document.createElement("tr");

  // CREATE TD HTML ELEMENT
  var nameData = document.createElement("td");
  // CREATE A TEXT NODE ELEMENT
  var nameText = document.createTextNode(data.name);
  // ADD THE TEXT NODE ELEMENT TO TD HTML ELEMENT
  nameData.appendChild(nameText);
  // ADD THE HTML ELEMENT TO TABLE ROW
  tableRow.appendChild(nameData);

  // ADD EMAIL ROW
  var emailData = document.createElement("td");
  var emailText = document.createTextNode(data.email);
  emailData.appendChild(emailText);
  tableRow.appendChild(emailData);

  // ADD CUSTOMERNUMBER
  var customerNumberData = document.createElement("td");
  var customerNumberText = document.createTextNode(data.customerNumber);
  customerNumberData.appendChild(customerNumberText);
  tableRow.appendChild(customerNumberData);

  // ADD PHONENUMBER
  var phoneNumberData = document.createElement("td");
  var phoneNUmberText = document.createTextNode(data.phoneNumber);
  phoneNumberData.appendChild(phoneNUmberText);
  tableRow.appendChild(phoneNumberData);

  // ADD ROW TO THE TABLE BODY
  tableBody.appendChild(tableRow);
});
  