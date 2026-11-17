const HeaderPage = () => {
    return (
        <div className="flex flex-row w-full h-50">
            <div className="h-full w-1/2 flex flex-col justify-center items-start pl-40 bg-gray-400">
            <h1 className="text-3xl font-bold">My Website Pribadi</h1>
            <p className="text-lg">Selamat Datang di Website Saya</p>
            </div>
            <div className="h-full w-1/2 bg-cover bg-[url('https://i.pinimg.com/736x/02/5e/44/025e44fa14067fc6b2295f593e315916.jpg')]"></div>
        </div>
    )
}
export default HeaderPage