function addUserToTable() {
    let name = document.getElementById('nameText').value;
    let lastName = document.getElementById('lastNameText').value;
    let course = document.getElementById('course').value;
    let assignment = document.getElementById('assignment').value;

    let table = document.getElementById('personTable').getElementsByTagName('tbody')[0];

    let newRow = table.insertRow();
    let nameCell = newRow.insertCell(0);
    let lastNameCell = newRow.insertCell(1);
    let courseCell = newRow.insertCell(2);
    let assignmentCell = newRow.insertCell(3);
    let dateCell = newRow.insertCell(4);

    let nameNode = document.createTextNode(name);
    let lastNameNode = document.createTextNode(lastName);
    let courseNode = document.createTextNode(course);
    let assignmentNode = document.createTextNode(assignment);
    let dateNode = document.createElement("input");
    dateNode.setAttribute("type","date");
    dateNode.value = new Date();

    nameCell.append(nameNode);
    lastNameCell.append(lastNameNode);
    courseCell.append(courseNode);
    assignmentCell.append(assignmentNode);
    dateCell.append(dateNode);
}