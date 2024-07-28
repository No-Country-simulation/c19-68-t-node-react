import { decrypt } from "@/utils/session";
import { cookies } from "next/headers";
import React from "react";

const PaginaToken = async ({ params }: { params: { tokenId: string } }) => {
  const sessionCookie = cookies().get("session");
  const desencriptada = await decrypt(sessionCookie);
  // console.log(desencriptada);

  return (
    <div>
      <div>Pagina con el token: {params.tokenId}</div>;
      <p>Session cookie: {typeof sessionCookie?.value}</p>
      <p>Desencriptada: {desencriptada?.userId as React.ReactNode}</p>
    </div>
  );
};

export default PaginaToken;
