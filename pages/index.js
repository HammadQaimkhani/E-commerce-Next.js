import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className='text-blue-900 flex justify-between items-center'>
        <h2>
          Hello, <b>{session?.user?.name} </b>
        </h2>
        <div className='flex gap-2 bg-gray-200 p-2 rounded-lg'>
          <img
            src={session?.user?.image}
            alt=''
            className='rounded-full w-6 h-6  bg-cover'
          />
          <span className='text-sm text-black font-semibold'>
            {session?.user?.name}
          </span>
        </div>
      </div>
    </Layout>
  );
}
