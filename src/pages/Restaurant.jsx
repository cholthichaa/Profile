import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Navbar from '../Navbar.jsx';
import "@fontsource/fredoka"; // Make sure the font is imported here

import Img0 from "../assets/L1.png";
import Img1 from "../assets/CA1.png";
import Img2 from "../assets/CA2.png";
import Img3 from "../assets/CA3.png";
import Img4 from "../assets/CA4.png";
import Img5 from "../assets/CA5.png";
import Img6 from "../assets/CA6.png";
import Img7 from "../assets/CA7.png";
import Img8 from "../assets/CA8.png";
import Img9 from "../assets/CA9.png";
import Img10 from "../assets/CA10.png";
import Img11 from "../assets/CA11.png";
import Img12 from "../assets/CA12.png";
import Img13 from "../assets/CA13.png";

import Admin15 from "../assets/A15.png";
import Admin14 from "../assets/A14.png";
import Admin13 from "../assets/A13.png";
import Admin12 from "../assets/A12.png";
import Admin11 from "../assets/A11.png";
import Admin10 from "../assets/A10.png";
import Admin9 from "../assets/A9.png";
import Admin8 from "../assets/A8.png";
import Admin7 from "../assets/A7.png";
import Admin6 from "../assets/A6.png";
import Admin5 from "../assets/A5.png";
import Admin4 from "../assets/A4.png";
import Admin3 from "../assets/A3.png";
import Admin2 from "../assets/A2.png";
import Admin1 from "../assets/A1.png";

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
            🍽️ ระบบจัดการหน้าร้าน Point of Sale (POS)
          </h1>

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
                src={Img0}
                alt="User Thumbnail 1"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClick(Img0)} // เลือกภาพ Img3
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Img1}
                alt="User Thumbnail 1"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClick(Img1)} // เลือกภาพ Img3
              />
            </div>
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Img2}
                alt="User Thumbnail 1"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClick(Img2)} // เลือกภาพ Img3
              />
            </div>
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
            <div className="w-24 h-16 cursor-pointer border-4 border-transparent hover:border-[#FFBB30] transition duration-300">
              <img
                src={Img13}
                alt="User Thumbnail 8"
                className="w-full h-full object-cover rounded-lg"
                onClick={() => handleThumbnailClick(Img13)} // เลือกภาพ Img10
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
            </div>

          </div>
        </div>

        {/* Project Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* System Description */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl mt-12">
            <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">ระบบจัดการหน้าร้านอาหาร</h2>
            <p className="mt-4 text-[#3E4E40] text-lg">
              ระบบนี้เป็นระบบจัดการหน้าร้านอาหารที่ถูกออกแบบมาเพื่อช่วยให้ผู้จัดการร้านและพนักงานแคชเชียร์สามารถบริหารจัดการงานได้อย่างมีประสิทธิภาพและง่ายดาย โดยระบบจะแบ่งการทำงานเป็นสองส่วนหลัก คือ
              <strong>ฝั่งผู้ดูแลระบบ (Admin/ผู้จัดการ)</strong> และ <strong>ฝั่งแคชเชียร์ (Cashier)</strong>.
            </p>

            <h3 className="text-xl font-bold text-[#3E4E40] mt-6 mb-2">Figma Designs:</h3>
            <ul className="mt-4 text-[#3E4E40] text-lg space-y-2">
              <li><a href="https://www.figma.com/design/HFiM1So25tnlTgNUvL7kcP/POS?node-id=0-1&p=f&t=KvRiaNnlSxLQkoOM-0" className="text-[#FFBB30] hover:underline">Figma Main Design</a></li>
              <li><a href="https://www.figma.com/proto/HFiM1So25tnlTgNUvL7kcP/POS?node-id=2-1097&starting-point-node-id=25%3A2039" className="text-[#FFBB30] hover:underline">Admin Design</a></li>
              <li><a href="https://www.figma.com/proto/HFiM1So25tnlTgNUvL7kcP/POS?node-id=28-3460&starting-point-node-id=36%3A3703" className="text-[#FFBB30] hover:underline">Cashier Design</a></li>
            </ul>

          </div>

          {/* Technologies Used */}
          <div className="bg-[#FFE6A7] p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">เทคโนโลยีและเครื่องมือที่ใช้</h2>
            <p className="mt-4 text-[#3E4E40] text-lg">
              <strong>Frontend:</strong><br />
              <strong>React / TypeScript:</strong> ใช้สำหรับพัฒนา UI และจัดการข้อมูลด้วย TypeScript ช่วยให้โค้ดมีความปลอดภัยและชัดเจน<br />
              <strong>Tailwind CSS:</strong> ใช้ในการตกแต่งหน้าตาเว็บให้สวยงามและรองรับการแสดงผลในทุกอุปกรณ์โดยไม่ต้องเขียน CSS แบบปกติ<br />
            </p>
            <p className="mt-4 text-[#3E4E40] text-lg">
              <strong>Backend:</strong><br />
              <strong>Node.js / Express:</strong> ใช้สำหรับพัฒนา RESTful API และเชื่อมต่อฐานข้อมูล พร้อมทั้งรองรับการจัดการ HTTP request ได้อย่างมีประสิทธิภาพ<br />
            </p>
            <p className="mt-4 text-[#3E4E40] text-lg">
              <strong>ฐานข้อมูล:</strong><br />
              <strong>PostgreSQL:</strong> ฐานข้อมูลเชิงสัมพันธ์สำหรับจัดเก็บข้อมูลในระบบอย่างปลอดภัยและสามารถปรับขยายได้ง่าย<br />
            </p>
            <p className="mt-4 text-[#3E4E40] text-lg">
              <strong>Authentication:</strong><br />
              <strong>JWT หรือ Session-based authentication:</strong> ใช้สำหรับยืนยันตัวตนของผู้ใช้งานและการจัดการสิทธิ์การเข้าถึงข้อมูลในระบบ<br />
            </p>
            <p className="mt-4 text-[#3E4E40] text-lg">
              <strong>การพิมพ์ใบเสร็จ:</strong><br />
              <strong>Integration กับระบบพิมพ์:</strong> ใช้ระบบพิมพ์ (เช่น Thermal Printer) สำหรับการพิมพ์ใบเสร็จออกจากระบบ<br />
            </p>
          </div>


        </div>

        {/* Core Functions */}
        <div className="bg-white p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">ขอบเขตของระบบ</h2>

          <h3 className="text-2xl font-bold text-[#3E4E40] mt-6 mb-4">ฐานข้อมูล</h3>
          <ul className="mt-4 text-[#3E4E40] text-lg list-inside list-disc space-y-2">
            <li><strong>ใช้ฐานข้อมูล:</strong> PostgreSQL</li>
            <li><strong>การตั้งค่าฐานข้อมูล:</strong> ใช้ Docker เพื่อสร้าง Container สำหรับ PostgreSQL</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#3E4E40] mt-6 mb-4">สำหรับ Admin / ผู้จัดการ</h3>
          <ul className="mt-4 text-[#3E4E40] text-lg list-inside list-disc space-y-2">
            <li>ระบบล็อกอินและล็อกเอาท์ เพื่อความปลอดภัยในการเข้าใช้งาน</li>
            <li>จัดการข้อมูลพนักงาน เช่น เพิ่ม ลบ แก้ไขข้อมูล รวมถึงการรีเซ็ตรหัสผ่าน</li>
            <li>จัดการข้อมูลอาหาร ทั้งการเพิ่ม ลบ และแก้ไขเมนูอาหาร</li>
            <li>จัดการหมวดหมู่อาหาร ทั้งการเพิ่ม ลบ และแก้ไข</li>
            <li>จัดการข้อมูลโต๊ะในร้าน เช่น เพิ่ม ลบ แก้ไขรายละเอียดโต๊ะ</li>
            <li>จัดการโซนโต๊ะอาหาร ทั้งการเพิ่ม ลบ และแก้ไขเมนูอาหาร</li>
            <li>ดูรายการบิลทั้งหมดที่เกิดขึ้นในร้าน</li>
            <li>รายงานภาพรวม (Dashboard)</li>

          </ul>

          <h3 className="text-2xl font-bold text-[#3E4E40] mt-6 mb-4">สำหรับแคชเชียร์</h3>
          <ul className="mt-4 text-[#3E4E40] text-lg list-inside list-disc space-y-2">
            <ul className="list-inside list-disc mt-2">
              <li>ระบบล็อกอินและล็อกเอาท์สำหรับแคชเชียร์</li>
              <li>เลือกโต๊ะเพื่อเริ่มรับออเดอร์</li>
              <li>จัดการรายการอาหารที่ลูกค้าเลือก รวมถึงบันทึกออเดอร์ใหม่และสั่งอาหารเพิ่ม</li>
              <li>แก้ไขจำนวนรายการอาหารก่อนคิดเงิน</li>
              <li>เช็คบิลและยกเลิกบิลได้ พร้อมพิมพ์ใบเสร็จรับเงิน</li>
              <li>จัดการโซนโต๊ะอาหาร ทั้งการเพิ่ม ลบ และแก้ไขเมนูอาหาร</li>
              <li>คิดเงินและปิดบิล</li>
              <li>ดูรายการขายย้อนหลังเพื่อสรุปและตรวจสอบการขายในอดีต</li>
            </ul>


          </ul>

          <p className="mt-4 text-[#3E4E40] text-lg">สามารถดูเพิ่มเติมได้ที่ <a href="https://github.com/cholthichaa/POS_Point_of_sale" className="text-[#FFBB30] hover:underline">Course-Online-Management</a></p>
        </div>


        {/* Installation and Setup */}
        <div className="bg-white p-8 rounded-2xl shadow-xl mt-12">
          <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">การติดตั้งและใช้งานเบื้องต้น</h2>
          <ol className="text-[#3E4E40] text-lg list-inside list-decimal space-y-4">
            <li><strong>ติดตั้ง Node.js</strong> และ <strong>Docker</strong></li>
            <li>รันฐานข้อมูล PostgreSQL ผ่าน <strong>Docker Container</strong></li>
            <li>ตั้งค่าฐานข้อมูลตาม <strong>schema</strong> ที่เตรียมไว้</li>
            <li>รัน Backend ด้วยคำสั่ง <code>npm run dev</code>  </li>
            <li>รัน Front-end ด้วยคำสั่ง <code>npm npm start</code></li>
            <li>เปิด Frontend ในเว็บเบราว์เซอร์ http://localhost:3000/login </li>
            <li>ลงทะเบียนและเริ่มใช้งานระบบได้ทันที http://localhost:3000/login (Username: 'admin', password: 'admin123') ( Cashier สามารถเพิ่มข้อมูลได้ที่ Admin ) (เข้าสู่ระบบแล้วกรุณารีเฟรขหน้าเพื่อ ) </li>
          </ol>
        </div>


        {/* Download Section */}
        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/cholthichaa/POS_Point_of_sale.git"
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
