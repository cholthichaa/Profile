import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Navbar from '../Navbar.jsx';
import "@fontsource/fredoka"; // Make sure the font is imported here
import Img3 from "../assets/รูปภาพ1.png";
import Img4 from "../assets/รูปภาพ2.png";
import Img5 from "../assets/รูปภาพ3.png";
import Img6 from "../assets/รูปภาพ4.png";
import Img7 from "../assets/รูปภาพ5.png";

export default function ChatbotProject() {
  const [selectedImage, setSelectedImage] = useState(Img3);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };


  return (
    <div className="bg-[#FFFAE1] min-h-screen font-fredoka">
      <Navbar />
      <div className="max-w-7xl mx-auto p-10 space-y-10">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-[#3E4E40]">
            🧠 Toxic-comment-classification
          </h1>
          <p className="mt-4 text-lg text-[#3E4E40]">
            วิเคราะห์ความเป็นพิษและอารมณ์ของข้อความภาษาไทย
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

          </div>
        </div>

        {/* Project Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Core Functions */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">ฟีเจอร์หลัก</h2>
            <ul className="mt-4 text-[#3E4E40] text-lg list-inside list-disc space-y-2">
              <li>โปรเจกต์นี้เป็น API สำหรับวิเคราะห์ความเป็นพิษและอารมณ์ของข้อความภาษาไทยโดยใช้โมเดลภาษาไทยที่เทรนไว้ในรูปแบบ ONNX เพื่อการประมวลผลที่รวดเร็วและแม่นยำ</li>

            </ul>


          </div>


          {/* Technologies Used */}
          <div className="bg-[#FFE6A7] p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">เทคโนโลยีและเครื่องมือที่ใช้</h2>
            <p className="mt-4 text-[#3E4E40] text-lg">
              <strong>ภาษาโปรแกรม:</strong><br />
              <strong>Python 3.x:</strong> ภาษาโปรแกรมหลักในการพัฒนา<br />
              <strong>FastAPI:</strong> สร้าง RESTful API รองรับ JSON และ HTTP POST<br />
              <strong>Uvicorn:</strong> ASGI server สำหรับรัน FastAPI แบบ asynchronous<br />
              <strong>ONNX Runtime:</strong> รันโมเดล ONNX อย่างรวดเร็ว<br />
              <strong>PyThaiNLP:</strong> ประมวลผลภาษาไทย เช่น ตัดคำ (tokenization)<br />
              <strong>NumPy:</strong> จัดการ array ข้อมูลอินพุตและผลลัพธ์<br />
              <strong>re (Regular Expression):</strong> ทำความสะอาดข้อความ เช่น ลบอีโมจิ<br />
              <strong>pydantic:</strong> สร้าง schema และตรวจสอบรูปแบบ JSON<br />
            </p>
          </div>

        </div>



        {/* Core Functions */}
        <div className="bg-white p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">หลักการทำงานเบื้องหลัง</h2>
          <ul className="mt-4 text-[#3E4E40] text-lg list-inside list-disc space-y-2">
            <li><strong>รับข้อความอินพุต:</strong> รับข้อความภาษาไทยผ่าน HTTP POST API ที่ endpoint <code>/predict</code></li>
            <li><strong>การทำความสะอาดข้อความ (Text Cleaning & Preprocessing):</strong> ลบอีโมจิและสัญลักษณ์พิเศษต่าง ๆ ด้วยฟังก์ชัน <code>deEmojify()</code> และลบช่องว่างที่เกินความจำเป็น เช่น \n</li>
            <li><strong>ตัดคำภาษาไทย:</strong> ใช้ไลบรารี <code>pythainlp.tokenize.word_tokenize</code> เพื่อแยกคำเนื่องจากภาษาไทยไม่มีการเว้นวรรค</li>
            <li><strong>แปลงคำเป็นตัวเลข (Tokenization and Mapping to IDs):</strong> แปลงข้อความที่ตัดคำแล้วเป็นลำดับตัวเลข (Token IDs) โดยใช้พจนานุกรมที่เก็บในไฟล์ <code>token2idx.json</code></li>
            <li><strong>การประมวลผลด้วยโมเดล (Model Inference):</strong> ใช้โมเดลที่ถูกเทรนมาแล้วและแปลงเป็นไฟล์ .onnx เพื่อความเร็วในการประมวลผล โดยโมเดลจะประมวลผลลำดับ Token IDs และให้ความน่าจะเป็นของแต่ละคลาส (positive, negative, neutral)</li>
            <li><strong>ส่งผลลัพธ์กลับ (Output Response):</strong> ผลลัพธ์จะถูกแปลงจากดัชนีของคลาสเป็นชื่อคลาสจริง โดยอ้างอิงจากไฟล์ <code>idx2lab.json</code> และส่งกลับในรูปแบบ JSON เช่น prediction positive </li>
          </ul>
          <p className="mt-4 text-[#3E4E40] text-lg">สามารถดูเพิ่มเติมได้ที่ <a href="https://drive.google.com/file/d/1WrSAaPd4P0HMIE39Jdpai5BeAx_gkaq8/view?usp=sharing" className="text-[#FFBB30] hover:underline">Document Project</a></p>
        </div>


        {/* Download Section */}
        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/cholthichaa/Toxic-comment-classification"
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
