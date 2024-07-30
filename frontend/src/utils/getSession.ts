import { cookies } from "next/headers";
import { decrypt } from "./session";

export const getSession = async () => {
  const sessionCookie = cookies().get("session");
  const desencriptada = await decrypt(sessionCookie);

  return desencriptada?.user;
};
