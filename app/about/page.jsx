async function takeTime(){
    await new Promise((reslove, reject)=>{
        setTimeout(reslove,10000);
    })
}
export default async function About() {
    await takeTime();
  return (
    <main>
         <div className="py-10 bg-blue-700 text-white text-center">
      <h1 className='text-5xl'>About Website</h1>
     </div>
    </main>
  )
}
