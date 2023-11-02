import React from 'react';
import { useCookies } from 'react-cookie';
function Home() {
    const [cookies, setCookies, removeCookies] = useCookies(['authToken'])

    const isUserLoggedIn = () => {
        return !!cookies.authToken;
    }

    const handleRemove = () => {
        removeCookies('authToken', { path: '/', domain: 'localhost' })
    }

    return (
        <div className='flex min-h-screen flex-col justify-center items-center'>
            {isUserLoggedIn() ? (
                <div className="min-w-[400px] bg-blue-300 p-5">
                    <p className='text-5xl m-5'>certifychain</p>
                    <div className='flex flex-col gap-5'>
                        <h1>home</h1>
                        <button onClick={handleRemove} className='rounded-xl text-center py-2 px-5 bg-red-300'>logout</button>
                    </div>
                </div>
            ) : (
                window.location.href = "./login"
            )}
        </div>
    )
}

export default Home
