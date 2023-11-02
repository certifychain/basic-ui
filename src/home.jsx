import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

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
                    <p className='text-5xl text-center m-5'>certifychain</p>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-center'>home</h1>
                        <img src="https://avatars.githubusercontent.com/u/146720572" />
                        <button onClick={handleRemove} className='rounded-xl text-center py-2 px-5 bg-red-300'>logout</button>
                    </div>
                </div>
            ) : (
                <Navigate to="/login" replace={true} />
                )}
        </div>
    )
}

export default Home
