import { useState } from "react"

function Validation() {
    const [consent, setConsent] = useState(false)

  return (
    <div className='flex min-h-screen flex-col justify-center items-center'>
        <div className="min-w-[400px] bg-blue-300 p-5">
            <p className='text-5xl m-5'>public validation tool</p>
            <div className='flex flex-col gap-5'>
                <div className="flex flex-col gap-2">
                    certificate id:
                    <input type="text" className="p-1"/>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" checked={consent} onChange={()=>{setConsent(!consent)}}/>
                    i have the consent of the certificate owner to view thier certificate
                </div>
                <button className='rounded-xl text-center py-2 px-5 bg-red-300'>validate</button>
            </div>
        </div>
    </div>
  )
}

export default Validation