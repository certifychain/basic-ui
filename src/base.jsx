import { Link } from "react-router-dom"

function Base() {

    return (
        <div className='flex min-h-screen flex-col justify-center items-center'>
            <div className="min-w-[400px] bg-blue-300 p-5">
                <p className='text-5xl m-5'>certifychain</p>
                <div className='flex flex-col gap-5'>
                    <Link to="../validation" className='rounded-xl text-center py-2 px-5 bg-red-300'>
                        public validation tool
                    </Link>
                    <Link to="../register" className='rounded-xl text-center py-2 px-5 bg-red-300'>
                        register
                    </Link>
                    <Link to="../login" className='rounded-xl text-center py-2 px-5 bg-red-300'>
                        login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Base
