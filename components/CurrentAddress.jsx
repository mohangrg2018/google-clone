"use client";

import { useState, useEffect } from "react";

const CurrentAddress = () => {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IP_API_KEY}`
        );

        const data = await res.json();

        console.log(data);
      } catch (error) {
        console.log("Failed to fetch data", error);
      }
    };
    fetchData();
  }, []);

  return <section className="py-3 px-4">{country}</section>;
};

export default CurrentAddress;
