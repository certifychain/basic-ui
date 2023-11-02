import React from 'react';
import { useCookies } from 'react-cookie';
function Home() {
    const [cookies] = useCookies(['authToken']);
    const isUserLoggedIn = () => {
        return !!cookies.authToken;
    }
    return (
        <div className='flex min-h-screen flex-col justify-center items-center'>
            {isUserLoggedIn() ? (
                <div className="min-w-[400px] bg-blue-300 p-5">
                    <p className='text-5xl m-5'>certifychain</p>
                    <div className='flex flex-col gap-5'>
                        <h1>home</h1>
                    </div>
                </div>
            ) : (
                window.location.href = "./login"
            )}
        </div>
    )
}

export default Home
