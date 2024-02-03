import Billboard from "@/components/Billboard";
import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  // this is for protecting our home page, it checks if the user has not logged in, i.e. no session is created,it will redirect the user to /auth page
  if(!session){
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {

  return (
    <>
      <Navbar />
      <Billboard />
    </>
  );
}
