import React from "react";

const PaginaDoctorToken = ({ params }: { params: { tokenId: string } }) => {
  return <div>Pagina con el token: {params.tokenId}</div>;
};

export default PaginaDoctorToken;
