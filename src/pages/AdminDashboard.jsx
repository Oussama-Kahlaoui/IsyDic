import { useAuth } from '../context/useAuth';
import { useNavigate, Link } from 'react-router-dom';

export default function AdminDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-slate-50 p-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-[#0e141b] text-xl font-bold leading-normal">ResidenceConnect</h1>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e7edf3]">
                    <div className="text-[#0e141b]" data-icon="House" data-size="24px" data-weight="fill">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">Overview</p>
                  </div>
                  <Link to="/residences" className="flex items-center gap-3 px-3 py-2 hover:bg-[#e7edf3] rounded-lg transition-colors">
                    <div className="text-[#0e141b]" data-icon="Buildings" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">Residences</p>
                  </Link>
                  <Link to="/charges" className="flex items-center gap-3 px-3 py-2 hover:bg-[#e7edf3] rounded-lg transition-colors">
                    <div className="text-[#0e141b]" data-icon="CurrencyDollar" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">Charges</p>
                  </Link>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#0e141b]" data-icon="Flag" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M34.76,42A8,8,0,0,0,32,48V216a8,8,0,0,0,16,0V171.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V48A8,8,0,0,0,210.76,42c-28,24.23-51.72,12.49-79.21-1.12C103.07,26.76,70.78,10.79,34.76,42ZM208,164.25c-26.79,21.16-49.87,9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V51.79c26.79-21.16,49.87-9.75,76.45,3.4,25,12.35,52.82,26.13,83.55,8.4Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">Incidents</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#0e141b]" data-icon="Users" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">Residents</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#0e141b]" data-icon="Calendar" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">Meetings</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#0e141b]" data-icon="File" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">Documents</p>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-3 py-2 w-full text-left hover:bg-red-50 rounded-lg transition-colors"
                >
                  <div className="text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56A8,8,0,0,1,112,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L196.69,120H104a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,221.66,122.34Z"></path>
                    </svg>
                  </div>
                  <p className="text-red-600 text-sm font-medium leading-normal">Logout</p>
                </button>
              </div>
            </div>
          </div>
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight min-w-72">Overview</p>
            </div>
            <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Summary</h3>
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#d0dbe7]">
                <p className="text-[#0e141b] text-base font-medium leading-normal">Total Residents</p>
                <p className="text-[#0e141b] tracking-light text-2xl font-bold leading-tight">120</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#d0dbe7]">
                <p className="text-[#0e141b] text-base font-medium leading-normal">Unpaid Charges</p>
                <p className="text-[#0e141b] tracking-light text-2xl font-bold leading-tight">25</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#d0dbe7]">
                <p className="text-[#0e141b] text-base font-medium leading-normal">Upcoming Meetings</p>
                <p className="text-[#0e141b] tracking-light text-2xl font-bold leading-tight">3</p>
              </div>
            </div>
            <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Financial Overview</h3>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#d0dbe7] p-6">
                <p className="text-[#0e141b] text-base font-medium leading-normal">Expenses</p>
                <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                  <div className="border-[#4e7097] bg-[#e7edf3] border-t-2 w-full" style={{ height: '80%' }}></div>
                  <p className="text-[#4e7097] text-[13px] font-bold leading-normal tracking-[0.015em]">Jan</p>
                  <div className="border-[#4e7097] bg-[#e7edf3] border-t-2 w-full" style={{ height: '30%' }}></div>
                  <p className="text-[#4e7097] text-[13px] font-bold leading-normal tracking-[0.015em]">Feb</p>
                  <div className="border-[#4e7097] bg-[#e7edf3] border-t-2 w-full" style={{ height: '80%' }}></div>
                  <p className="text-[#4e7097] text-[13px] font-bold leading-normal tracking-[0.015em]">Mar</p>
                  <div className="border-[#4e7097] bg-[#e7edf3] border-t-2 w-full" style={{ height: '10%' }}></div>
                  <p className="text-[#4e7097] text-[13px] font-bold leading-normal tracking-[0.015em]">Apr</p>
                  <div className="border-[#4e7097] bg-[#e7edf3] border-t-2 w-full" style={{ height: '100%' }}></div>
                  <p className="text-[#4e7097] text-[13px] font-bold leading-normal tracking-[0.015em]">May</p>
                  <div className="border-[#4e7097] bg-[#e7edf3] border-t-2 w-full" style={{ height: '60%' }}></div>
                  <p className="text-[#4e7097] text-[13px] font-bold leading-normal tracking-[0.015em]">Jun</p>
                </div>
              </div>
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#d0dbe7] p-6">
                <p className="text-[#0e141b] text-base font-medium leading-normal">Payments</p>
                <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                  <div className="border-[#4e7097] bg-[#e7edf3] border-t-2 w-full" style={{ height: '50%' }}></div>
                  <p className="text-[#4e7097] text-[13px] font-bold leading-normal tracking-[0.015em]">Jan</p>
                  <div className="border-[#4e7097] bg-[#e7edf3] border-t-2 w-full" style={{ height: '100%' }}></div>
                  <p className="text-[#4e7097] text-[13px] font-bold leading-normal tracking-[0.015em]">Feb</p>
                  <div className="border-[#4e7097] bg-[#e7edf3] border-t-2 w-full" style={{ height: '90%' }}></div>
                  <p className="text-[#4e7097] text-[13px] font-bold leading-normal tracking-[0.015em]">Mar</p>
                  <div className="border-[#4e7097] bg-[#e7edf3] border-t-2 w-full" style={{ height: '80%' }}></div>
                  <p className="text-[#4e7097] text-[13px] font-bold leading-normal tracking-[0.015em]">Apr</p>
                  <div className="border-[#4e7097] bg-[#e7edf3] border-t-2 w-full" style={{ height: '20%' }}></div>
                  <p className="text-[#4e7097] text-[13px] font-bold leading-normal tracking-[0.015em]">May</p>
                  <div className="border-[#4e7097] bg-[#e7edf3] border-t-2 w-full" style={{ height: '50%' }}></div>
                  <p className="text-[#4e7097] text-[13px] font-bold leading-normal tracking-[0.015em]">Jun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
