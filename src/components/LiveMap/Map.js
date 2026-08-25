import React, { useState } from "react";
import Loader from "../Loader/Loader";

export default function Map() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d48185.2087420395!2d-80.39287626259859!3d40.99077430401306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s160%20Pennsylvania%20Ave%20NW%2C%20Washington%2C%20Castle%2C%20PA%2016101-5161!5e0!3m2!1sen!2s!4v1778952205900!5m2!1sen!2s"
        width="600"
        height="450"
        style={{
          border: 0,
          height: "90%",
          width: "100%",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
