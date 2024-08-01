"server only"; // PAra asegurar que este codigo no se impaortaria en el cliente

import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Crear clave secreta para manejar la codificación
const key = new TextEncoder().encode(process.env.SECRET_KEY);

// Configuración de la cookie
const cookie = {
  name: "session",
  options: { httpOnly: true, secure: true, sameSite: "lax", path: "/" },
  duration: 24 * 60 * 60 * 1000, // 1 día en milisegundos
  //duration: 10 * 60 * 1000, // 10 minutos en milisegundos
};

// Función para encriptar el payload
export async function encrypt(payload: JWTPayload | undefined) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(key);
}

// Función para desencriptar la sesión
export async function decrypt(session: any) {
  if (!session) {
    redirect("/auth/login");
  }
  const jwt = session.value;

  try {
    const { payload } = await jwtVerify(jwt, key, {
      algorithms: ["HS256"],
    });

    return payload;
  } catch (error) {
    console.log("El error al desencriptar: ", error);

    return null;
  }
}

// Función para crear la sesión
export async function createSession(
  user: { id: string; rol: string },
  register: boolean
) {
  const expires = new Date(Date.now() + cookie.duration);

  const session = await encrypt({
    user,
    exp: Math.floor(expires.getTime() / 1000),
  });

  cookies().set(cookie.name, session, {
    ...cookie.options,
    expires,
    sameSite: "lax",
  });
  register
    ? redirect(`/${user.rol}/${user.id}/data-completion`)
    : redirect(`/${user.rol}/${user.id}/`);
  // REdireccion para tests
}

// Función para verificar la sesión
export async function verifySession() {
  const sessionCookie = cookies().get(cookie.name);
  if (!sessionCookie) {
    redirect("/auth/login");
  }
  const session = await decrypt(sessionCookie);
  if (!session) {
    console.log("Redireccionando porque no coincide el token");

    redirect("/auth/login");
  }
  console.log("La session: ", session);

  return { userId: session };
}

// Función para eliminar la sesión
export async function deleteSession() {
  cookies().delete(cookie.name);
  redirect("/auth/login");
}
