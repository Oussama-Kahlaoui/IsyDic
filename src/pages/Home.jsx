// syndic-web/src/pages/Home.jsx
import { Link } from 'react-router-dom';
const testimonials = [
    {
      img: "https://images.unsplash.com/photo-1609054841737-9feb7029bd7b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote: "ResidenceConnect has transformed our community management. It's intuitive and efficient.",
      name: "Fatima Zahra Bouziane"
    },
    {
      img: "https://images.unsplash.com/photo-1500281781950-6cd80847ebcd?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote: "The charge management feature has made tracking payments so much easier.",
      name: "David Chen, Administrator"
    },
    {
      img: "https://images.unsplash.com/photo-1639490204002-e38aef42e021?q=80&w=1050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote: "Scheduling meetings is a breeze with ResidenceConnect. Highly recommended!",
      name: "Emily Rodriguez, Resident"
    }
  ];
  
  export default function Home() {
    return (
      <div className="relative flex min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          {/* Header */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3">
            <div className="flex items-center gap-4 text-[#0e141b]">
              <div className="size-4">
              </div>
              <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">ResidenceConnect</h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
                <a className="text-[#0e141b] text-sm font-medium leading-normal" href="#">About</a>
                <a className="text-[#0e141b] text-sm font-medium leading-normal" href="#">Features</a>
                <a className="text-[#0e141b] text-sm font-medium leading-normal" href="#">Testimonials</a>
              </div>
              <div className="flex gap-2">
                <Link to="/login" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1978e5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Login</span>
                </Link>
              </div>
            </div>
          </header>
  
          {/* Hero Section */}
          <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div>
                <div>
                  <div
                    className="flex min-h-[320px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat md:gap-8 md:rounded-lg items-center justify-center p-4"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiLIWGIhvDMI5oHS0svSi6SjFJdAvZhgCb5WlhdAyaS8i6QpKOnbSWmafYo3z4CYqnOsFcVKDXU-684fnqdPJzU34JpAe5sa1xtwHdU3K648If1-FG2ckO0hRUkfbhoMINg8CadAgJ1LenXVwDL3LHCRq8XlMHzKfIgbcJvbRMeZB4Sjc28oIIiMC-wHmx1ANU9kGt7Z1HW2r-7WDiVYjvT5ZGfZRrKEWEZaZ_J5txDKRmsBRbBif3P1Wn3ZP6x0wmxXSO-F_Jcbs")'
                    }}
                  >
                    <div className="flex flex-col gap-2 text-center">
                      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl md:font-black md:leading-tight md:tracking-[-0.033em]">
                        Connect, Manage, and Thrive in Your Residence
                      </h1>
                      <h2 className="text-white text-sm font-normal leading-normal md:text-base md:font-normal md:leading-normal">
                        ResidenceConnect simplifies community living, offering seamless management for residents and administrators. From managing charges to scheduling meetings, we've got you covered.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* About */}
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About ResidenceConnect</h2>
              <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
                ResidenceConnect is a comprehensive platform designed to enhance residential community management. We provide tools for efficient communication, streamlined administrative tasks, and improved resident engagement.
              </p>
  
              {/* Key Features */}
              <div className="flex flex-col gap-10 px-4 py-10">
                <div className="flex flex-col gap-4">
                  <h1 className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight md:text-4xl md:font-black md:leading-tight md:tracking-[-0.033em] max-w-[720px]">
                    Key Features
                  </h1>
                  <p className="text-[#0e141b] text-base font-normal leading-normal max-w-[720px]">
                    Explore the features that make ResidenceConnect the ideal solution for your community.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 p-0">
                  {/* Feature 1 */}
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 flex-col">
                    <div className="text-[#0e141b]">
                      {/* House SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#0e141b] text-base font-bold leading-tight">Residence Management</h2>
                      <p className="text-[#4e7097] text-sm font-normal leading-normal">Manage resident information, units, and common areas efficiently.</p>
                    </div>
                  </div>
                  {/* Feature 2 */}
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 flex-col">
                    <div className="text-[#0e141b]">
                      {/* Dollar SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#0e141b] text-base font-bold leading-tight">Charge Management</h2>
                      <p className="text-[#4e7097] text-sm font-normal leading-normal">Track and manage resident charges, payments, and outstanding balances.</p>
                    </div>
                  </div>
                  {/* Feature 3 */}
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 flex-col">
                    <div className="text-[#0e141b]">
                      {/* Calendar SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#0e141b] text-base font-bold leading-tight">Meeting Scheduling</h2>
                      <p className="text-[#4e7097] text-sm font-normal leading-normal">Schedule and manage community meetings, ensuring smooth communication.</p>
                    </div>
                  </div>
                  {/* Feature 4 */}
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 flex-col">
                    <div className="text-[#0e141b]">
                      {/* File SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#0e141b] text-base font-bold leading-tight">Document Management</h2>
                      <p className="text-[#4e7097] text-sm font-normal leading-normal">Store and share important documents securely with residents and administrators.</p>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Testimonials */}
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Testimonials</h2>
              <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex items-stretch p-4 gap-3">
                  {testimonials.map((t, i) => (
                    <div key={i} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                        style={{ backgroundImage: `url("${t.img}")` }}
                      ></div>
                      <div>
                        <p className="text-[#0e141b] text-base font-medium leading-normal">"{t.quote}"</p>
                        <p className="text-[#4e7097] text-sm font-normal leading-normal">{t.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
  
          {/* Footer */}
          <footer className="flex justify-center">
            <div className="flex max-w-[960px] flex-1 flex-col">
              <footer className="flex flex-col gap-6 px-5 py-10 text-center">
                <div className="flex flex-wrap items-center justify-center gap-6 md:flex-row md:justify-around">
                  <a className="text-[#4e7097] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
                  <a className="text-[#4e7097] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
                  <a className="text-[#4e7097] text-base font-normal leading-normal min-w-40" href="#">Contact Us</a>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  {/* Social icons */}
                  <a href="#">
                    <div className="text-[#4e7097]">
                      {/* Twitter SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div className="text-[#4e7097]">
                      {/* Facebook SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div className="text-[#4e7097]">
                      {/* Instagram SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                      </svg>
                    </div>
                  </a>
                </div>
                <p className="text-[#4e7097] text-base font-normal leading-normal">© 2023 ResidenceConnect. All rights reserved.</p>
              </footer>
            </div>
          </footer>
        </div>
      </div>
    );
  }