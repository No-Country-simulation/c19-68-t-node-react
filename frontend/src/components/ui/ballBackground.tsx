const BallBackground = () => {
  return (
    <div className="absolute top-0 w-full h-[300px]  overflow-hidden">
      <div className="absolute top-[-5rem] right-[-100px] w-[266px] h-[266px] bg-[#35799F] rounded-full mix-blend-multiply filter opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-[4rem] right-[15rem] w-[2.3rem] h-[2.3rem] bg-[#89BAD8] rounded-full mix-blend-multiply filter  opacity-20 animate-blob"></div>
      <div className="absolute top-[7rem] right-[10rem] w-[65px] h-[65px] bg-[#812B75] rounded-full mix-blend-multiply filter  opacity-20 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default BallBackground;
