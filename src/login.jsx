
function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
      <div className='flex min-h-screen flex-col justify-center items-center'>
        <div className="min-w-[400px] bg-blue-300 p-5">
          <p className='text-5xl m-5'>login page</p>
          <div className='flex flex-col gap-5'>
              <div className="flex flex-col gap-2">
                  username:
                  <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} className="p-1"/>
              </div>
              <div className="flex flex-col gap-2">
                  password:
                  <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="p-1"/>
              </div>
              <button className='rounded-xl text-center py-2 px-5 bg-red-300'>login</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default Login