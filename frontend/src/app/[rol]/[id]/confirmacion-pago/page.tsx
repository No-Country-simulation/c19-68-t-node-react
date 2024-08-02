import SuccessfulPaymentForm from "@/components/SuccessfulPayment";
const Success = ({ params }: { params: { id: string; rol: string } }) => {
  return (
    <div className="w-screen h-[100dvh] flex items-center justify-center overflow-hidden">
      <SuccessfulPaymentForm userId={params.id} userRol={params.rol} />
    </div>
  );
};

export default Success;
