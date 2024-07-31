"use client";
import Image from "next/image";
import { useState } from "react";
const HomeDoctor = ({ doctorId }: { doctorId: string }) => {
  const [doctor, setDoctor] = useState(doctorId);
  return (
    <div>
      <h3>Home doctor</h3>
      <p>{doctorId}</p>
      {/* <Image width={20} height={} alt="" src={} /> */}
    </div>
  );
};

export default HomeDoctor;
