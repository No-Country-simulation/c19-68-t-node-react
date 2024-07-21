// "use server";

// import { revalidatePath } from "next/cache";
// import { z } from "zod";

// export type SignUp = z.infer<typeof signUpSchema>;

// export const signUp = async (data: SignUp) => {
//   const response = await fetch("/api/auth/sign-up", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     throw new Error("An error occurred");
//   }
//   revalidatePath("/auth/sign-in");
//     console.log("User created successfully", await response.json());
// };
