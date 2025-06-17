import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Navbar from '../Navbar.jsx';
import "@fontsource/fredoka"; // Make sure the font is imported here
import Img3 from "../assets/User01.png";
import Img4 from "../assets/User02.png";
import Img5 from "../assets/User03.png";
import Img6 from "../assets/User04.png";
import Img7 from "../assets/User05.png";
import Img8 from "../assets/User06.png";
import Img9 from "../assets/User07.png";
import Img10 from "../assets/User08.png";
import Img11 from "../assets/User10.png";

import Admin20 from "../assets/สกรีนช็อต 2025-01-17 182020.png";
import Admin19 from "../assets/C9.png";
import Admin18 from "../assets/C8.png";
import Admin17 from "../assets/C7.png";
import Admin16 from "../assets/C6.png";
import Admin15 from "../assets/C5.png";
import Admin14 from "../assets/C4.png";
import Admin13 from "../assets/C3.png";
import Admin12 from "../assets/C2.png";
import Admin11 from "../assets/C1.png";
import Admin10 from "../assets/course10.png";
import Admin9 from "../assets/course09.png";
import Admin8 from "../assets/course08.png";
import Admin7 from "../assets/course07.png";
import Admin6 from "../assets/course06.png";
import Admin5 from "../assets/course05.png";
import Admin4 from "../assets/course04.png";
import Admin3 from "../assets/course03.png";
import Admin2 from "../assets/course02.png";
import Admin1 from "../assets/course01.png";

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
            📖 Course-Online-Management
          </h1>
          <p className="mt-4 text-lg text-[#3E4E40]">
            การพัฒนาระบบการจัดการคอร์สออนไลน์
          </p>
        </div>

        {/* User Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-[#3E4E40] text-center mb-6">ส่วน User</h2>

          {/* User Main Image Display */}
          <div className="flex justify-center mt-10">
            <div className="w-full max-w-4xl relative">  {/* ปรับ max-w-md ให้เล็กลง */}
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
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin8}
                alt="User Thumbnail 7"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin8)} // เลือกภาพ Img9
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin9}
                alt="User Thumbnail 7"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin9)} // เลือกภาพ Img9
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin10}
                alt="User Thumbnail 7"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin10)} // เลือกภาพ Img9
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin11}
                alt="User Thumbnail 7"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin11)} // เลือกภาพ Img9
              />
            </div><div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin12}
                alt="User Thumbnail 7"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin12)} // เลือกภาพ Img9
              />
            </div><div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin13}
                alt="User Thumbnail 7"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin13)} // เลือกภาพ Img9
              />
            </div><div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin14}
                alt="User Thumbnail 7"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin14)} // เลือกภาพ Img9
              />
            </div><div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin15}
                alt="User Thumbnail 7"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin15)} // เลือกภาพ Img9
              />
            </div><div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin16}
                alt="User Thumbnail 7"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin16)} // เลือกภาพ Img9
              />
            </div><div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin17}
                alt="User Thumbnail 7"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin17)} // เลือกภาพ Img9
              />
            </div><div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin18}
                alt="User Thumbnail 7"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin18)} // เลือกภาพ Img9
              />
            </div><div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin19}
                alt="User Thumbnail 7"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin19)} // เลือกภาพ Img9
              />
            </div><div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Admin20}
                alt="User Thumbnail 7"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClickAdmin(Admin20)} // เลือกภาพ Img9
              />
            </div>

          </div>
        </div>

        {/* Project Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Core Functions */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">ฟีเจอร์หลัก</h2>
            <ul className="mt-4 text-[#3E4E40] text-lg list-inside list-disc space-y-2">
              <li>การจัดการผู้ใช้ (Authentication, Authorization)</li>
              <li>การจัดการคอร์ส (CRUD: Create, Read, Update, Delete)</li>
              <li>ระบบการลงทะเบียนเรียนและจัดการคำสั่งซื้อคอร์ส</li>
              <li>Dashboard สำหรับผู้สอนและผู้ดูแลระบบ</li>
              <li>ระบบ Inbox สำหรับผู้สอนตอบคำถามผู้เรียน</li>
              <li>ระบบแสดงคอร์สที่ผู้ใช้สนใจ (Favorite)</li>
              <li>ระบบจัดการสถานะคำสั่งซื้อ เช่น ยืนยัน ยกเลิก และจบคอร์ส</li>
              <li>API สำหรับให้ Front-End ดึงข้อมูล</li>
            </ul>

            <div className="mt-6 text-[#3E4E40] text-lg">
              <h3 className="font-bold mb-2">Figma Links:</h3>
              <ul className="space-y-2">
                <li><a href="https://www.figma.com/design/nkL9a5XWFPCo9YQSevkRGQ/Course-Online?node-id=34-2&t=CTPSqLPECrIuXxJa-1" target="_blank" className="text-[#edcb32] hover:underline">Figma Design - System Overview</a></li>
                <li><a href="https://www.figma.com/proto/nkL9a5XWFPCo9YQSevkRGQ/Course-Online?node-id=37-6&p=f&t=VOrwWydDwNwXuhsA-1&scaling=min-zoom&content-scaling=fixed&page-id=34%3A2&starting-point-node-id=37%3A6" target="_blank" className="text-[#edcb32] hover:underline">Figma Design - Admin</a></li>
                <li><a href="https://www.figma.com/proto/nkL9a5XWFPCo9YQSevkRGQ/Course-Online?node-id=179-4752&p=f&t=CTPSqLPECrIuXxJa-0&scaling=min-zoom&content-scaling=fixed&page-id=34%3A3&starting-point-node-id=75%3A10431&show-proto-sidebar=1" target="_blank" className="text-[#edcb32] hover:underline">Figma Design - User</a></li>
              </ul>
            </div>
          </div>


          {/* Technologies Used */}
          <div className="bg-[#FFE6A7] p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">เทคโนโลยีและเครื่องมือที่ใช้</h2>
            <p className="mt-4 text-[#3E4E40] text-lg">
              <strong>Backend:</strong><br />
              <strong>Next.js:</strong> ใช้พัฒนา API และรองรับ Server-Side Rendering (SSR) ช่วยให้ระบบทำงานเร็วและเหมาะกับ SEO<br />
              <strong>Prisma ORM:</strong> เชื่อมต่อและจัดการฐานข้อมูล PostgreSQL ด้วย Object-Relational Mapping (ORM) ทำให้เขียนคำสั่งฐานข้อมูลง่ายและปลอดภัย<br />
              <strong>PostgreSQL:</strong> ฐานข้อมูลเชิงสัมพันธ์หลักสำหรับจัดเก็บข้อมูลผู้ใช้ คอร์ส รายการสั่งซื้อ และข้อมูลอื่น ๆ<br />
              <strong>Docker:</strong> ใช้สำหรับรันฐานข้อมูล PostgreSQL ในคอนเทนเนอร์ เพื่อความสะดวกในการตั้งค่าและจัดการฐานข้อมูล<br />
              <strong>JWT (JSON Web Token):</strong> ใช้สำหรับระบบยืนยันตัวตน (Authentication) และกำหนดสิทธิ์การเข้าถึง (Authorization) อย่างปลอดภัย<br />
              <strong>Frontend:</strong><br />
              <strong>Vue.js:</strong> Framework JavaScript สำหรับสร้าง User Interface แบบ Reactive และ Component-based ช่วยให้พัฒนา UI ได้เร็วและจัดการสถานะข้อมูลง่าย<br />
              <strong>Tailwind CSS / Vuetify:</strong><br />
              <strong>Tailwind CSS:</strong> ใช้ตกแต่งหน้าตาเว็บให้สวยงามและรองรับการแสดงผลในทุกอุปกรณ์ เน้นเขียน CSS แบบ Utility-first<br />
              <strong>Vuetify:</strong> UI Library ที่สร้างบน Vue.js พร้อม Component ให้ใช้งานจำนวนมาก
            </p>
          </div>


        </div>

        {/* Core Functions */}
        <div className="bg-white p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">หลักการทำงานเบื้องหลัง</h2>
          <ul className="mt-4 text-[#3E4E40] text-lg list-inside list-disc space-y-2">
            <li>ใช้ JWT สำหรับยืนยันตัวตนและจัดการสิทธิ์ผู้ใช้งาน</li>
            <li>Backend พัฒนาโดย Next.js พร้อม Prisma ORM เชื่อมต่อฐานข้อมูล PostgreSQL</li>
            <li>Frontend ใช้ Vue.js ดึงข้อมูลผ่าน API และแสดงผลแบบไดนามิก</li>
            <li>ใช้ Tailwind CSS / Vuetify เพื่อทำให้ UI ตอบสนองได้ดีในทุกหน้าจอ</li>
            <li>Modal และฟอร์มช่วยให้ผู้ใช้เพิ่ม แก้ไข หรือลบข้อมูลได้สะดวก</li>
            <li>ระบบจัดการสถานะและข้อมูลต่าง ๆ อย่างเป็นระบบ โดยใช้ Vue.js State Management</li>
          </ul>
          <p className="mt-4 text-[#3E4E40] text-lg">สามารถดูเพิ่มเติมได้ที่ <a href="https://drive.google.com/file/d/1-E5ocsN1FyOauJR_mkOuTYHnJRDqKlIR/view?usp=sharing" className="text-[#FFBB30] hover:underline">User Interface</a></p>

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

          <h3 className="text-2xl font-bold text-[#3E4E40] mt-6 mb-4">ฐานข้อมูล</h3>
          <ul className="mt-4 text-[#3E4E40] text-lg list-inside list-disc space-y-2">
            <li><strong>ใช้ฐานข้อมูล:</strong> PostgreSQL</li>
            <li><strong>การตั้งค่าฐานข้อมูล:</strong> ใช้ Docker เพื่อสร้าง Container สำหรับ PostgreSQL</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#3E4E40] mt-6 mb-4">ตารางหลัก</h3>
          <ul className="mt-4 text-[#3E4E40] text-lg list-inside list-disc space-y-2">
            <li><strong>users:</strong> ข้อมูลผู้ใช้งาน เช่น ผู้สอนและผู้เรียน</li>
            <li><strong>user_favorite_courses:</strong> ข้อมูลการกดชื่นชอบคอร์ส</li>
            <li><strong>role:</strong> บทบาทของผู้ใช้ แอดมิน อาจารย์ ผู้ใช้</li>
            <li><strong>question:</strong> เก็บคำถามสำหรับผู้ใช้ และบุคคลทั่วไป</li>
            <li><strong>order:</strong> ออเดอร์คอร์สที่ทำการซื้อเรียบร้อยแล้ว</li>
            <li><strong>courses:</strong> ข้อมูลคอร์ส เช่น ชื่อคอร์ส, คำอธิบาย, ผู้สอน</li>
            <li><strong>image:</strong> รูปภาพข้อมูลบทเรียน</li>
            <li><strong>category:</strong> หมวดหมู่คอร์สเรียน</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#3E4E40] mt-6 mb-4">ฟีเจอร์</h3>
          <ul className="mt-4 text-[#3E4E40] text-lg list-inside list-disc space-y-2">
            <li><strong>หน้าจอสำหรับผู้ใช้:</strong>
              <ul className="list-inside list-disc mt-2">
                <li>หน้าเข้าสู่ระบบ</li>
                <li>หน้าสมัครสมาชิก</li>
                <li>หน้าแรก</li>
                <li>หน้ากล่องข้อความสำหรับสอบถามเพิ่มเติม</li>
                <li>หน้าแสดงคอร์สทั้งหมด</li>
                <li>หน้ารายละเอียดคอร์ส</li>
                <li>หน้าข้อมูลคอร์สของฉัน</li>
                <li>หน้าข้อมูลคอร์สที่สนใจ</li>
                <li>หน้าแก้ไขโปรไฟล์</li>
                <li>หน้าเปลี่ยนรหัสผ่าน</li>
              </ul>
            </li>
            <li><strong>หน้าจอสำหรับแอดมินหรือผู้สอน:</strong>
              <ul className="list-inside list-disc mt-2">
                <li>หน้า Dashboard ของผู้สอนและผู้เรียน</li>
                <li>หน้า Inbox สำหรับตอบคำถามสำหรับผู้สอน</li>
                <li>หน้าจัดการคอร์ส</li>
                <li>หน้าเพิ่มคอร์ส</li>
                <li>หน้าแก้ไขคอร์ส (เพิ่ม, ลบ, แก้ไขหมวดหมู่)</li>
                <li>หน้าจัดการผู้ใช้</li>
                <li>หน้าจัดการหมวดหมู่ (เพิ่ม, ลบ, แก้ไขหมวดหมู่)</li>
                <li>หน้าแก้ไขข้อมูลอาจารย์ผู้สอน</li>
                <li>หน้าคอร์สออเดอร์</li>
                <li>หน้า Confirmed Course</li>
                <li>หน้า Cancel Course</li>
                <li>หน้า Complete Course</li>
              </ul>
            </li>
          </ul>

          <p className="mt-4 text-[#3E4E40] text-lg">สามารถดูเพิ่มเติมได้ที่ <a href="https://github.com/cholthichaa/Course-Online-Management" className="text-[#FFBB30] hover:underline">Course-Online-Management</a></p>
        </div>

        {/* Installation and Setup */}
        <div className="bg-white p-8 rounded-2xl shadow-xl mt-12">
          <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">การติดตั้งและใช้งานเบื้องต้น</h2>
          <ol className="text-[#3E4E40] text-lg list-inside list-decimal space-y-4">
            <li><strong>ติดตั้ง Node.js</strong> และ <strong>Docker</strong></li>
            <li>รันฐานข้อมูล PostgreSQL ผ่าน <strong>Docker Container</strong></li>
            <li>ตั้งค่าฐานข้อมูลตาม <strong>schema</strong> ที่เตรียมไว้</li>
            <li>รัน Backend ด้วยคำสั่ง <code>npm start</code> (Next.js) (email: 'emailAdmin@gmail.com', password: '!admin')</li>
            <li>รัน Front-end ด้วยคำสั่ง <code>npm run dev</code></li>
            <li>เปิด Frontend ในเว็บเบราว์เซอร์</li>
            <li>ลงทะเบียนและเริ่มใช้งานระบบได้ทันที</li>
          </ol>
        </div>


        {/* Download Section */}
        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/cholthichaa/Course-Online-Management"
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
