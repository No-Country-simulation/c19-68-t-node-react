import React from "react";

const PaginaToken = ({ params }: { params: { tokenId: string } }) => {
  return <div>Pagina con el token: {params.tokenId}</div>;
};

export default PaginaToken;
