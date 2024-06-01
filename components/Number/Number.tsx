"use client";
import React, { useEffect, useState } from "react";
import "../App.css";

const Number = () => {
  const [customers, setCustomers] = useState(0);
  const [programs, setPrograms] = useState(0);
  const [reviews, setReviews] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCustomers((prevCustomers) =>
        prevCustomers < 2000 ? prevCustomers + 20 : 2000
      );
      setPrograms((prevPrograms) => (prevPrograms < 6 ? prevPrograms + 1 : 6));
      setReviews((prevReviews) =>
        prevReviews < 20000 ? prevReviews + 200 : 20000
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-around bg-gray-100 p-6 rounded-lg shadow-lg m-5 sm:m-10">
      <div className="text-center text-black mb-4">
        <h2 className="text-2xl sm:text-4xl font-bold">
          <span style={{ color: "#DC143C" }}>{formatNumber(customers)}</span>
          <span style={{ color: "#DC143C" }}>+</span>
        </h2>
        <p className="text-gray-600">Happy Customers</p>
      </div>
      <div className="text-center text-black mb-4">
        <h2 className="text-2xl sm:text-4xl font-bold">
          <span style={{ color: "#DC143C" }}>{formatNumber(programs)}</span>
          <span style={{ color: "#DC143C" }}>+</span>
        </h2>
        <p className="text-gray-600">Programs</p>
      </div>
      <div className="text-center text-black mb-4">
        <h2 className="text-2xl sm:text-4xl font-bold">
          <span style={{ color: "#DC143C" }}>{formatNumber(reviews)}</span>
          <span style={{ color: "#DC143C" }}>+</span>
        </h2>
        <p className="text-gray-600">Positive Reviews</p>
      </div>
    </div>
  );
};

export default Number;
