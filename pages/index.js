import { signIn, signOut, useSession } from "next-auth/react";
export default function Home() {
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
    <div>
      "logged in Successfully!!" {session.user.email}
      <br />
      {session.user.name}
      <br />
      <button onClick={() => signOut()}>signOut</button>
    </div>
  );
}
