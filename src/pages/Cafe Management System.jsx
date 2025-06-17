import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Navbar from '../Navbar.jsx';
import "@fontsource/fredoka"; // Make sure the font is imported here
import Img3 from "../assets/Cafe_User01.png";
import Img4 from "../assets/Cafe_User02.png";
import Img5 from "../assets/Cafe_User03.png";
import Img6 from "../assets/Cafe_User04.png";
import Img7 from "../assets/Cafe_User05.png";
import Img8 from "../assets/Cafe_User06.png";
import Img9 from "../assets/Cafe_User07.png";
import Img10 from "../assets/Cafe_User08.png";

import Admin8 from "../assets/Cafe01.png";
import Admin7 from "../assets/Cafe02.png";
import Admin6 from "../assets/Cafe03.png";
import Admin5 from "../assets/Cafe04.png";
import Admin4 from "../assets/Cafe05.png";
import Admin3 from "../assets/Cafe06.png";
import Admin2 from "../assets/Cafe07.png";
import Admin1 from "../assets/Cafe08.png";

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
            📖 Cafe Management System
          </h1>
          <p className="mt-4 text-lg text-[#3E4E40]">
            ระบบจัดการร้านกาแฟ
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


          </div>
        </div>

        {/* Project Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Core Functions */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">ฟีเจอร์หลัก</h2>
            <ul className="mt-4 text-[#3E4E40] text-lg list-inside list-disc space-y-2">
              <li>ระบบจัดการร้านกาแฟที่ช่วยบริหารงานร้านอย่างมีประสิทธิภาพ รองรับการจัดการสมาชิก สินค้า หมวดหมู่ สต็อกสินค้า การขาย และรายงานยอดขาย</li>
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="bg-[#FFE6A7] p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">เทคโนโลยีและเครื่องมือที่ใช้</h2>
            <p className="mt-4 text-[#3E4E40] text-lg">
              <strong>ภาษาโปรแกรม:</strong><br />
              <strong>Java:</strong> ใช้ภาษาโปรแกรมหลักในการพัฒนา<br />
              <strong>Spring Boot Framework:</strong> ใช้สถาปัตยกรรม MVC สำหรับการพัฒนาแอปพลิเคชันเว็บ<br />
              <strong>Frontend:</strong><br />
              <strong>HTML:</strong> ใช้สำหรับพัฒนาโครงสร้างหน้าเว็บ<br />
              <strong>ฐานข้อมูล:</strong><br />
              <strong>MySQL:</strong> ฐานข้อมูลที่ใช้ในการจัดเก็บข้อมูลของระบบ<br />
              <strong>IDE:</strong><br />
              <strong>IntelliJ IDEA:</strong> ใช้ในการพัฒนาและจัดการโปรเจกต์ Java<br />
            </p>
            <h3 className="text-xl font-bold text-[#3E4E40] mt-6 mb-2">Framework และเครื่องมือเสริม:</h3>
            <ul className="list-inside list-disc text-[#3E4E40] text-lg space-y-2">
              <li><strong>Spring Boot:</strong> ใช้สำหรับพัฒนาแอปพลิเคชันในรูปแบบ RESTful API ด้วยสถาปัตยกรรม MVC</li>
              <li><strong>Spring Security:</strong> ใช้ในการจัดการระบบล็อกอินและสิทธิ์การใช้งาน</li>
              <li><strong>JPA / Hibernate:</strong> ORM สำหรับการเชื่อมต่อและจัดการฐานข้อมูล MySQL</li>
              <li><strong>Lombok:</strong> เครื่องมือช่วยลดโค้ด boilerplate เช่น getter/setter</li>
            </ul>
          </div>
        </div>

        {/* Core Functions */}
        <div className="bg-white p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">หลักการทำงานเบื้องหลัง</h2>

          <hr className="my-6 border-gray-300" />

          <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">โครงสร้างระบบ (Architecture)</h2>
          <ul className="text-[#3E4E40] text-lg list-inside list-disc space-y-2">
            <li><strong>Model-View-Controller (MVC):</strong> แบ่งแยกหน้าที่ของระบบออกเป็น 3 ส่วน
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Model:</strong> จัดการข้อมูลและแมปกับฐานข้อมูล (Entity Classes เช่น Admin, Customer, Product ฯลฯ)</li>
                <li><strong>View:</strong> ส่วนแสดงผลบนเว็บ (HTML)</li>
                <li><strong>Controller:</strong> รับคำขอจากผู้ใช้และประสานงานกับ Model และ View</li>
              </ul>
            </li>
            <li><strong>ฐานข้อมูลและ Entity หลัก:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Admins, Customers, Products, Categories, ShoppingCart, CartItems</li>
                <li>ความสัมพันธ์ระหว่าง Entity เช่น:
                  <ul className="list-disc pl-5">
                    <li>Customer 1:1 ShoppingCart</li>
                    <li>ShoppingCart 1:N CartItem</li>
                    <li>CartItem 1:1 Product</li>
                    <li>Product N:1 Category</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <hr className="my-6 border-gray-300" />

          <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">ฟังก์ชันหลักของระบบ</h2>
          <ul className="text-[#3E4E40] text-lg list-inside list-disc space-y-2">
            <li><strong>จัดการข้อมูลผู้ใช้:</strong> สมัครสมาชิก, แก้ไขข้อมูล, ล็อกอินด้วย Spring Security</li>
            <li><strong>จัดการสินค้าและคลังสินค้า:</strong> เพิ่ม/แก้ไข/ลบสินค้า, อัปเดตสต็อก</li>
            <li><strong>การขายสินค้า:</strong> ลูกค้าเลือกสินค้า, เพิ่มในตะกร้า, คำนวณราคา, ตรวจสอบประวัติคำสั่งซื้อ</li>
            <li><strong>ระบบผู้ดูแล:</strong> ตรวจสอบสมาชิก, จัดการคำสั่งซื้อ, รายงานยอดขาย</li>
          </ul>

          <hr className="my-6 border-gray-300" />

          <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">การเชื่อมต่อฐานข้อมูล & Dependency Injection</h2>
          <ul className="text-[#3E4E40] text-lg list-inside list-disc space-y-2">
            <li><strong>ใช้ Spring Data JPA:</strong> เชื่อมกับฐานข้อมูล MySQL</li>
            <li><strong>กำหนด Entity:</strong> ใช้ annotation เช่น <code>@Entity</code>, <code>@Id</code>, <code>@Table</code>, <code>@GeneratedValue</code></li>
            <li><strong>Repository Interfaces:</strong> เช่น <code>AdminRepository</code>, <code>CustomerRepository</code></li>
            <li><strong>Dependency Injection:</strong> ใช้ <code>@Autowired</code> เพื่อนำ Service หรือ Repository มาใช้โดยไม่ต้อง new เอง</li>
            <li><strong>Service Layer:</strong> แยก Business Logic ออกจาก Controller เพื่อความเป็นระเบียบและง่ายต่อการดูแล</li>
          </ul>

          <p className="mt-6 text-[#3E4E40] text-lg">
            สามารถดูเพิ่มเติมได้ที่ <a href="https://github.com/cholthichaa/CafeProject_Spring-Boot.git" className="text-[#FFBB30] hover:underline">Document Project</a>
          </p>
        </div>



        {/* Download Section */}
        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/cholthichaa/CafeProject_Spring-Boot.git"
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
