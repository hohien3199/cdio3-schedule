const puppeteer = require('puppeteer')
const fs = require('fs');
let browser

const scrapeData = async (req, res) => {
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--disable-setuid-sanbox'],
            'ignoreHTTPSErrors': true
        })
        console.clear()
        if (req.method === 'GET') return
        const { courseYear, semester, subject, courseCode } = req.body
        console.log(`+-----------------+-------------+`);
        console.log(`|  Course Year:   |\t${courseYear}\t|`);
        console.log(`|  Semester:      |\t${semester}\t|`);
        console.log(`|  Subject:       |\t${subject}\t|`);
        console.log(`|  Course Code:   |\t${courseCode}\t|`);
        console.log(`+-----------------+-------------+`);
        const url = 'http://courses.duytan.edu.vn/Sites/Home_ChuongTrinhDaoTao.aspx?p=home_coursesearch'
        page = await browser.newPage()
        page.setDefaultNavigationTimeout(60000)
        await page.goto(url)
        await page.waitForSelector('#cboHocKy1')
        await page.waitForTimeout(400);
        await page.select('#cboNamHoc1', courseYear);
        await page.waitForTimeout(600);
        await page.select('#cboHocKy1', semester);
        await page.waitForTimeout(200);
        await page.select('#cboCourse', subject);
        await page.waitForTimeout(100);
        await page.type('#keyword1', courseCode);
        await page.waitForTimeout(100);
        await page.click('#btnSearchCourse')
        await page.waitForTimeout(200);
        const href = await page.$eval('tr.lop td:nth-child(2) a', a => a.getAttribute('href'));
        subjectName = await page.$eval('tr.lop td:nth-child(2) a', a => a.innerText);
        courseHref = 'http://courses.duytan.edu.vn/' + href.replace(/^(\.\.\/)+/, '')
        await page.close()
        page = await browser.newPage()
        await page.goto(courseHref)
        await page.waitForSelector('.tb-calendar')
        const dataScraped = await page.$$eval('tr.lop', (els, subjectName) => {
            return els.map(el => {
                var pattern = /(T[1-7]|CN): \d{2}:\d{2} -\d{2}:\d{2}/g;
                return {
                    subjectName: subjectName,
                    className: el.querySelector('td.hit a').innerText || '',
                    classLink: el.querySelector('td.hit a').href || '',
                    registrationCode: el.querySelector('td:not([class]) a').innerText || '',
                    classType: el.querySelector('td:nth-child(3)').innerText || '',
                    seatRemaining: el.querySelector('td:nth-child(4)').innerText || '',
                    weeks: el.querySelector('td:nth-child(6)').innerText || '',
                    classTimes: (el.querySelector('td:nth-child(7)').innerText.match(pattern) || []).join(' | '),
                    classRoom: el.querySelector('td:nth-child(8)').innerText.replace(/\n/g, ' | ').slice(0, -3) || '',
                    location: el.querySelector('td:nth-child(9)').innerText.replace(/\n/g, ' | ').slice(0, -3) || '',
                    teacher: el.querySelector('td:nth-child(10)').innerText || '',
                    registrationStatus: el.querySelector('td:nth-child(11)').innerText || '',
                    deploymentStatus: el.querySelector('td:nth-child(12)').innerText || ''
                }
            })
        }, subjectName);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(dataScraped));
        setTimeout(() => {
            console.log(`\n>> Có tổng cộng ${dataScraped.length} lớp "${subjectName}" trong học kỳ này...!`)
        }, 450);
        await browser.close()
    } catch (error) {
        console.log('Lỗi ở scrapeData: ' + error)
        await browser.close()
        res.status(500).json({ status: 'error', error: 'Lỗi khi cào dữ liệu' });
    }
}

module.exports = scrapeData



// const scrapeData = async (req, res) => {

//     try {

//         console.clear()
//         if (req.method === 'GET') return
//         const { courseYear, semester, subject, courseCode } = req.body

//         res.setHeader('Content-Type', 'application/json');

//         switch (subject) {
//             case 'POS':
//                 fs.readFile('./src/POS.json', 'utf8', (err, data) => {
//                     if (err) throw err;
//                     const jsonArray = JSON.parse(data);
//                     res.send(JSON.stringify(jsonArray));
//                 });
//                 break;
//             case 'ES':
//                 fs.readFile('./src/ES.json', 'utf8', (err, data) => {
//                     if (err) throw err;
//                     const jsonArray = JSON.parse(data);
//                     res.send(JSON.stringify(jsonArray));
//                 });
//                 break;
//             case 'IS':
//                 fs.readFile('./src/IS.json', 'utf8', (err, data) => {
//                     if (err) throw err;
//                     const jsonArray = JSON.parse(data);
//                     res.send(JSON.stringify(jsonArray));
//                 });
//                 break;
//             case 'SE':
//                 fs.readFile('./src/SE.json', 'utf8', (err, data) => {
//                     if (err) throw err;
//                     const jsonArray = JSON.parse(data);
//                     res.send(JSON.stringify(jsonArray));
//                 });
//                 break;
//         }
//     } catch (error) {
//         console.log('Lỗi ở scrapeData: ' + error)
//         res.status(500).json({ status: 'error', error: 'Lỗi khi cào dữ liệu' });
//     }
// }

// module.exports = scrapeData