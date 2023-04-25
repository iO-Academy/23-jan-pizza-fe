import logo from './seadogs.png'

const LandingPage = () => {
    return (
            <div className="h-screen bg-teal-500 pb-30">
                <div className="flex justify-center mt-[-270px] mb-[-200px]">
                    <img className="container background-size: contain transform: scale-50" src={ logo } alt="seadogs" />
                </div>
                    <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center mt-[-400px]">
                        <button className="bg-cyan-950 transform: scale-50 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full border-white border-4 border-opacity-50 hover:border-black hover:border-opacity-100 shadow w-80 h-40 text-4xl">Enter M'Hearty!</button>
                    </div>
            </div>
        )
}

export default LandingPage;