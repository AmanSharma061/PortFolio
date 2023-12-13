import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import userContext from "../context/userContext";

import { ThreeDots } from "react-loader-spinner";

function Logout() {
  const { log, setLog } = useContext(userContext);

  useEffect(() => {
    Handler();
  }, []);

  const navigate = useNavigate();
  const Handler = () => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        setLog(false);
        toast.info("Redirecting to login page", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        localStorage.removeItem("storageToken");

        // , { replace: true }
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Handler />
      <ToastContainer />
      <div className="w-full h-[80vh] flex justify-center items-center">
        <ThreeDots color="#df2a61" height={80} width={80} />
      </div>
    </>
  );
}

export default Logout;
