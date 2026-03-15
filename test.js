async function loadTodos() {
    try {
        const response = await fetch('http://localhost:3000/todos'); // fetch อย่างเดียว = ขอข้อมูล
        if (!response.ok) {
            throw new Error(`Wrong URL ${response.status}`) //Error Wrong URL 404
        }
        const actualData = await response.json() // ต้องแกะกล่อง แปลงเป็น JSON เพื่อให้ได้ข้อมูลจริงๆ 
        console.log("1. ข้อมูลที่ได้คือ:", actualData);
    }
    
    catch(err) {
        console.error('Error', err.message)
    }
}

loadTodos() // 1. ข้อมูลที่ได้คือ: Promise { <pending> } = ยังไม่ได้ข้อมูล แต่ให้ใบเสร็จ(promise) รอก่อนค่อยรับของ

// รับของยังไง ? => async เขียนหน้าฟังก์ชัน , await = หยุดรอบรรทัดนี้จนกว่าจะได้ข้อมูลมาถึง

// 1. ข้อมูลที่ได้คือ: Response {
//   status: 200,
//   statusText: 'OK',
//   headers: Headers {
//     'x-powered-by': 'Express',
//     'access-control-allow-origin': '*',
//     'content-type': 'application/json; charset=utf-8',
//     'content-length': '119',
//     etag: 'W/"77-SH7n/OxzP95Y/Ze0RfDdrRmvuAA"',
//     date: 'Sun, 15 Mar 2026 06:55:42 GMT',
//     connection: 'keep-alive',
//     'keep-alive': 'timeout=5'
//   },
//   body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
//   bodyUsed: false,
//   ok: true,
//   redirected: false,
//   type: 'basic',
//   url: 'http://localhost:3000/todos'
// }

// Actual Data => ใช้ตัวแปรมารับ response.json()

// 1. ข้อมูลที่ได้คือ: [
//   { id: 1, text: 'เรียน HTML', completed: true },
//   { id: 2, text: 'เรียน Fetch API', completed: false }
// ]