// Tạo table
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const hours = ['7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tr = document.createElement('tr');
const th = document.createElement('th');
th.textContent = '';
tr.appendChild(th);

for (let i = 0; i < weekdays.length; i++) {
    const th = document.createElement('th');
    th.textContent = weekdays[i];
    tr.appendChild(th);
}

thead.appendChild(tr);
table.appendChild(thead);

const tbody = document.createElement('tbody');

for (let i = 0; i < hours.length; i++) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    if (i > 5)
        td.textContent = hours[i] + ':00 PM';
    else
        td.textContent = hours[i] + ':00 AM';
    tr.appendChild(td);

    for (let j = 0; j < weekdays.length; j++) {
        const td = document.createElement('td');
        td.setAttribute('id', `${weekdays[j]}_${hours[i]}`);
        td.setAttribute('class', `${weekdays[j]}_${hours[i]}`);
        tr.appendChild(td);
    }

    tbody.appendChild(tr);
}

table.appendChild(tbody);

const schedules = document.createElement('div');
schedules.setAttribute('class', 'schedule');
schedules.appendChild(table);

const rightPanel = document.querySelector('#right-panel');
rightPanel.setAttribute('id', 'right-panel');
rightPanel.appendChild(schedules);

// Gắn ID cho các thẻ td bằng class
document.querySelectorAll('td').forEach(td => {
    const { classList } = td;
    td.id = classList[0] ?? '';
});


// Tạo các lựa chọn năm học
const cboNamHoc1 = document.querySelector('#cboNamHoc1');

const namHocArr = [
    { value: '45', label: 'Năm Học 2014-2015' },
    { value: '49', label: 'Năm Học 2015-2016' },
    { value: '53', label: 'Năm Học 2016-2017' },
    { value: '57', label: 'Năm Học 2017-2018' },
    { value: '61', label: 'Năm Học 2018-2019' },
    { value: '65', label: 'Năm Học 2019-2020' },
    { value: '69', label: 'Năm Học 2020-2021' },
    { value: '74', label: 'Năm Học 2021-2022' },
    { value: '78', label: 'Năm Học 2022-2023' },
];

for (let i = 0; i < namHocArr.length; i++) {
    const option = document.createElement('option');
    option.value = namHocArr[i].value;
    option.textContent = namHocArr[i].label;
    cboNamHoc1.appendChild(option);
}

// Tạo các lựa chọn học kỳ
const cboHocKy1 = document.querySelector('#cboHocKy1');

const semestersByYear = {
    '45': [{ value: '46', text: 'Học Kỳ I' }, { value: '47', text: 'Học Kỳ II' }, { value: '48', text: 'Học Kỳ Hè' }],
    '49': [{ value: '50', text: 'Học Kỳ I' }, { value: '51', text: 'Học Kỳ II' }, { value: '52', text: 'Học Kỳ Hè' }],
    '53': [{ value: '54', text: 'Học Kỳ I' }, { value: '55', text: 'Học Kỳ II' }, { value: '56', text: 'Học Kỳ Hè' }],
    '57': [{ value: '58', text: 'Học Kỳ I' }, { value: '59', text: 'Học Kỳ II' }, { value: '60', text: 'Học Kỳ Hè' }],
    '61': [{ value: '62', text: 'Học Kỳ I' }, { value: '63', text: 'Học Kỳ II' }, { value: '64', text: 'Học Kỳ Hè' }],
    '65': [{ value: '66', text: 'Học Kỳ I' }, { value: '67', text: 'Học Kỳ II' }, { value: '68', text: 'Học Kỳ Hè' }],
    '69': [{ value: '70', text: 'Học Kỳ I' }, { value: '71', text: 'Học Kỳ II' }, { value: '73', text: 'Học Kỳ Hè' }],
    '74': [{ value: '75', text: 'Học Kỳ I' }, { value: '76', text: 'Học Kỳ II' }, { value: '77', text: 'Học Kỳ Hè' }],
    '78': [{ value: '79', text: 'Học Kỳ I' }, { value: '80', text: 'Học Kỳ II' }],
};

cboNamHoc1.addEventListener('change', () => {
    const selectedYear = cboNamHoc1.value;
    const semesters = semestersByYear[selectedYear];
    const options = semesters.map(({ value, text }) => `<option value="${value}">${text}</option>`).join('');
    cboHocKy1.innerHTML = `<option value="0" disabled selected>--Chọn Học kỳ--</option> ${options}`;
});

// Tạo các lựa chọn môn học
let cboCourse = document.querySelector('#cboCourse')
let cboCourse_option = [{ "value": "ACC", "text": "ACC" }, { "value": "ACC-A", "text": "ACC-A" }, { "value": "ACC-T", "text": "ACC-T" }, { "value": "AES", "text": "AES" }, { "value": "AET", "text": "AET" }, { "value": "AHI", "text": "AHI" }, { "value": "ANA", "text": "ANA" }, { "value": "ANA-I", "text": "ANA-I" }, { "value": "APY", "text": "APY" }, { "value": "ARC", "text": "ARC" }, { "value": "ART", "text": "ART" }, { "value": "AUD", "text": "AUD" }, { "value": "AUD-A", "text": "AUD-A" }, { "value": "AVI", "text": "AVI" }, { "value": "BCH", "text": "BCH" }, { "value": "BCH-I", "text": "BCH-I" }, { "value": "BIO", "text": "BIO" }, { "value": "BIO-I", "text": "BIO-I" }, { "value": "BME", "text": "BME" }, { "value": "BNK", "text": "BNK" }, { "value": "BNK-A", "text": "BNK-A" }, { "value": "BNK-T", "text": "BNK-T" }, { "value": "BPH", "text": "BPH" }, { "value": "BPH-I", "text": "BPH-I" }, { "value": "CHE", "text": "CHE" }, { "value": "CHE-I", "text": "CHE-I" }, { "value": "CHE-T", "text": "CHE-T" }, { "value": "CHI", "text": "CHI" }, { "value": "CIE", "text": "CIE" }, { "value": "CIE-A", "text": "CIE-A" }, { "value": "CIE-T", "text": "CIE-T" }, { "value": "CMU-COM", "text": "CMU-COM" }, { "value": "CMU-CS", "text": "CMU-CS" }, { "value": "CMU-ENG", "text": "CMU-ENG" }, { "value": "CMU-IS", "text": "CMU-IS" }, { "value": "CMU-IS-T", "text": "CMU-IS-T" }, { "value": "CMU-SE", "text": "CMU-SE" }, { "value": "COM", "text": "COM" }, { "value": "COM-A", "text": "COM-A" }, { "value": "CR", "text": "CR" }, { "value": "CR-T", "text": "CR-T" }, { "value": "CS", "text": "CS" }, { "value": "CS-A", "text": "CS-A" }, { "value": "CS-I", "text": "CS-I" }, { "value": "CSN", "text": "CSN" }, { "value": "CS-T", "text": "CS-T" }, { "value": "CSU-ARC", "text": "CSU-ARC" }, { "value": "CSU-CHE", "text": "CSU-CHE" }, { "value": "CSU-CIE", "text": "CSU-CIE" }, { "value": "CSU-EE", "text": "CSU-EE" }, { "value": "CSU-ENG", "text": "CSU-ENG" }, { "value": "CSU-HYD", "text": "CSU-HYD" }, { "value": "CSU-MEC", "text": "CSU-MEC" }, { "value": "CSU-PHY", "text": "CSU-PHY" }, { "value": "CSU-THR", "text": "CSU-THR" }, { "value": "CUL", "text": "CUL" }, { "value": "DEN", "text": "DEN" }, { "value": "DEN-I", "text": "DEN-I" }, { "value": "DMS", "text": "DMS" }, { "value": "DS", "text": "DS" }, { "value": "DS-A", "text": "DS-A" }, { "value": "DTE", "text": "DTE" }, { "value": "DTE-ACC", "text": "DTE-ACC" }, { "value": "DTE-AET", "text": "DTE-AET" }, { "value": "DTE-ARC", "text": "DTE-ARC" }, { "value": "DTE-BA", "text": "DTE-BA" }, { "value": "DTE-CIE", "text": "DTE-CIE" }, { "value": "DTE-EE", "text": "DTE-EE" }, { "value": "DTE-EVR", "text": "DTE-EVR" }, { "value": "DTE-FSE", "text": "DTE-FSE" }, { "value": "DTE-HSS", "text": "DTE-HSS" }, { "value": "DTE-HT", "text": "DTE-HT" }, { "value": "DTE-IS", "text": "DTE-IS" }, { "value": "DTE-IT", "text": "DTE-IT" }, { "value": "DTE-LAW", "text": "DTE-LAW" }, { "value": "DTE-LIN", "text": "DTE-LIN" }, { "value": "DTE-MED", "text": "DTE-MED" }, { "value": "DTE-NUR", "text": "DTE-NUR" }, { "value": "DTE-PHM", "text": "DTE-PHM" }, { "value": "DTU", "text": "DTU" }, { "value": "DTU-ACC", "text": "DTU-ACC" }, { "value": "DTU-AES", "text": "DTU-AES" }, { "value": "DTU-ART", "text": "DTU-ART" }, { "value": "DTU-BIO", "text": "DTU-BIO" }, { "value": "DTU-CHI", "text": "DTU-CHI" }, { "value": "DTU-COM", "text": "DTU-COM" }, { "value": "DTU-CS", "text": "DTU-CS" }, { "value": "DTU-CUL", "text": "DTU-CUL" }, { "value": "DTU-DMS", "text": "DTU-DMS" }, { "value": "DTU-DTE", "text": "DTU-DTE" }, { "value": "DTU-ECO", "text": "DTU-ECO" }, { "value": "DTU-ENG", "text": "DTU-ENG" }, { "value": "DTU-EVR", "text": "DTU-EVR" }, { "value": "DTU-GEO", "text": "DTU-GEO" }, { "value": "DTU-HIS", "text": "DTU-HIS" }, { "value": "DTU-IS", "text": "DTU-IS" }, { "value": "DTU-JOU", "text": "DTU-JOU" }, { "value": "DTU-MGT", "text": "DTU-MGT" }, { "value": "DTU-MKT", "text": "DTU-MKT" }, { "value": "DTU-MTH", "text": "DTU-MTH" }, { "value": "DTU-PHI", "text": "DTU-PHI" }, { "value": "DTU-PSY", "text": "DTU-PSY" }, { "value": "DTU-SE", "text": "DTU-SE" }, { "value": "DTU-STA", "text": "DTU-STA" }, { "value": "ECL", "text": "ECL" }, { "value": "ECO", "text": "ECO" }, { "value": "ECO-A", "text": "ECO-A" }, { "value": "ECO-T", "text": "ECO-T" }, { "value": "EE", "text": "EE" }, { "value": "EE-T", "text": "EE-T" }, { "value": "ENG", "text": "ENG" }, { "value": "ENG-A", "text": "ENG-A" }, { "value": "ENT", "text": "ENT" }, { "value": "ENT-I", "text": "ENT-I" }, { "value": "ES", "text": "ES" }, { "value": "EVR", "text": "EVR" }, { "value": "EVR-T", "text": "EVR-T" }, { "value": "EVT", "text": "EVT" }, { "value": "FIN", "text": "FIN" }, { "value": "FIN-A", "text": "FIN-A" }, { "value": "FIN-T", "text": "FIN-T" }, { "value": "FSE", "text": "FSE" }, { "value": "FSH", "text": "FSH" }, { "value": "FST", "text": "FST" }, { "value": "GEO", "text": "GEO" }, { "value": "GLY", "text": "GLY" }, { "value": "HIS", "text": "HIS" }, { "value": "HIS-I", "text": "HIS-I" }, { "value": "HIS-T", "text": "HIS-T" }, { "value": "HOS", "text": "HOS" }, { "value": "HOS-T", "text": "HOS-T" }, { "value": "HRM", "text": "HRM" }, { "value": "HRM-A", "text": "HRM-A" }, { "value": "HRM-T", "text": "HRM-T" }, { "value": "HYD", "text": "HYD" }, { "value": "IB", "text": "IB" }, { "value": "ID", "text": "ID" }, { "value": "IE", "text": "IE" }, { "value": "IMD", "text": "IMD" }, { "value": "IMD-I", "text": "IMD-I" }, { "value": "IMN", "text": "IMN" }, { "value": "IMN-I", "text": "IMN-I" }, { "value": "INR", "text": "INR" }, { "value": "INR-A", "text": "INR-A" }, { "value": "INR-T", "text": "INR-T" }, { "value": "IS", "text": "IS" }, { "value": "IS-A", "text": "IS-A" }, { "value": "IS-ACC", "text": "IS-ACC" }, { "value": "IS-AHI", "text": "IS-AHI" }, { "value": "IS-ART", "text": "IS-ART" }, { "value": "IS-BIO", "text": "IS-BIO" }, { "value": "IS-CHE", "text": "IS-CHE" }, { "value": "IS-CHI", "text": "IS-CHI" }, { "value": "IS-COM", "text": "IS-COM" }, { "value": "IS-CR", "text": "IS-CR" }, { "value": "IS-CS", "text": "IS-CS" }, { "value": "IS-CUL", "text": "IS-CUL" }, { "value": "IS-DMS", "text": "IS-DMS" }, { "value": "IS-DTE", "text": "IS-DTE" }, { "value": "IS-ECL", "text": "IS-ECL" }, { "value": "IS-ECO", "text": "IS-ECO" }, { "value": "IS-ENG", "text": "IS-ENG" }, { "value": "IS-EVR", "text": "IS-EVR" }, { "value": "IS-FIN", "text": "IS-FIN" }, { "value": "IS-GEO", "text": "IS-GEO" }, { "value": "IS-HIS", "text": "IS-HIS" }, { "value": "IS-HOS", "text": "IS-HOS" }, { "value": "IS-IB", "text": "IS-IB" }, { "value": "IS-IS", "text": "IS-IS" }, { "value": "IS-LIT", "text": "IS-LIT" }, { "value": "IS-MGO", "text": "IS-MGO" }, { "value": "IS-MGT", "text": "IS-MGT" }, { "value": "IS-MKT", "text": "IS-MKT" }, { "value": "IS-MTH", "text": "IS-MTH" }, { "value": "IS-PHI", "text": "IS-PHI" }, { "value": "IS-PHY", "text": "IS-PHY" }, { "value": "IS-POS", "text": "IS-POS" }, { "value": "IS-PSY", "text": "IS-PSY" }, { "value": "IS-STA", "text": "IS-STA" }, { "value": "IS-T", "text": "IS-T" }, { "value": "IS-TOU", "text": "IS-TOU" }, { "value": "ITD", "text": "ITD" }, { "value": "JAP", "text": "JAP" }, { "value": "JOU", "text": "JOU" }, { "value": "KC-BUS", "text": "KC-BUS" }, { "value": "KC-FIN", "text": "KC-FIN" }, { "value": "KC-FP", "text": "KC-FP" }, { "value": "KC-HRM", "text": "KC-HRM" }, { "value": "KC-INS", "text": "KC-INS" }, { "value": "KC-LA", "text": "KC-LA" }, { "value": "KC-MGT", "text": "KC-MGT" }, { "value": "KC-MIS", "text": "KC-MIS" }, { "value": "KC-MKT", "text": "KC-MKT" }, { "value": "KOR", "text": "KOR" }, { "value": "LAW", "text": "LAW" }, { "value": "LAW-A", "text": "LAW-A" }, { "value": "LAW-T", "text": "LAW-T" }, { "value": "LIN", "text": "LIN" }, { "value": "LIT", "text": "LIT" }, { "value": "LIT-T", "text": "LIT-T" }, { "value": "MCC", "text": "MCC" }, { "value": "MCH", "text": "MCH" }, { "value": "MCH-I", "text": "MCH-I" }, { "value": "MEC", "text": "MEC" }, { "value": "MEC-A", "text": "MEC-A" }, { "value": "MED", "text": "MED" }, { "value": "MED-I", "text": "MED-I" }, { "value": "MET", "text": "MET" }, { "value": "MGO", "text": "MGO" }, { "value": "MGO-A", "text": "MGO-A" }, { "value": "MGT", "text": "MGT" }, { "value": "MGT-A", "text": "MGT-A" }, { "value": "MGT-T", "text": "MGT-T" }, { "value": "MIB", "text": "MIB" }, { "value": "MIB-I", "text": "MIB-I" }, { "value": "MKT", "text": "MKT" }, { "value": "MKT-A", "text": "MKT-A" }, { "value": "MKT-T", "text": "MKT-T" }, { "value": "MLT", "text": "MLT" }, { "value": "MT", "text": "MT" }, { "value": "MTH", "text": "MTH" }, { "value": "MTH-I", "text": "MTH-I" }, { "value": "MT-I", "text": "MT-I" }, { "value": "NTR", "text": "NTR" }, { "value": "NTR-I", "text": "NTR-I" }, { "value": "NUR", "text": "NUR" }, { "value": "NUR-I", "text": "NUR-I" }, { "value": "OB", "text": "OB" }, { "value": "OPT", "text": "OPT" }, { "value": "OPT-I", "text": "OPT-I" }, { "value": "PGY", "text": "PGY" }, { "value": "PGY-I", "text": "PGY-I" }, { "value": "PHC", "text": "PHC" }, { "value": "PHI", "text": "PHI" }, { "value": "PHI-A", "text": "PHI-A" }, { "value": "PHI-I", "text": "PHI-I" }, { "value": "PHM", "text": "PHM" }, { "value": "PHM-A", "text": "PHM-A" }, { "value": "PHY", "text": "PHY" }, { "value": "PMY", "text": "PMY" }, { "value": "PMY-I", "text": "PMY-I" }, { "value": "PNU-CR", "text": "PNU-CR" }, { "value": "PNU-CS", "text": "PNU-CS" }, { "value": "PNU-EE", "text": "PNU-EE" }, { "value": "PNU-HYD", "text": "PNU-HYD" }, { "value": "PNU-IE", "text": "PNU-IE" }, { "value": "PNU-MEC", "text": "PNU-MEC" }, { "value": "POS", "text": "POS" }, { "value": "POS-I", "text": "POS-I" }, { "value": "PSU-ACC", "text": "PSU-ACC" }, { "value": "PSU-AUD", "text": "PSU-AUD" }, { "value": "PSU-BNK", "text": "PSU-BNK" }, { "value": "PSU-COM", "text": "PSU-COM" }, { "value": "PSU-CSN", "text": "PSU-CSN" }, { "value": "PSU-ECO", "text": "PSU-ECO" }, { "value": "PSU-ENG", "text": "PSU-ENG" }, { "value": "PSU-FIN", "text": "PSU-FIN" }, { "value": "PSU-HOS", "text": "PSU-HOS" }, { "value": "PSU-HRM", "text": "PSU-HRM" }, { "value": "PSU-IB", "text": "PSU-IB" }, { "value": "PSU-IS", "text": "PSU-IS" }, { "value": "PSU-MGO", "text": "PSU-MGO" }, { "value": "PSU-MGT", "text": "PSU-MGT" }, { "value": "PSU-MKT", "text": "PSU-MKT" }, { "value": "PSU-OB", "text": "PSU-OB" }, { "value": "PSU-TOU", "text": "PSU-TOU" }, { "value": "PSY", "text": "PSY" }, { "value": "PTH", "text": "PTH" }, { "value": "PTH-I", "text": "PTH-I" }, { "value": "PTY", "text": "PTY" }, { "value": "PTY-I", "text": "PTY-I" }, { "value": "REM", "text": "REM" }, { "value": "REM-I", "text": "REM-I" }, { "value": "SCM", "text": "SCM" }, { "value": "SE", "text": "SE" }, { "value": "SE-A", "text": "SE-A" }, { "value": "SOC", "text": "SOC" }, { "value": "SPM", "text": "SPM" }, { "value": "SPM-I", "text": "SPM-I" }, { "value": "STA", "text": "STA" }, { "value": "STA-I", "text": "STA-I" }, { "value": "SUR", "text": "SUR" }, { "value": "SUR-I", "text": "SUR-I" }, { "value": "THE", "text": "THE" }, { "value": "THR", "text": "THR" }, { "value": "TOU", "text": "TOU" }, { "value": "TOU-T", "text": "TOU-T" }, { "value": "TOX", "text": "TOX" }, { "value": "TROY-CS", "text": "TROY-CS" }, { "value": "TROY-ENG", "text": "TROY-ENG" }, { "value": "TROY-HRM", "text": "TROY-HRM" }, { "value": "TROY-HSTM", "text": "TROY-HSTM" }, { "value": "TROY-MGT", "text": "TROY-MGT" }, { "value": "TROY-MTH", "text": "TROY-MTH" }, { "value": "VIE", "text": "VIE" }]
cboCourse_option.forEach(function (cboCourse_option) {
    let newOption = document.createElement("option");
    newOption.value = cboCourse_option.value;
    newOption.text = cboCourse_option.text;
    cboCourse.appendChild(newOption);
});



//----- BEGIN -----//

var schedule = []
var schedulePos = []
var classAdded = []

var slideout = document.getElementById('notif');

form.addEventListener('submit', () => {

    let mycourse = {
        courseYear: document.getElementById("cboNamHoc1").value,
        semester: document.getElementById("cboHocKy1").value,
        subject: document.getElementById("cboCourse").value,
        courseCode: document.getElementById("keyword1").value
    }

    const course_List = document.getElementById("course-list");
    const course_Cards = course_List.getElementsByClassName("course-card");

    while (course_Cards.length > 0) {
        course_Cards[0].remove();
    }

    showSpinner()
    fetch('/scrapeData', {
        method: 'POST',
        body: JSON.stringify(mycourse),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {

        if (data.error === 'Lỗi khi cào dữ liệu') {
            hideSpinner()
            toast({
                title: 'Error',
                message: 'Xảy ra lỗi khi tìm kiếm lớp học.',
                type: 'error',
                duration: 3000
            })
            return
        }

        toast({
            title: 'Success',
            message: 'Tìm kiếm lớp học thành công.',
            type: 'success',
            duration: 3000
        })

        hideSpinner()
        // Lấy danh sách các đối tượng từ hàm trả về
        const courseList = data;
        console.clear()

        add_courseCard(courseList)

        show_Data()

        var courseCards = document.querySelectorAll(".course-card");
        var dayOfWeek = [];

        var startTimeStr = []
        var startTime = []
        var startMinute = []
        var endTimeStr = []
        var endTime = []
        var endMinute = []
        var duration = []

        var room = []
        var place = []
        var title = []
        var height = []
        var top

        var subjectName = courseList[0].subjectName

        var schedulePosLength = 0
        var classAddedLength = classAdded.length


        for (let i = 0; i < classAdded.length; i++) {

            if (document.querySelector(`[title="${classAdded[i]}"]`)) {
                let element = document.querySelector(`[title="${classAdded[i]}"]`).closest('.course-card'); element.classList.add('selected');
            }

        }

        if (document.querySelectorAll('.course-card')) {
            if (!document.querySelector('.filter')) {

                const left_function = document.querySelector('.left-function')
                const filter = document.createElement('div')
                filter.classList.add('filter')
                filter.innerHTML =
                    `<input type="checkbox" id="filter_class" name="filter_class">
                <label for="filter_class"> Lọc những lớp trùng lịch</label><br>`
                left_function.appendChild(filter)

                const btn_zone = document.querySelector('.btn-zone')
                const clear = document.createElement('button')
                clear.classList.add('btn', 'btn-clear')
                clear.setAttribute('id', 'btn-clear')
                clear.innerText = 'Xóa Lịch'
                clear.setAttribute('onclick', 'clearSchedule()')

                btn_zone.appendChild(clear)


            } else {
                const filter = document.querySelector('#filter_class')
                filter.checked = false
            }
        } else {
            console.log('Không có lớp học')
        }
        courseCards.forEach(function (card) {
            card.addEventListener("click", function () {
                console.clear()

                // Không có class selected và không có lớp trong schedule & schedulePos
                if (!document.querySelector(".course-card.selected") && !schedulePos.length) {

                    console.log('Không có class selected và không có lớp trong schedule & schedulePos')

                    //Lấy ra các thông tin từ các thẻ con
                    let className = card.querySelector(".content-class").title;
                    let seatInfo = card.querySelector(".content-seat").title;
                    let timeInfo = card.querySelector(".content-time").title;
                    let roomInfo = card.querySelector(".content-room").title;
                    let placeInfo = card.querySelector(".content-place").title;
                    let teacherName = card.querySelector(".content-teacher").title;

                    // Thay đổi nội dung của thẻ để hiển thị thông tin khóa học

                    let room_List = roomInfo.split(" | ")
                    let place_List = placeInfo.split(" | ")
                    let time_List = timeInfo.split(" | ")
                    let secondChar = ''
                    for (let i = 0; i < time_List.length; i++) {
                        room.push(room_List[i])
                        place.push(place_List[i])
                        title.push(`${className} | ${subjectName} | ${room[i]} | ${place[i]} | ${time_List[i]}`)
                        secondChar = time_List[i];
                        switch (secondChar[1]) {
                            case "2": dayOfWeek.push("Monday"); break;
                            case "3": dayOfWeek.push("Tuesday"); break;
                            case "4": dayOfWeek.push("Wednesday"); break;
                            case "5": dayOfWeek.push("Thursday"); break;
                            case "6": dayOfWeek.push("Friday"); break;
                            case "7": dayOfWeek.push("Saturday"); break;
                            case "N": dayOfWeek.push("Sunday"); break;
                        }
                        startTimeStr.push(time_List[i].substr(4, 5));
                        startTime.push(parseInt(startTimeStr[i].split(":")[0]));
                        startMinute.push(parseInt(startTimeStr[i].split(":")[1]));
                        endTimeStr.push(time_List[i].substr(11, 5));
                        endTime.push(parseInt(endTimeStr[i].split(":")[0]));
                        endMinute.push(parseInt(endTimeStr[i].split(":")[1]))
                        duration.push(endTime[i] - startTime[i])


                        switch (parseInt(startMinute)) {
                            case 0: top = '8px'; break;
                            case 45: top = '8px'; break;
                        }

                        if (parseInt(duration[i]) === 2 && (parseInt(startMinute[i]) === 0 || parseInt(endMinute[i]) === 0)) { height.push('128px'); }
                        else if (parseInt(duration[i]) === 2 && (parseInt(endMinute[i]) === 0 || parseInt(endMinute[i]) === 15)) { height.push('128px'); }
                        else if (parseInt(duration[i]) === 2 && (parseInt(startMinute[i]) === 15 || parseInt(endMinute[i]) === 45)) { height.push('175px'); }
                        else if (parseInt(duration[i]) === 3 && (parseInt(endMinute[i]) === 0 || parseInt(endMinute[i]) === 15)) { ; height.push('210px'); }
                        else if (parseInt(duration[i]) === 4 && parseInt(endMinute[i]) === 0) { height.push('290px'); }
                        else if (parseInt(duration[i]) === 4 && parseInt(endMinute[i]) === 15) { height.push('290px'); }
                        else if (parseInt(duration[i]) === 4 && parseInt(endMinute[i]) === 45) { height.push('290px'); }
                        else { }

                        schedulePos.push(document.getElementById(`${dayOfWeek[i]}_${startTime[i]}`).classList[0])
                        add_schedule(schedulePos[i + schedulePosLength], dayOfWeek[i], startTime[i], endTime[i], schedule, startMinute[i], endMinute[i], top, height[i], title[i], className, 'Thêm lớp học vào lịch thành công.')

                    }
                    card.classList.add("selected");
                    classAdded.push(className)
                    toast({
                        title: 'Success',
                        message: 'Thêm lớp học vào lịch thành công.',
                        type: 'success',
                        duration: 3000
                    })
                    show_Data()
                } else // Không có class selected nhưng có lớp trong schedule & schedulePos
                    if (!document.querySelector(".course-card.selected") && schedulePos.length) {

                        console.log('Không có class selected nhưng có lớp trong schedule & schedulePos')
                        clear_data(dayOfWeek, startTimeStr, startTime, startMinute, endTimeStr, endTime, endMinute, duration, height, top, title, room, place)

                        //Lấy ra các thông tin từ các thẻ con
                        className = card.querySelector(".content-class").title;
                        seatInfo = card.querySelector(".content-seat").title;
                        timeInfo = card.querySelector(".content-time").title;
                        roomInfo = card.querySelector(".content-room").title;
                        placeInfo = card.querySelector(".content-place").title;
                        teacherName = card.querySelector(".content-teacher").title;

                        // Thay đổi nội dung của thẻ để hiển thị thông tin khóa học


                        schedulePosLength = schedulePos.length
                        classAddedLength = classAdded.length



                        let room_List = roomInfo.split(" | ")
                        let place_List = placeInfo.split(" | ")
                        let time_List = timeInfo.split(" | ")

                        for (let i = 0; i < time_List.length; i++) {
                            room.push(room_List[i])
                            place.push(place_List[i])
                            title.push(`${className} | ${subjectName} | ${room[i]} | ${place[i]} | ${time_List[i]}`)
                            secondChar = time_List[i];

                            // Sử dụng switch case để xác định ngày trong tuần
                            switch (secondChar[1]) {
                                case "2": dayOfWeek.push("Monday"); break;
                                case "3": dayOfWeek.push("Tuesday"); break;
                                case "4": dayOfWeek.push("Wednesday"); break;
                                case "5": dayOfWeek.push("Thursday"); break;
                                case "6": dayOfWeek.push("Friday"); break;
                                case "7": dayOfWeek.push("Saturday"); break;
                                case "N": dayOfWeek.push("Sunday"); break;
                            }
                            startTimeStr.push(time_List[i].substr(4, 5));
                            startTime.push(parseInt(startTimeStr[i].split(":")[0]));
                            startMinute.push(parseInt(startTimeStr[i].split(":")[1]));
                            endTimeStr.push(time_List[i].substr(11, 5));
                            endTime.push(parseInt(endTimeStr[i].split(":")[0]));
                            endMinute.push(parseInt(endTimeStr[i].split(":")[1]))
                            duration.push(endTime[i] - startTime[i])

                            switch (parseInt(startMinute)) {
                                case 0: top = '8px'; break;
                                case 45: top = '8px'; break;
                            }

                            if (parseInt(duration[i]) === 2 && (parseInt(endMinute[i]) === 0 || parseInt(endMinute[i]) === 15)) { height.push('128px'); }
                            else if (parseInt(duration[i]) === 2 && (parseInt(endMinute[i]) === 15 || parseInt(endMinute[i]) === 45)) { height.push('175px'); }
                            else if (parseInt(duration[i]) === 3 && (parseInt(endMinute[i]) === 0 || parseInt(endMinute[i]) === 15)) { ; height.push('210px'); }
                            else if (parseInt(duration[i]) === 4 && parseInt(endMinute[i]) === 0) { height.push('290px'); }
                            else if (parseInt(duration[i]) === 4 && parseInt(endMinute[i]) === 15) { height.push('290px'); }
                            else if (parseInt(duration[i]) === 4 && parseInt(endMinute[i]) === 45) { height.push('290px'); }
                            else { }
                        }

                        let isDuplicate = false

                        for (let i = 0; i < time_List.length; i++) {
                            let isConflict = check_Schedule_Conflict({ day: dayOfWeek[i], time: { start: startTime[i], end: endTime[i] } }, schedule);
                            if (isConflict) {
                                isDuplicate = true
                                break;
                            } else {
                                isDuplicate = false
                            }
                        }
                        if (isDuplicate) {
                            toast({
                                title: 'Error',
                                message: 'Lớp bạn chọn bị trùng lịch, hãy chọn lớp khác.',
                                type: 'error',
                                duration: 3000
                            })
                            show_Data()
                            card.classList.add('conflict')
                        } else {
                            for (let i = 0; i < time_List.length; i++) {
                                schedulePos.push(document.getElementById(`${dayOfWeek[i]}_${startTime[i]}`).classList[0])
                                add_schedule(schedulePos[i + schedulePosLength], dayOfWeek[i], startTime[i], endTime[i], schedule, startMinute[i], endMinute[i], top, height[i], title[i], className, 'Thêm lớp học vào lịch thành công.')
                            }
                            classAdded.push(className)
                            card.classList.add('selected')
                            show_Data()
                            toast({
                                title: 'Success',
                                message: 'Thêm lớp học vào lịch thành công.',
                                type: 'success',
                                duration: 3000
                            })
                        }
                    } else // Có class selected và nhấn vào lớp có class selected lần nữa
                        if (card.classList[1] === document.querySelector(".course-card.selected").classList[1] && schedulePos.length) {
                            console.log('Có class selected và nhấn vào lớp có class selected lần nữa')

                            for (let i = 0; i < schedulePos.length; i++) {
                                delete_schedule(card.classList[1])
                            }
                            toast({
                                title: 'Success',
                                message: 'Gỡ lớp học thành công.',
                                type: 'success',
                                duration: 3000
                            })
                            document.querySelector(".course-card.selected").classList.remove('selected')

                            let room_List = roomInfo.split(" | ")
                            let place_List = placeInfo.split(" | ")
                            timeInfo = card.querySelector(".content-time").title;
                            var time_List = timeInfo.split(" | ")
                            for (let i = 0; i < time_List.length; i++) {
                                room.push(room_List[i])
                                place.push(place_List[i])
                                title.push(`${className} | ${subjectName} | ${room[i]} | ${place[i]} | ${time_List[i]}`)
                                secondChar = time_List[i];

                                // Sử dụng switch case để xác định ngày trong tuần
                                switch (secondChar[1]) {
                                    case "2": dayOfWeek.push("Monday"); break;
                                    case "3": dayOfWeek.push("Tuesday"); break;
                                    case "4": dayOfWeek.push("Wednesday"); break;
                                    case "5": dayOfWeek.push("Thursday"); break;
                                    case "6": dayOfWeek.push("Friday"); break;
                                    case "7": dayOfWeek.push("Saturday"); break;
                                    case "N": dayOfWeek.push("Sunday"); break;
                                }
                                startTimeStr.push(time_List[i].substr(4, 5));
                                startTime.push(parseInt(startTimeStr[i].split(":")[0]));
                                schedulePos.splice(schedulePos.indexOf(`${dayOfWeek[i]}_${startTime[i]}`), 1)
                            }

                            classAdded.splice(parseInt(classAdded.indexOf(card.classList[1].replace(/_/g, ' '))), 1);
                            show_Data()

                            clear_data(dayOfWeek, startTimeStr, startTime, startMinute, endTimeStr, endTime, endMinute, duration, height, top, title, room, place)

                            return
                        } else { // Có class selected nhưng nhấn vào lớp khác

                            console.log('Có class selected nhưng nhấn vào lớp khác')
                            var classlist = ''
                            for (let i = 0; i < schedulePos.length; i++) {

                                classlist = document.querySelector(`.${schedulePos[i]} > .schedule_card > .rsWrap > .highlighted > .rsApt`).classList[1]
                            }
                            delete_schedule(classlist)
                            clear_data(dayOfWeek, startTimeStr, startTime, startMinute, endTimeStr, endTime, endMinute, duration, height, top, title, room, place)

                            classAddedLength = classAdded.length

                            schedulePos.splice(parseInt(schedulePosLength), schedulePos.length);
                            document.querySelector(".course-card.selected").classList.remove('selected')

                            //Lấy ra các thông tin từ các thẻ con
                            className = card.querySelector(".content-class").title;
                            seatInfo = card.querySelector(".content-seat").title;
                            timeInfo = card.querySelector(".content-time").title;
                            roomInfo = card.querySelector(".content-room").title;
                            placeInfo = card.querySelector(".content-place").title;
                            teacherName = card.querySelector(".content-teacher").title;

                            // Thay đổi nội dung của thẻ để hiển thị thông tin khóa học


                            let room_List = roomInfo.split(" | ")
                            let place_List = placeInfo.split(" | ")
                            var time_List = timeInfo.split(" | ")

                            for (let i = 0; i < time_List.length; i++) {
                                room.push(room_List[i])
                                place.push(place_List[i])
                                title.push(`${className} | ${subjectName} | ${room[i]} | ${place[i]} | ${time_List[i]}`)
                                secondChar = time_List[i];

                                // Sử dụng switch case để xác định ngày trong tuần
                                switch (secondChar[1]) {
                                    case "2": dayOfWeek.push("Monday"); break;
                                    case "3": dayOfWeek.push("Tuesday"); break;
                                    case "4": dayOfWeek.push("Wednesday"); break;
                                    case "5": dayOfWeek.push("Thursday"); break;
                                    case "6": dayOfWeek.push("Friday"); break;
                                    case "7": dayOfWeek.push("Saturday"); break;
                                    case "N": dayOfWeek.push("Sunday"); break;
                                }
                                startTimeStr.push(time_List[i].substr(4, 5));
                                startTime.push(parseInt(startTimeStr[i].split(":")[0]));
                                startMinute.push(parseInt(startTimeStr[i].split(":")[1]));
                                endTimeStr.push(time_List[i].substr(11, 5));
                                endTime.push(parseInt(endTimeStr[i].split(":")[0]));
                                endMinute.push(parseInt(endTimeStr[i].split(":")[1]))
                                duration.push(endTime[i] - startTime[i])


                                switch (parseInt(startMinute)) {
                                    case 0: top = '8px'; break;
                                    case 45: top = '8px'; break;
                                }

                                if (parseInt(duration[i]) === 2 && (parseInt(endMinute[i]) === 0 || parseInt(endMinute[i]) === 15)) { height.push('128px'); }
                                else if (parseInt(duration[i]) === 2 && (parseInt(endMinute[i]) === 15 || parseInt(endMinute[i]) === 45)) { height.push('175px'); }
                                else if (parseInt(duration[i]) === 3 && (parseInt(endMinute[i]) === 0 || parseInt(endMinute[i]) === 15)) { height.push('210px'); }
                                else if (parseInt(duration[i]) === 4 && parseInt(endMinute[i]) === 0) { height.push('290px'); }
                                else if (parseInt(duration[i]) === 4 && parseInt(endMinute[i]) === 15) { height.push('290px'); }
                                else if (parseInt(duration[i]) === 4 && parseInt(endMinute[i]) === 45) { height.push('290px'); }
                                else { }

                            }

                            let isDuplicate = false

                            for (let i = 0; i < time_List.length; i++) {
                                let isConflict = check_Schedule_Conflict({ day: dayOfWeek[i], time: { start: startTime[i], end: endTime[i] } }, schedule);
                                if (isConflict) {
                                    isDuplicate = true
                                    break;
                                } else {
                                    isDuplicate = false
                                }
                            }
                            if (isDuplicate) {
                                classAdded.splice(parseInt(classAddedLength - 1), 1);
                                console.log('Môn học bị trùng lịch')
                                toast({
                                    title: 'Error',
                                    message: 'Lớp bạn chọn bị trùng lịch, hãy chọn lịch khác',
                                    type: 'error',
                                    duration: 3000
                                })
                                show_Data()
                            } else {
                                for (let i = 0; i < time_List.length; i++) {
                                    schedulePos.push(document.getElementById(`${dayOfWeek[i]}_${startTime[i]}`).classList[0])
                                    add_schedule(schedulePos[i + schedulePosLength], dayOfWeek[i], startTime[i], endTime[i], schedule, startMinute[i], endMinute[i], top, height[i], title[i], className, 'Thêm lớp học vào lịch thành công.')
                                }
                                card.classList.add("selected");
                                classAdded.push(className)
                                toast({
                                    title: 'Success',
                                    message: 'Đổi lớp học thành công.',
                                    type: 'success',
                                    duration: 3000
                                })
                                classAdded.splice(parseInt(classAddedLength - 1), 1);
                                show_Data()
                            }

                        }
            });
        });
    })
})


function add_schedule(schedulePos, day, start, end, schedule, startMinute, endMinute, top, height, title, className) {
    let schedulePosition = document.querySelector(`.${schedulePos}`)

    let div = document.createElement('div');
    div.classList.add(`${day}_${start}_${end}`)
    div.classList.add('schedule_card')
    div.setAttribute('style', 'cursor: pointer;');
    if (startMinute == 45) {
        div.innerHTML = '<div class="rsWrap"><div class="highlighted" style="top: ' + top + '; height: ' + height + '"><div class="rsApt ' + className.replace(/\s+/g, "_") + '" title="' + title + '"></div></div></div>'
        schedulePosition.appendChild(div)
    } else if (endMinute == 45) {
        div.innerHTML = '<div class="rsWrap"><div class="highlighted" style="height: ' + height + '"><div class="rsApt ' + className.replace(/\s+/g, "_") + '" title="' + title + '"></div></div></div>'
        schedulePosition.appendChild(div)
    } else {
        div.innerHTML = '<div class="rsWrap"><div class="highlighted" style="height: ' + height + '"><div class="rsApt ' + className.replace(/\s+/g, "_") + '" title="' + title + '"></div></div></div>'
        schedulePosition.appendChild(div)
    }
    var rsApt = document.querySelectorAll('.rsApt')
    rsApt.forEach(item => {
        item.innerHTML = item.getAttribute('title')
    })
    add_Class(day, start, end)
}

function delete_schedule(classList) {

    let element = document.querySelectorAll('.rsApt.' + classList);
    element.forEach(element => {

        let scheduleCard = element.closest('.schedule_card');
        document.querySelector(`.${scheduleCard.classList[0]}`).remove()
        let day = scheduleCard.classList[0].split('_')[0]
        let start = parseInt(scheduleCard.classList[0].split('_')[1])
        let end = parseInt(scheduleCard.classList[0].split('_')[2])
        remove_Class(day, start, end)
    })
}

function check_Schedule_Conflict(course, schedule) {
    for (let i = 0; i < schedule.length; i++) {
        if (course.day === schedule[i].day &&
            ((course.time.start >= schedule[i].time.start && course.time.start < schedule[i].time.end) ||
                (course.time.end > schedule[i].time.start && course.time.end <= schedule[i].time.end))) {
            return true;
        }
    }
    return false;
}

function add_courseCard(courseList) {

    const courseListDiv = document.getElementById("course-list");
    courseList.forEach(course => {
        const courseCardDiv = document.createElement("div");
        courseCardDiv.classList.add("course-card");
        courseCardDiv.classList.add(course.className.replace(/\s+/g, "_"));

        const courseCardA = document.createElement("a");
        courseCardA.classList.add("card-a");

        const contentClassDiv = document.createElement("div");
        contentClassDiv.classList.add("card-content", "content-class");
        contentClassDiv.textContent = `Tên lớp: ${course.className}`;
        contentClassDiv.title = `${course.className}`

        const contentSeatDiv = document.createElement("div");
        contentSeatDiv.classList.add("card-content", "content-seat");
        contentSeatDiv.textContent = `Số chỗ còn lại: ${course.seatRemaining}`;
        contentSeatDiv.title = `${course.seatRemaining}`

        const contentTimeDiv = document.createElement("div");
        contentTimeDiv.classList.add("card-content", "content-time");
        contentTimeDiv.textContent = `Thời gian: ${course.classTimes}`;
        contentTimeDiv.title = `${course.classTimes}`

        const contentRoomDiv = document.createElement("div");
        contentRoomDiv.classList.add("card-content", "content-room");
        contentRoomDiv.textContent = `Phòng: ${course.classRoom}`;
        contentRoomDiv.title = `${course.classRoom}`

        const contentPlaceDiv = document.createElement("div");
        contentPlaceDiv.classList.add("card-content", "content-place");
        contentPlaceDiv.textContent = `Địa điểm: ${course.location}`;
        contentPlaceDiv.title = `${course.location}`

        const contentTeacherDiv = document.createElement("div");
        contentTeacherDiv.classList.add("card-content", "content-teacher");
        contentTeacherDiv.textContent = `Giảng viên: ${course.teacher}`;
        contentTeacherDiv.title = `${course.teacher}`

        courseCardA.appendChild(contentClassDiv);
        courseCardA.appendChild(contentSeatDiv);
        courseCardA.appendChild(contentTimeDiv);
        courseCardA.appendChild(contentRoomDiv);
        courseCardA.appendChild(contentPlaceDiv);
        courseCardA.appendChild(contentTeacherDiv);

        courseCardDiv.appendChild(courseCardA);

        courseListDiv.appendChild(courseCardDiv);
    });
}

function clear_data(dayOfWeek, startTimeStr, startTime, startMinute, endTimeStr, endTime, endMinute, duration, height, top, title, room, place) {
    dayOfWeek.splice(0, dayOfWeek.length);
    startTimeStr.splice(0, startTimeStr.length);
    startTime.splice(0, startTime.length);
    startMinute.splice(0, startMinute.length);
    endTimeStr.splice(0, endTimeStr.length);
    endTime.splice(0, endTime.length);
    endMinute.splice(0, endMinute.length);
    duration.splice(0, duration.length);
    height.splice(0, height.length);
    title.splice(0, title.length);
    room.splice(0, room.length);
    place.splice(0, place.length);
}

function add_Class(day, start, end) {
    schedule.push({ day: day, time: { start: start, end: end } })
    schedule = schedule.filter(course => course.day !== undefined && course.time.start !== undefined && course.time.end !== undefined);
}

function remove_Class(day, start, end) {
    schedule = schedule.filter(course => !(course.day === day && course.time.start === start && course.time.end === end));
    schedule = schedule.filter(course => course.day !== undefined && course.time.start !== undefined && course.time.end !== undefined);
}

function showSpinner() {
    var spinner = document.createElement("div");
    spinner.classList.add("loader");
    document.body.appendChild(spinner);

    const bouncing = `<div class="text-wrapper">
        <div class="bouncing">
        <span class="bouncing-text" style="--i:1">Đ</span>
        <span class="bouncing-text" style="--i:2">a</span>
        <span class="bouncing-text" style="--i:3">n</span>
        <span class="bouncing-text" style="--i:4">g</span>
        <span class="bouncing-text" style="--i:5">&nbsp</span>
        <span class="bouncing-text" style="--i:6">t</span>
        <span class="bouncing-text" style="--i:7">ì</span>
        <span class="bouncing-text" style="--i:8">m</span>
        <span class="bouncing-text" style="--i:9">&nbsp</span>
        <span class="bouncing-text" style="--i:10">k</span>
        <span class="bouncing-text" style="--i:11">i</span>
        <span class="bouncing-text" style="--i:12">ế</span>
        <span class="bouncing-text" style="--i:13">m</span>
        <span class="bouncing-text" style="--i:14">.</span>
        <span class="bouncing-text" style="--i:15">.</span>
        <span class="bouncing-text" style="--i:16">.</span>
        </div>
        </div>`
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = bouncing;
    document.body.appendChild(tempDiv.firstChild);
}

function hideSpinner() {
    var spinner = document.querySelector(".loader");
    const bouncing = document.querySelector('.text-wrapper')
    if (spinner) {
        spinner.remove();
        bouncing.remove()
    }
}

function show_Data() {
    if (schedule.length) {
        for (let i = 0; i < schedule.length; i++) {
            console.log(`[${i + 1}]: day: ${schedule[i].day}, time: { start: ${schedule[i].time.start}, end:  ${schedule[i].time.end}} `)
        }
    } else {
        console.log(schedule)
    }
    console.log(schedulePos)
    console.log(classAdded)
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('rsApt')) {

        let classList = event.target.className.split(' ');
        let className = classList.find(cls => cls.startsWith(classList[1]));
        if (className) {
            let elements = document.querySelectorAll(`.${className}.selected`);
            elements.forEach(el => el.classList.remove('selected'));
        }

        let class_List = document.querySelectorAll(`.rsApt.${classList[1]}`)

        let ind = classAdded.indexOf(classList[1].replace(/_/g, ' '))
        classAdded.splice(ind, 1)

        for (let i = 0; i < class_List.length; i++) {
            let schedule_class = class_List[i].closest('.schedule_card').classList[0]
            let get_SchedulePos = class_List[i].closest('.schedule_card').parentNode.classList[0]
            let index = schedulePos.indexOf(get_SchedulePos)
            schedulePos.splice(index, 1)
            let [day, start_Time, end_Time] = schedule_class.split('_');
            let time = { start: parseInt(start_Time), end: parseInt(end_Time) };
            remove_Class(day, time.start, time.end)
            class_List[i].closest('.schedule_card').remove()
        }
        toast({
            title: 'Success',
            message: 'Xóa lớp học thành công.',
            type: 'success',
            duration: 3000
        })
        console.clear()
        show_Data()
    }
});

function toast({ title = '', message = '', type = '', duration = 2000 }) {
    const main = document.querySelector('.toast-zone')
    if (main) {
        const icons = {
            success: 'fa-solid fa-check',
            error: 'fa-solid fa-exclamation',
            warning: 'fa-solid fa-exclamation',
            info: 'fa-solid fa-info',
        }
        const icon = icons[type]
        const delay = (duration / 1000).toFixed(2)
        const toast = document.createElement('div')
        const autoRemoveID = setTimeout(() => {
            main.removeChild(toast)
        }, duration + 300);
        toast.onclick = function (e) {
            if (e.target.closest('.toast-btn')) {
                main.removeChild(toast)
                clearTimeout(autoRemoveID)
            }
        }
        toast.classList.add('notification', `${type}`)
        toast.style.animation = `slideInRight 0.3s ease forwards, fadeOut 0.3s linear ${delay}s forwards`
        toast.innerHTML = `
        <div class="toast-icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast-body">
                <h3>${title}</h3>
                <span>${message}</span>
            </div>
            <div class="toast-btn">
                <i class="fa-solid fa-times"></i>
            </div>
        `
        main.appendChild(toast)
    }
}

document.addEventListener('change', function (event) {
    const filter = document.querySelector('#filter_class');
    if (event.target === filter) {
        if (filter.checked) {
            let class_conflict = []
            const titles = document.querySelectorAll('.content-time');
            titles.forEach(function (title) {
                if (!title.closest('.selected')) {
                    const timeRanges = title.getAttribute('title').split(' | ');
                    let isConflict = false;

                    timeRanges.forEach((item) => {
                        const startHour = parseInt(item.substring(4, 6));
                        const endHour = parseInt(item.substring(11, 13));
                        const daystr = item.substring(1, 2);
                        let day = ''
                        switch (daystr) {
                            case '2': day = 'Monday'; break;
                            case '3': day = 'Tuesday'; break;
                            case '4': day = 'Wednesday'; break;
                            case '5': day = 'Thursday'; break;
                            case '6': day = 'Friday'; break;
                            case '7': day = 'Saturday'; break;
                            case 'N': day = 'Sunday'; break;
                        }

                        const conflict = check_Schedule_Conflict({ day: day, time: { start: startHour, end: endHour } }, schedule);
                        if (conflict) {
                            isConflict = true;
                            return;
                        }
                    });

                    if (isConflict) {
                        const conflict = title.closest('.course-card')
                        // conflict.style.display = 'none'
                        conflict.classList.add('conflict')
                        class_conflict.push(conflict.classList[1])
                    }
                } else {
                }
            });

            if (class_conflict.length) {
                toast({
                    title: 'Info',
                    message: 'Đã đánh dấu các lớp bị trùng lịch.',
                    type: 'info',
                    duration: 3000
                })
            } else {
                toast({
                    title: 'Info',
                    message: 'Không có lớp nào bị trùng lịch.',
                    type: 'info',
                    duration: 3000
                })
            }
        } else {
            const cardList = document.querySelectorAll('.course-card')
            cardList.forEach(card => {
                // card.style.display = 'block'
                card.classList.remove('conflict')
            })
            toast({
                title: 'Info',
                message: 'Đã hủy đánh dấu các lớp bị trùng lịch.',
                type: 'info',
                duration: 3000
            })
        }
    }
});

function clearSchedule() {
    if (classAdded.length) {
        var confirmZone = document.querySelector('.confirm-zone')
        var confirmBox = document.getElementById('confirm-box');
        var confirmYes = document.getElementById('confirm-yes');
        var confirmNo = document.getElementById('confirm-no');

        confirmZone.style.display = 'block';
        confirmZone.classList.add('active')
        confirmBox.style.display = 'block';
        confirmBox.classList.add('zoomin')

        confirmYes.addEventListener('click', function confirmYesListener() {
            confirmYes.removeEventListener('click', confirmYesListener);
            confirmBox.style.display = 'none';
            confirmZone.style.display = 'none';
            classAdded.forEach(className => {
                delete_schedule(`${className.trim().replaceAll(/\s+/g, '_')}`)
                const selected = document.querySelectorAll('.selected')
                selected.forEach(el => {
                    el.classList.remove('selected')
                })
            });

            const conflict = document.querySelectorAll(".conflict");
            conflict.forEach(el => {
                el.classList.remove("conflict");
            });

            document.getElementById("filter_class").checked = false;

            schedule.splice(0, schedule.length);
            schedulePos.splice(0, schedulePos.length);
            classAdded.splice(0, classAdded.length);

            toast({
                title: 'Succes',
                message: 'Đã xóa tất cả các lớp học ra khỏi lịch.',
                type: 'success',
                duration: 3000
            })
            console.clear()
            show_Data()
        });

        confirmNo.addEventListener('click', function confirmNoListener() {
            confirmYes.removeEventListener('click', confirmNoListener);
            confirmBox.style.display = 'none';
            confirmZone.style.display = 'none';
        });
    } else {
        toast({
            title: 'Warning',
            message: 'Hiện tại chưa có lớp học nào.',
            type: 'warning',
            duration: 3000
        })
    }

}

// let main_class = card.querySelector(".content-class").title;

// let className = []
// let seatInfo = []
// let timeInfo = []
// let roomInfo = []
// let placeInfo = []
// let teacherName = []

// let lab = ''
// let lec = ''

// let labOrLec = /[0-9]$/.test(main_class)

// let time_length = 0

// if (labOrLec) {
//     lab = main_class.substring(0, main_class.indexOf(" ", main_class.indexOf(" ") + 1) + 2)
//     console.log('LAB')
//     let lab_array = document.querySelectorAll(`.${lab.replace(/ /g, '_')},.${lab.replace(/ /g, '_')}1,.${lab.replace(/ /g, '_')}2,.${lab.replace(/ /g, '_')}3,.${lab.replace(/ /g, '_')}4,.${lab.replace(/ /g, '_')}5,.${lab.replace(/ /g, '_')}6,.${lab.replace(/ /g, '_')}7,.${lab.replace(/ /g, '_')}8,.${lab.replace(/ /g, '_')}9`)
//     for (let i = 0; i < lab_array.length; i++) {
//         let card_contents = document.querySelectorAll(`.${lab_array[i].classList[1]} .card-content`)
//         className.push(card_contents[0].title)
//         seatInfo.push(card_contents[1].title)
//         timeInfo.push(card_contents[2].title)
//         roomInfo.push(card_contents[3].title)
//         placeInfo.push(card_contents[4].title)
//         teacherName.push(card_contents[5].title)
//         // console.log(
//         //     ` \nTên lớp: ${className[i]}\nSố chỗ còn lại: ${seatInfo[i]}\nPhòng: ${roomInfo[i]}\nThời gian: ${timeInfo}\nĐịa điểm: ${placeInfo[i]}\nGiảng viên: ${teacherName[i]}\n `
//         // )

//         // console.log(timeInfo[i].split(" | ").length)
//         // time_tmp =
//         time_length += timeInfo[i].split(" | ").length

//     }
//     // console.log(time_length)
// }
// else {
//     lec = main_class
//     console.log('LEC')
//     let lec_array = document.querySelectorAll(`.${lec.replace(/ /g, '_')},.${lec.replace(/ /g, '_')}1,.${lec.replace(/ /g, '_')}2,.${lec.replace(/ /g, '_')}3,.${lec.replace(/ /g, '_')}4,.${lec.replace(/ /g, '_')}5,.${lec.replace(/ /g, '_')}6,.${lec.replace(/ /g, '_')}7,.${lec.replace(/ /g, '_')}8,.${lec.replace(/ /g, '_')}9`)
//     for (let i = 0; i < lec_array.length; i++) {
//         let card_contents = document.querySelectorAll(`.${lec_array[i].classList[1]} .card-content`)
//         className.push(card_contents[0].title)
//         seatInfo.push(card_contents[1].title)
//         timeInfo.push(card_contents[2].title)
//         roomInfo.push(card_contents[3].title)
//         placeInfo.push(card_contents[4].title)
//         teacherName.push(card_contents[5].title)
//         // console.log(
//         //     ` \nTên lớp: ${className[i]}\nSố chỗ còn lại: ${seatInfo[i]}\nPhòng: ${roomInfo[i]}\nThời gian: ${timeInfo}\nĐịa điểm: ${placeInfo[i]}\nGiảng viên: ${teacherName[i]}\n `
//         // )
//         time_length += timeInfo[i].split(" | ").length

//     }
//     console.log(time_length)
// }

// // console.log(
// //     `${className}\n${seatInfo}\n${roomInfo}\n${timeInfo}\n${placeInfo}\n${teacherName}\n `
// // )
// // Thay đổi nội dung của thẻ để hiển thị thông tin khóa học
// let k = 0
// for (let i = 0; i < (time_length / 2); i++) {

//     let room_List = roomInfo[i].split(" | ")
//     let place_List = placeInfo[i].split(" | ")
//     let time_List = timeInfo[i].split(" | ")
//     // console.log(room_List + '\n' + place_List + '\n' + time_List)
//     let secondChar = ''
//     for (let j = 0; j < time_List.length; j++) {
//         room.push(room_List[j])
//         place.push(place_List[j])
//         title.push(`${className[i]} | ${subjectName} | ${room[j]} | ${place[j]} | ${time_List[j]}`)
//         secondChar = time_List[j];
//         switch (secondChar[1]) {
//             case "2": dayOfWeek.push("Monday"); break;
//             case "3": dayOfWeek.push("Tuesday"); break;
//             case "4": dayOfWeek.push("Wednesday"); break;
//             case "5": dayOfWeek.push("Thursday"); break;
//             case "6": dayOfWeek.push("Friday"); break;
//             case "7": dayOfWeek.push("Saturday"); break;
//             case "N": dayOfWeek.push("Sunday"); break;
//         }
//         startTimeStr.push(time_List[j].substr(4, 5));
//         startTime.push(parseInt(startTimeStr[j].split(":")[0]));
//         startMinute.push(parseInt(startTimeStr[j].split(":")[1]));
//         endTimeStr.push(time_List[j].substr(11, 5));
//         endTime.push(parseInt(endTimeStr[j].split(":")[0]));
//         endMinute.push(parseInt(endTimeStr[j].split(":")[1]))
//         duration.push(endTime[j] - startTime[j])


//         switch (parseInt(startMinute)) {
//             case 0: top = '8px'; break;
//             case 45: top = '8px'; break;
//         }

//         if (parseInt(duration[j]) === 2 && (parseInt(startMinute[j]) === 0 || parseInt(endMinute[j]) === 0)) { height.push('128px'); }
//         else if (parseInt(duration[j]) === 2 && (parseInt(endMinute[j]) === 0 || parseInt(endMinute[j]) === 15)) { height.push('128px'); }
//         else if (parseInt(duration[j]) === 2 && (parseInt(startMinute[j]) === 15 || parseInt(endMinute[j]) === 45)) { height.push('175px'); }
//         else if (parseInt(duration[j]) === 3 && (parseInt(endMinute[j]) === 0 || parseInt(endMinute[j]) === 15)) { ; height.push('210px'); }
//         else if (parseInt(duration[j]) === 4 && parseInt(endMinute[j]) === 0) { height.push('290px'); }
//         else if (parseInt(duration[j]) === 4 && parseInt(endMinute[j]) === 15) { height.push('290px'); }
//         else if (parseInt(duration[j]) === 4 && parseInt(endMinute[j]) === 45) { height.push('290px'); }
//         else { }

//         schedulePos.push(document.getElementById(`${dayOfWeek[j]}_${startTime[j]}`).classList[0])
//         console.log(document.getElementById(`${dayOfWeek[j]}_${startTime[j]}`).classList[0])
//         add_schedule(schedulePos[j + i + i + schedulePosLength], dayOfWeek[j], startTime[j], endTime[j], schedule, startMinute[j], endMinute[j], top, height[j], title[j], className[i], 'Thêm lớp học vào lịch thành công.')
//         console.log(j)
//     }
//     k += 1
//     // card.classList.add("selected");
//     document.querySelector(`.${className[i].replace(/ /g, '_')}`).classList.add('selected')
//     classAdded.push(className[i])
//     clear_data(dayOfWeek, startTimeStr, startTime, startMinute, endTimeStr, endTime, endMinute, duration, height, top, title, room, place)
// }
// toast({
//     title: 'Success',
//     message: 'Thêm lớp học vào lịch thành công.',
//     type: 'success',
//     duration: 3000
// })
// show_Data()