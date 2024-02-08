import {option, options} from './api/auth/[...nextauth]/options'
import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'

async function takeTime(){

  await new Promise((reslove, reject)=>{
      setTimeout(reslove,2000);
  })
}
export default async function Home() {
  // await takeTime();
  const session = await getServerSession(options)
  console.log("the session is",session)
  if(!session){
    redirect('http://localhost:3000/api/auth/signin?callbackUrl=/')
  }
 
  else{
  return (
    <main className="py-3">
     <div className="w-1/2 m-auto text-center border border-solid border-blue-600 h-[200px] flex  justify-center items-center">
    <h1 className="text-4xl">Welcome Mr.{session?.user.name}</h1>
     </div>
    </main>
  )
}
}