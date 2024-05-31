import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

function SuccessPayment() {
  const navigate = useNavigate();

  useEffect(() => {
    let isSuccess = true;

    const fetchData = async () => {
      try {
        await axios.get('http://localhost:5050/user/api/payment/success')
        .then((res) => {
          if (res.status === 200 && isSuccess) {
            toast.success("Payment successful");
            navigate("/");
          }
        });
      } catch (e) {
        toast.error(e.res.data.message);
      }
    };

    const timeoutId = setTimeout(fetchData, 3000);

    return () => {
      isSuccess = false;
      clearTimeout(timeoutId); // Clear the timeout when the component unmounts
    };
  }, [navigate]); // Include navigate in the dependency array

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
      <img
        src="https://cdn.dribbble.com/users/253392/screenshots/6906291/check.gif"
        alt="Success"
        className="max-w-full max-h-full"
      />
    </div>
  );
}

export default SuccessPayment;