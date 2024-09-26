function AddingStudent(event) {
    event.preventDefault();

    const studentName = document.getElementById('student-name').value.trim();
    const birthDate = document.getElementById('birth-date').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const course = document.getElementById('course').value.trim();

    if (!studentName || !birthDate || !subject || !course) {
        alert('Vui lòng điền đầy đủ thông tin sinh viên!');
        return;
    }

    // Thêm thông tin sinh viên vào bảng
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');

    const newIdCell = document.createElement('td');
    newIdCell.classList.add('table-cell');  
    newIdCell.innerHTML = `${table.rows.length}`;

    const newNameCell = document.createElement('td');
    newNameCell.classList.add('table-cell');  
    newNameCell.innerHTML = `${studentName}`;

    const newBirthDateCell = document.createElement('td');
    newBirthDateCell.classList.add('table-cell'); 
    newBirthDateCell.innerHTML = `${birthDate}`;

    const newSubjectCell = document.createElement('td');
    newSubjectCell.classList.add('table-cell');  
    newSubjectCell.innerHTML = `${subject}`;

    const newCourseCell = document.createElement('td');
    newCourseCell.classList.add('table-cell'); 
    newCourseCell.innerHTML = `${course}`;

    // Thêm các ô vào hàng mới
    newRow.appendChild(newIdCell);
    newRow.appendChild(newNameCell);
    newRow.appendChild(newBirthDateCell);
    newRow.appendChild(newSubjectCell);
    newRow.appendChild(newCourseCell);

    // Thêm hàng mới vào bảng
    table.appendChild(newRow);

    // Xóa thông tin trong form sau khi thêm vào bảng
    document.getElementById('student-name').value = '';
    document.getElementById('birth-date').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('course').value = '';
}

// Thêm sự kiện click vào nút
document.getElementById('btn-add').addEventListener('click', AddingStudent);
