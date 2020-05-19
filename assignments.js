function addUserToTable() {
    let title = document.getElementById('titleText').value;
    let trainer = document.getElementById('trainerText').value;
    let course = document.getElementById('course').value;
    let number = document.getElementById('number').value;

    let table = document.getElementById('assignmentTable').getElementsByTagName('tbody')[0];

    let newRow = table.insertRow();
    let titleCell = newRow.insertCell(0);
    let trainerCell = newRow.insertCell(1);
    let courseCell = newRow.insertCell(2);
    let numberCell = newRow.insertCell(3);
    let dateCell = newRow.insertCell(4);

    let titleNode = document.createTextNode(title);
    let trainerNode = document.createTextNode(trainer);
    let courseNode = document.createTextNode(course);
    let numberNode = document.createTextNode(number);
    let dateNode = document.createElement("input");
    dateNode.setAttribute("type","date");
    dateNode.value = new Date();

    titleCell.append(titleNode);
    trainerCell.append(trainerNode);
    courseCell.append(courseNode);
    numberCell.append(numberNode);
    dateCell.append(dateNode);
}