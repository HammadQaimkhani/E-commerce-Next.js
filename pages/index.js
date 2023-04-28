import Navbar from "@/components/Navbar";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Home() {
  // login or logout Session...
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className='bg-blue-900 w-screen h-screen flex justify-center items-center'>
        <div className=' w-full text-center'>
          <button
            onClick={() => signIn("google")}
            className='bg-white  text-black p-2 px-4 rounded-lg'>
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-blue-900 min-h-screen flex'>
      <Navbar />
      <div className='bg-white flex-grow text-black mt-2 mr-2 rounded-lg'>
        {session.user.email}
      </div>
    </div>
  );
}
