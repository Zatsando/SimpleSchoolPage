function addUserToTable() {
    let course = document.getElementById('courseText').value;
    let trainer = document.getElementById('trainerText').value;
    let number = document.getElementById('number').value;
    let assignment = document.getElementById('assignment').value;

    let table = document.getElementById('personTable').getElementsByTagName('tbody')[0];

    let newRow = table.insertRow();
    let courseCell = newRow.insertCell(0);
    let trainerCell = newRow.insertCell(1);
    let numberCell = newRow.insertCell(2);
    let assignmentCell = newRow.insertCell(3);
    let dateCell = newRow.insertCell(4);

    let courseNode = document.createTextNode(course);
    let trainerNode = document.createTextNode(trainer);
    let numberNode = document.createTextNode(number);
    let assignmentNode = document.createTextNode(assignment);
    let dateNode = document.createElement("input");
    dateNode.setAttribute("type","date");
    dateNode.value = new Date();

    courseCell.append(courseNode);
    trainerCell.append(trainerNode);
    numberCell.append(numberNode);
    assignmentCell.append(assignmentNode);
    dateCell.append(dateNode);
}