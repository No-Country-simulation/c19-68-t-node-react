import SuccessfulPaymentForm from "@/components/successfulPayment";
const Success = ({ params }: { params: { id: string; rol: string } }) => {
  return (
    <div className="w-screen h-[100svh] flex justify-center overflow-hidden">
      <SuccessfulPaymentForm userId={params.id} userRol={params.rol} />
    </div>
  );
};

export default Success;
