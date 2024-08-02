import bcrypt from "bcrypt";

export async function hashPassword(pass) {
  if (!pass) throw new Error("invalid data to hash");
  return await bcrypt.hash(pass, bcrypt.genSaltSync(10));
}

export async function comparePassword(password, hashedPassword) {
  if (!password) throw new Error("invalid data to decode");
  if (!hashedPassword) throw new Error("invalid data to compare");
  return await bcrypt.compare(password, hashedPassword);
}