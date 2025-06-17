import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Navbar from '../Navbar.jsx';
import "@fontsource/fredoka";


export default function ChatbotProject() {



  return (
    <div className="bg-[#FFFAE1] min-h-screen font-fredoka">
      <Navbar />
      <div className="max-w-7xl mx-auto p-10 space-y-10">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-[#3E4E40]">
            Additional-work
          </h1>
          <p className="mt-4 text-lg text-[#3E4E40]">
          </p>
        </div>

        {/* Additional Work Section */}
        <div className="bg-[#ffffff] p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">📌 Additional-work</h2>
          <p className="text-[#3E4E40] text-lg mb-4">ข้อมูลเพิ่มเติมเกี่ยวกับการออกแบบระบบต่าง ๆ และผลงานที่เกี่ยวข้อง</p>
          <ul className="list-disc list-inside space-y-2 text-[#3E4E40] text-lg">
            <li><a href="https://drive.google.com/drive/folders/1sF4KhkAG-zpqxIxtCOrtMrzk_6x6Ykpt?usp=drive_link" className="text-[#FF8C00] hover:underline" target="_blank">📂 ข้อมูลเพิ่มเติมเกี่ยวกับการออกแบบระบบต่างๆ</a></li>
            <li><a href="https://drive.google.com/file/d/1rt-AKAgwJG2GeA-5V6G62tMl-Op_t6em/view?usp=sharing" className="text-[#FF8C00] hover:underline" target="_blank">📄 ผลงานรวมทั้งหมด</a></li>
            <li><a href="https://www.canva.com/design/DAGgUliQhIY/SRue0Phsohnk77RObrqoCg/edit?utm_content=DAGgUliQhIY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="text-[#FF8C00] hover:underline" target="_blank">🧩 การออกแบบสถาปัตยกรรมระบบ</a></li>
            <li><a href="https://drive.google.com/file/d/1JqlB8n7vfmyArQgFe9jyNyVlcf9UGz2I/view?usp=sharing" className="text-[#FF8C00] hover:underline" target="_blank">🧠 การวิเคราะห์ระบบ (Use case diagram, Sequence diagram)</a></li>
            <li><a href="https://drive.google.com/drive/folders/10aYK3ZqOeJwJEz8FoHCbJcQjIE3ZZwrt?usp=sharing" className="text-[#FF8C00] hover:underline" target="_blank">🧪 การเขียน Test Case</a></li>
            <li><a href="https://drive.google.com/file/d/1W2zYkFd00LDINkLL-I5VuYLj6Ui-iPzE/view?usp=sharing" className="text-[#FF8C00] hover:underline" target="_blank">🧳 โปรแกรมการท่องเที่ยวสำหรับแชทบอท</a></li>
            <li><a href="https://online.fliphtml5.com/mglsm/rlvg/?fbclid=IwY2xjawJSBFBleHRuA2FlbQIxMAABHS47AjvhvDYdOptwg0KEhrN8uWT1vqo0EBIlidCY2BTdvoQjKpqKuKwd1Q_aem_7l-VLC0ACN0VBglEpagKxA#p=1" className="text-[#FF8C00] hover:underline" target="_blank">📘 E-Book โปรแกรมการท่องเที่ยว</a></li>
            <li><a href="https://drive.google.com/drive/folders/1JXgxTserG3f9KdojA7ltjILuoPZMJeUA" className="text-[#FF8C00] hover:underline" target="_blank">📷 หน้าจอระบบสหกรณ์การเกษตร</a></li>
            <li><a href="https://drive.google.com/drive/folders/126im8Ha1_ECAx1nQh95HlJK1SQSJPv9V?usp=drive_link" className="text-[#FF8C00] hover:underline" target="_blank">📑 เอกสารรายงาน / คู่มือ / เปเปอร์วิจัย</a></li>
          </ul>
        </div>

        <div className="bg-[#ffffff] p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-[#3E4E40] mb-4">📌 Figma</h2>
          <p className="text-[#3E4E40] text-lg mb-4">ข้อมูลเพิ่มเติมเกี่ยวกับการออกแบบระบบต่าง ๆ</p>
          <ul className="list-disc list-inside space-y-2 text-[#3E4E40] text-lg">
            {/* ระบบจัดการคอร์สออนไลน์ */}
            <li>
              <span className="font-semibold">🎓 ระบบจัดการคอร์สออนไลน์</span>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  <a href="https://www.figma.com/design/CYPiMz7GyDb5twVE6ylnLf/COM?node-id=0-1&t=C7lbMQtJYYt0jbfz-1" className="text-[#FF8C00] hover:underline" target="_blank">
                    📄 Figma Design
                  </a>
                </li>
                <li>
                  <a href="https://www.figma.com/proto/CYPiMz7GyDb5twVE6ylnLf/COM?node-id=37-6&p=f&t=oNy6rnsapG88pdDU-1&scaling=min-zoom&content-scaling=fixed&page-id=34%3A2&starting-point-node-id=37%3A6" className="text-[#FF8C00] hover:underline" target="_blank">
                    🧑‍💻 Admin Prototype
                  </a>
                </li>
                <li>
                  <a href="https://www.figma.com/proto/CYPiMz7GyDb5twVE6ylnLf/COM?node-id=179-4752&p=f&t=qF71iQqXmoSV6N1k-1&scaling=min-zoom&content-scaling=fixed&page-id=34%3A3&starting-point-node-id=75%3A10431&show-proto-sidebar=1" className="text-[#FF8C00] hover:underline" target="_blank">
                    🙋‍♂️ User Prototype
                  </a>
                </li>
              </ul>
            </li>

            {/* แชทบอทการท่องเที่ยว */}
            <li>
              <span className="font-semibold">🧳 แชทบอทการท่องเที่ยว</span>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  <a href="https://www.figma.com/design/HUixYxLN0lm880QQrvltF6/SuperAi?node-id=19-38&t=DJnHUqjd9YYKC0N8-1" className="text-[#FF8C00] hover:underline" target="_blank">
                    📄 Figma Design (User)
                  </a>
                </li>
                <li>
                  <a href="https://www.figma.com/design/HUixYxLN0lm880QQrvltF6/SuperAi?node-id=19-37&t=HOjTXm4lkmhk0vxA-1" className="text-[#FF8C00] hover:underline" target="_blank">
                    📄 Figma Design (Admin)
                  </a>
                </li>
                <li>
                  <a href="https://www.figma.com/proto/HUixYxLN0lm880QQrvltF6/SuperAi?node-id=154-1634&p=f&t=gfaqr2e3kBnosZbY-1&scaling=min-zoom&content-scaling=fixed&page-id=19%3A38&starting-point-node-id=154%3A1634" className="text-[#FF8C00] hover:underline" target="_blank">
                    🙋‍♀️ User Prototype
                  </a>
                </li>
              </ul>
            </li>

            {/* ระบบจัดการหน้าร้าน */}
            <li>
              <span className="font-semibold">🛒 ระบบจัดการหน้าร้าน</span>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>
                  <a href="https://www.figma.com/design/HFiM1So25tnlTgNUvL7kcP/Untitled?node-id=0-1&t=JzvJkD7gBolhN0JH-1" className="text-[#FF8C00] hover:underline" target="_blank">
                    📄 Figma Design
                  </a>
                </li>
                <li>
                  <a href="https://www.figma.com/proto/HFiM1So25tnlTgNUvL7kcP/POS?node-id=2-1097&starting-point-node-id=25%3A2039" className="text-[#FF8C00] hover:underline" target="_blank">
                    🧑‍💼 Admin Prototype
                  </a>
                </li>
                <li>
                  <a href="https://www.figma.com/proto/HFiM1So25tnlTgNUvL7kcP/POS?node-id=28-3460&starting-point-node-id=36%3A3703" className="text-[#FF8C00] hover:underline" target="_blank">
                    💵 Cashier Prototype
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>


        {/* Download Section */}
        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/cholthichaa/Additional-work"
            className="inline-flex items-center px-6 py-3 bg-[#FFBB30] text-white rounded-full hover:bg-[#FF9E0D] transition duration-300"
          >
            <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
            ดูโปรเจ็คเพิ่มเติม
          </a>
        </div>
      </div>
    </div >
  );
}
