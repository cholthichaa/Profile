import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Navbar from '../Navbar.jsx';
import "@fontsource/fredoka"; // Make sure the font is imported here
import Img3 from "../assets/S__73490447.jpg";
import Img4 from "../assets/S__73490445.jpg";
import Img5 from "../assets/LINE_ALBUM03.jpg";
import Img6 from "../assets/LINE_ALBUM04.jpg";
import Img7 from "../assets/LINE_ALBUM05.jpg";
import Img8 from "../assets/LINE_ALBUM06.jpg";
import Img9 from "../assets/LINE_ALBUM07.jpg";
import Img10 from "../assets/LINE_ALBUM08.jpg";
import Img11 from "../assets/LINE_ALBUM01.jpg";
import Img12 from "../assets/LINE_ALBUM02.jpg";

import Admin7 from "../assets/สกรีนช็อต01.png";
import Admin6 from "../assets/สกรีนช็อต02.png";
import Admin5 from "../assets/สกรีนช็อต03.png";
import Admin4 from "../assets/สกรีนช็อต04.png";
import Admin3 from "../assets/สกรีนช็อต05.png";
import Admin2 from "../assets/สกรีนช็อต06.png";
import Admin1 from "../assets/สกรีนช็อต07.png";

export default function ChatbotProject() {
  const [selectedImage, setSelectedImage] = useState(Img3);
  const [selectedImageAdmin, setSelectedImageAdmin] = useState(Admin1);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };
  const handleThumbnailClickAdmin = (image) => {
    setSelectedImageAdmin(image);
  };

  return (
    <div className="bg-[#FFFAE1] min-h-screen font-fredoka">
      <Navbar />
      <div className="max-w-7xl mx-auto p-10 space-y-10">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-[#3E4E40]">
            🤖 Chatbot design and development for tourism in Khon Kaen
          </h1>
          <p className="mt-4 text-lg text-[#3E4E40]">
            การออกแบบและการพัฒนาแชทบอท เพื่อการท่องเที่ยวในจังหวัดขอนแก่น
          </p>
        </div>

        {/* User Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-[#3E4E40] text-center mb-6">ส่วน User</h2>

          {/* User Main Image Display */}
          <div className="flex justify-center mt-10">
            <div className="w-full max-w-lg relative">  {/* ปรับ max-w-md ให้เล็กลง */}
              <img
                src={selectedImage} // แสดงภาพหลักที่เลือก
                alt="Selected User Image"
                className="w-full h-auto object-contain rounded-lg shadow-2xl" // ใช้ object-contain เพื่อให้ภาพแสดงขนาดจริง
              />
            </div>
          </div>


          {/* User Thumbnail Navigation */}
          <div className="flex justify-center mt-4 space-x-4 overflow-x-auto">
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Img3}
                alt="User Thumbnail 1"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClick(Img3)} // เลือกภาพ Img3
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Img4}
                alt="User Thumbnail 2"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClick(Img4)} // เลือกภาพ Img4
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Img5}
                alt="User Thumbnail 3"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClick(Img5)} // เลือกภาพ Img5
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Img6}
                alt="User Thumbnail 4"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClick(Img6)} // เลือกภาพ Img6
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Img7}
                alt="User Thumbnail 5"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClick(Img7)} // เลือกภาพ Img7
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Img8}
                alt="User Thumbnail 6"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClick(Img8)} // เลือกภาพ Img8
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Img9}
                alt="User Thumbnail 7"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClick(Img9)} // เลือกภาพ Img9
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Img10}
                alt="User Thumbnail 8"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClick(Img10)} // เลือกภาพ Img10
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Img11}
                alt="User Thumbnail 8"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClick(Img11)} // เลือกภาพ Img10
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Img12}
                alt="User Thumbnail 8"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClick(Img12)} // เลือกภาพ Img10
              />
            </div>
          </div>
        </div>

        {/* Admin Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-[#3E4E40] text-center mb-6">ส่วน Admin</h2>

          {/* Admin Main Image Display */}
          <div className="flex justify-center mt-10">
            <div className="w-full max-w-4xl relative">  {/* ปรับ max-w-md ให้เล็กลง */}
              <img
                src={selectedImageAdmin} // แสดงภาพหลักที่เลือก
                alt="Selected User Image"
                className="w-full h-auto object-contain rounded-lg shadow-2xl" // ใช้ object-contain เพื่อให้ภาพแสดงขนาดจริง
              />
            </div>
          </div>


          {/* User Thumbnail Navigation */}
          <div className="flex justify-center mt-4 space-x-4 overflow-x-auto">
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin1}
                alt="User Thumbnail 1"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin1)} // เลือกภาพ Img3
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin2}
                alt="User Thumbnail 2"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin2)} // เลือกภาพ Img4
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin3}
                alt="User Thumbnail 3"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin3)} // เลือกภาพ Img5
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin4}
                alt="User Thumbnail 4"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin4)} // เลือกภาพ Img6
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin5}
                alt="User Thumbnail 5"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin5)} // เลือกภาพ Img7
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin6}
                alt="User Thumbnail 6"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin6)} // เลือกภาพ Img8
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin7}
                alt="User Thumbnail 7"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin7)} // เลือกภาพ Img9
              />
            </div>


          </div>
        </div>

        {/* Project Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">

          {/* Technologies Used */}
          <div className="bg-[#FFE6A7] p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">เทคโนโลยีที่ใช้</h2>
            <p className="mt-4 text-[#3E4E40] text-lg">
              <strong>Frontend:</strong> Vue.js Tailwind css<br />
              <strong>Backend:</strong> Node.js, Express.js<br />
              <strong>NLP & Intent Matching:</strong> Dialogflow<br />
              <strong>ฐานข้อมูล:</strong> PostgreSQL<br />
              <strong>Messaging Platform:</strong> LINE Messaging API<br />
              <strong>อื่น ๆ:</strong> Webhook สำหรับเชื่อมต่อ Dialogflow กับ Backend
            </p>
          </div>

          {/* Core Functions */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">ฟังก์ชันหลัก</h2>
            <ul className="mt-4 text-[#3E4E40] text-lg list-inside list-disc space-y-2">
              <li>ตอบคำถามเกี่ยวกับสถานที่ท่องเที่ยว แยกตามประเภท เช่น แหล่งธรรมชาติ ร้านอาหาร คาเฟ่ และอำเภอต่าง ๆ</li>
              <li>วิเคราะห์และจับคู่เจตนา (Intent Matching) ด้วย Dialogflow</li>
              <li>เชื่อมต่อฐานข้อมูลเพื่อดึงข้อมูลสถานที่และรายละเอียดต่าง ๆ</li>
              <li>ดึงข้อมูลจากเว็บไซต์ภายนอกในกรณีไม่มีข้อมูลในฐานข้อมูล (Web Scraping)</li>
              <li>บันทึกประวัติการสนทนาและข้อมูลผู้ใช้</li>
              <li>รองรับการใช้งานผ่าน LINE Application</li>
            </ul>
            <p className="mt-4 text-[#3E4E40] text-lg">สามารถดูเพิ่มเติมได้ที่ <a href="https://drive.google.com/drive/folders/1M5jSm9lgglTLOsliA2oRSYK42O4KTJa3?usp=sharing" className="text-[#FFBB30] hover:underline">รายละเอียดของโปรเจกต์เพิ่มเติม</a></p>

          </div>
        </div>

        {/* Core Functions */}
        <div className="bg-white p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">เป้าหมายและขอบเขต</h2>
          <ul className="mt-4 text-[#3E4E40] text-lg list-inside list-disc space-y-2">
            <li>รองรับการใช้งานผ่าน LINE Application</li>
            <li>แชทบอทรองรับภาษาไทยเท่านั้น</li>
            <li>แชทบอทตอบคำถามเกี่ยวกับสถานที่ท่องเที่ยวจังหวัดขอนแก่นเท่านั้น เช่น ชื่อสถานที่ ที่อยู่ เวลาทำการ ค่าเข้าชม รายละเอียดสถานที่</li>
          </ul>
        </div>


        {/* Core Functions */}
        <div className="bg-white p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">โครงสร้างระบบ (Architecture)</h2>
          <ul className="mt-4 text-[#3E4E40] text-lg list-inside list-disc space-y-2">
            <li>ผู้ใช้ส่งข้อความผ่าน LINE Messaging API</li>
            <li>ข้อความถูกส่งไปยัง Dialogflow เพื่อวิเคราะห์ Intent และ Entity</li>
            <li>Dialogflow เรียก Webhook (Backend) เพื่อดึงข้อมูลจากฐานข้อมูลหรือเว็บภายนอก</li>
            <li>ข้อมูลสถานที่ท่องเที่ยว ร้านอาหาร สามารถเพิ่มข้อมูลได้ที่หน้าเว็บสำหรับแอดมิน</li>
            <li>Webhook ส่งคำตอบกลับไปยัง Dialogflow และต่อไปยัง LINE เพื่อแสดงผลกับผู้ใช้</li>
          </ul>
          <p className="mt-4 text-[#3E4E40] text-lg">สามารถดูเพิ่มเติมได้ที่ <a href="https://drive.google.com/drive/folders/1FVtENiBOIMI0657oqd54atVbBeIJ_Qmo?usp=sharing" className="text-[#FFBB30] hover:underline">Document chatbot</a></p>

        </div>

        {/* Installation and Setup */}
        <div className="bg-white p-8 rounded-2xl shadow-xl mt-12">
          <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">การติดตั้งและใช้งานเบื้องต้น</h2>
          <ol className="text-[#3E4E40] text-lg list-inside list-decimal space-y-4">
            <li><strong>ติดตั้ง Node.js</strong> และ <strong>PostgreSQL + Docker</strong> บนเครื่องของคุณ</li>
            <li>ดาวน์โหลดโปรเจ็คจาก <code>GitHub</code> หรือที่เก็บข้อมูลที่กำหนด</li>
            <li>อัพโหลดโปรเจ็คไดอะล็อกโฟลว์ไปยังระบบ</li>
            <li>ตั้งค่าฐานข้อมูล PostgreSQL ตาม schema ที่จัดเตรียมไว้</li>
            <li>เปิด Docker และเชื่อมต่อฐานข้อมูล PostgreSQL ที่ตั้งไว้</li>
            <li>รัน Backend ด้วยคำสั่ง <code>node app.js</code> หรือ <code>npm start</code></li>
            <li>เชื่อมต่อ <strong>Webhook URL</strong> กับ Dialogflow และ LINE Messaging API</li>
            <li>รัน <strong>Ngrok</strong> เพื่อเชื่อมต่อกับ Dialogflow</li>
            <li>ทดสอบแชทบอทผ่าน <strong>LINE Application</strong></li>
            <li>หน้า Admin เข้าโฟเดอร์ <strong>front-end</strong> รัน <code>npm run dev</code></li>
          </ol>
          <p className="mt-4 text-[#3E4E40] text-lg">สามารถดูเพิ่มเติมได้ที่ <a href="https://drive.google.com/file/d/1oxhEOqzIL-NTtE1wO_INjLf0v98poeRF/view?usp=sharing" className="text-[#FFBB30] hover:underline">User Manual</a></p>
        </div>

        {/* Download Section */}
        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/cholthichaa/Chatbot_Khonkaen"
            className="inline-flex items-center px-6 py-3 bg-[#FFBB30] text-white rounded-full hover:bg-[#FF9E0D] transition duration-300"
          >
            <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
            ดาวน์โหลดโปรเจ็ค
          </a>
        </div>
      </div>
    </div >
  );
}
