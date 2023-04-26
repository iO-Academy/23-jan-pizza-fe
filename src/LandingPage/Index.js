import logo from './seadogs.png'

const LandingPage = () => {
    return (
        <div>
            <div className="h-screen bg-teal-500 flex justify-center items-center">
                <div className="h-screen bg-teal-500 flex flex-col justify-center items-center container background-size: contain transform: scale-100">
                    <img src={ logo } alt="logo image" />
                    <button className="bg-cyan-950 transform: scale-50 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full
                    border-white border-4 border-opacity-50 hover:border-black hover:border-opacity-100 shadow w-80 h-40 text-4xl">Enter M'Hearty!</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
