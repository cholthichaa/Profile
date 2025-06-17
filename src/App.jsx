import Navbar from "./Navbar";
import Img from "./assets/Image.png";
import "@fontsource/fredoka";
import {
  UserIcon,
  CalendarIcon,
  EnvelopeIcon,
  PhoneIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-[#FFF9EC] via-[#FDF3D4] to-[#FFE6AA] font-[Fredoka] min-h-screen text-[#3E4E40]">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">

        {/* INTRO SECTION */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <img
            src={Img}
            alt="Cholthicha Portrait"
            className="w-80 h-80 md:w-1/3 rounded-full shadow-[0_8px_20px_rgba(253,230,160,0.3)] border-4 border-[#f4a300] object-cover transition-transform hover:scale-105"
          />
          <div>
            <h1 className="text-6xl md:text-4xl font-extrabold leading-tight">
              Hello,<br />I’m Cholthicha! ☀️
            </h1>
            <p className="mt-6 text-xl md:text-lg max-w-xl">
              I am passionate about writing code and turning ideas into beautiful, functional products, especially with modern frameworks.
            </p>
            <a
              href="https://github.com/cholthichaa"
              className="inline-block mt-6 bg-[#f4a300] text-white px-6 py-3 rounded-full hover:bg-yellow-400 text-base font-semibold shadow-md transition hover:scale-105"
            >
              👉 github.com/cholthichaa
            </a>
          </div>
        </div>

        {/* PROFILE & EDUCATION SIDE BY SIDE */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* PERSONAL PROFILE */}
          <div className="bg-[#f4a300] text-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <UserIcon className="w-6 h-6" />
              ประวัติส่วนตัว
            </h2>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <UserIcon className="w-4 h-4" />
                <span><strong>ชื่อ:</strong> Cholthicha Boonsanud (Thicha)</span>
              </li>
              <li className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                <span><strong>อายุ:</strong> 23 ปี</span>
              </li>
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4" />
                <span><strong>อีเมล:</strong> cholthicha.job@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4" />
                <span><strong>เบอร์โทร:</strong> 093-3354531</span>
              </li>
              <li className="flex items-center gap-2">
                <CodeBracketIcon className="w-4 h-4" />
                <span><strong>GitHub:</strong> <a href="https://github.com/cholthichaa" className="underline text-white hover:text-yellow-100" target="_blank" rel="noopener noreferrer">https://github.com/cholthichaa</a></span>
              </li>
              <li className="flex items-center gap-2">
                <CodeBracketIcon className="w-4 h-4" />
                <span><strong>Drive Work:</strong> <a href="https://drive.google.com/file/d/1rt-AKAgwJG2GeA-5V6G62tMl-Op_t6em/view?usp=sharing" className="underline text-white hover:text-yellow-100" target="_blank" rel="noopener noreferrer">ผลงานฉบับไฟล์ PDF</a></span>
              </li>
            </ul>
            <div className="mt-4 space-x-2">
              <span className="bg-white text-[#f4a300] px-3 py-1 rounded-full text-xs font-medium">#Developer</span>
              <span className="bg-white text-[#f4a300] px-3 py-1 rounded-full text-xs font-medium">#PassionateCoder</span>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="bg-white/90 rounded-2xl shadow-md p-6 backdrop-blur-sm border border-yellow-100">
            <h2 className="text-2xl font-bold mb-2">🎓 Education</h2>
            <ul className="text-sm space-y-2">
              <li>
                <strong>👩‍💻 Bachelor of Science in Computer Science</strong><br />
                College of Computing, Khon Kaen University<br />
                2021 – 2024 | GPAX: 3.02
              </li>
              <li>
                📍 Khon Kaen City, Thailand
              </li>
            </ul>
          </div>
        </div>

        {/* PERSONAL QUALITIES & INTERNSHIP */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* STRENGTHS + WEAKNESSES */}
          <div className="bg-[#FFF9EC] text-[#3E4E40] rounded-2xl shadow-md p-6 space-y-4">
            <h2 className="text-xl font-bold">🌟 จุดแข็งและจุดที่กำลังพัฒนา</h2>
            <div>
              <h3 className="font-semibold">✅ ข้อดี</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>มีความรับผิดชอบและทำงานตรงเวลา</li>
                <li>มีทักษะการวางแผนและแก้ปัญหา</li>
                <li>เรียนรู้เทคโนโลยีใหม่ได้รวดเร็ว</li>
                <li>ทำงานร่วมกับทีมได้ดี</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">⚠️ ข้อเสีย</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>ยังไม่มีประสบการณ์ทำงานจริงในองค์กร</li>
                <li>มีความละเอียดรอบคอบสูง ซึ่งบางครั้งอาจใช้เวลามากเกินความจำเป็นกับรายละเอียดเล็กน้อย</li>
              </ul>
            </div>
          </div>

          {/* INTERNSHIP */}
          <div className="bg-white/90 rounded-2xl shadow-md p-6 backdrop-blur-sm border border-yellow-100">
            <h2 className="text-xl font-bold mb-3">📋 ประสบการณ์ฝึกงาน</h2>
            <p className="text-sm">
              ฝึกงานเป็นเวลา <strong>2 เดือน</strong> ในตำแหน่ง <strong>Front-End Developer</strong> ที่บริษัท Electronic Shell Co.,Ltd , Khon Kaen (1 เมษายน – 31 พฤษภาคม 2024) โดยรับผิดชอบการพัฒนา UI ด้วย VUE.JS และ Tailwind CSS รวมถึงเชื่อมต่อ API สำหรับระบบจัดการคอร์สออนไลน์
            </p>
          </div>
        </div>

        {/* SKILLS */}
        <div className="bg-white/90 rounded-2xl shadow-md p-6 backdrop-blur-sm border border-yellow-100">
          <h2 className="text-2xl font-bold mb-4">🛠️ Skills</h2>
          <div className="text-sm grid md:grid-cols-2 gap-6">
            {/* Programming */}
            <div>
              <h3 className="font-semibold mb-1">Programming Languages</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Frontend: HTML, CSS, JavaScript</li>
                <li>Framework: Vue.js, Nuxt.js, React, Tailwind CSS</li>
                <li>Backend: JavaScript, SQL, Python</li>
                <li>Framework: Node.js, Express.js</li>
              </ul>
            </div>

            {/* Database */}
            <div>
              <h3 className="font-semibold mb-1">Database</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>MySQL, PostgreSQL, DBeaver</li>
              </ul>
            </div>

            {/* UI/UX */}
            <div>
              <h3 className="font-semibold mb-1">UI/UX & Wireframe</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Figma, Photoshop, Illustrator, Adobe XD</li>
                <li>Draw.io, Trello, Canva</li>
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h3 className="font-semibold mb-1">Tools & Version Control</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>VS Code, Bitbucket, GitHub, Postman, Docker</li>
              </ul>
            </div>
          </div>
        </div>

        {/* EXPERIENCES */}
        <div id="Work-Experience" className="bg-[#3E4E40] text-[#FFF9EC] rounded-2xl shadow-md p-6 mt-6">
          <h2 className="text-2xl font-bold mb-4 text-[#FFEAA7]">
            🗂️ Work Experience <span className="text-sm text-[#FFF9EC]">(Click to view details)</span>
          </h2>
          <ul className="space-y-4 text-sm font-medium">
            {[
              { to: "/projects/chatbot", label: "🤖 Chatbot Design and Development for Tourism in Khon Kaen (Full Stack Developer)" },
              { to: "/projects/course-app", label: "🎓 Online Course Purchasing Web Application (Front-End Developer)" },
              { to: "/projects/restaurant-system", label: "🛒 Point of Sale (In Development) (Full Stack Developer)" },
              { to: "/projects/cafe-system", label: "☕ Cafe Management System (Front-end)" },
              { to: "/projects/toxic-api", label: "🚫 Toxic Comment Classification API (Full Stack Developer)" },
              { to: "/projects/other-work", label: "🧰 Other work" },
            ].map((exp, i) => (
              <li key={i}>
                <Link
                  to={exp.to}
                  className="block bg-[#fefae0] text-[#3E4E40] px-4 py-3 rounded-lg shadow hover:bg-yellow-200 transition transform hover:scale-[1.02]"
                >
                  {exp.label} <span className="ml-2">🔗</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
