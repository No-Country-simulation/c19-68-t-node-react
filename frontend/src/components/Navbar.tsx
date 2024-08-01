import { getSession } from "@/utils/getSession";
import NavbarClient from '@/components/NavbarClient';

const Navbar = async () => {
  const session = await getSession();

  return <NavbarClient session={session} />;
};

export default Navbar;