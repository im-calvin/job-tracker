import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import frame2 from '../../assets/frame2.png';
import logo from '../../assets/logo.png'

function RegisterPage() {
  const location = useLocation();
  const username = location.state;
  const navigate = useNavigate();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(username + "@jobjug.co");
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleHome = async () => {
    navigate("/home");
  };
  return (
    <>

      <div className="pt-32">
      <img className='absolute right-[7%] bottom-[35%] size-[40%] object-contain' src={frame2}></img>
        <div className="w-3/4 h-fit border-2 rounded-lg px-20 border-gray-200 m-auto">
          <div className="mt-20"></div>

          <div className='w-3/5 h-4/5 grid grid-rows-2'>
            
            <div className='flex gap-4 mt-5 flex-rows'>
              <img className='size-20' src={logo}></img>
              <div className='container'>
                <h3> Don't lose it!</h3>
                <h1 className='text-6xl'>Your new email is ready!</h1>
              </div>
            </div>

            <div className="container mt-10 flex flex-row gap-4">

                <div className="border w-3/4 h-16 border-gray-300 rounded-md px-4 pt-5 pb-1">
                  {username}
                  {"@jobjug.co"}
                </div>
               

                <button
                  className="border w-1/4 h-16 border-gray-300 bg-gray-900 rounded-md px-4 pt-3 pb-1"
                  onClick={handleCopy}>
                  {" "}
                  <h3 className="text-white"> Copy Email </h3>{" "}
                </button>
                
                <button
                  className="border w-1/4 h-16 border-gray-300 bg-gray-900 rounded-md px-4 pt-3 pb-1"
                  onClick={handleHome}>
                  {" "}
                  <h3 className="text-white"> Go Home </h3>{" "}
                </button>

              </div>
          </div>

        <div className="pb-20"></div>
      </div>
      </div>
    </>
    );
    }
    

export default RegisterPage;
