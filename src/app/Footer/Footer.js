
export default function Footer() {
    return (
        <>
            <footer className="footer switchLightThem">
                <div className="wrap p-2">
                    <div className="container-footer grid grid-cols-4">
                        <div className="mb-2">
                            <div className='titel flex mb-5'>
                                <p className=' bg-red-600'>The</p>
                                <h2>Concerto.</h2>
                            </div>
                            <div>
                                <p> Did you come here for something in particular or just general Riker </p>
                            </div>
                        </div>

                        <div className="mb-2">
                            <h2 className=" mb-5">blogs</h2>
                            <div className="blogs-list">
                                <ul className="">
                                    <li> Travel </li>
                                    <li> Technology </li>
                                    <li> culture </li>
                                    <li> citys </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mb-2">
                            <h2 className=" mb-5">quick links</h2>
                            <div className="quick links">
                                <ul className="">
                                    <li> FAQ </li>
                                    <li> Terms & conditions </li>
                                    <li> support </li>
                                    <li> privacy policy </li>
                                </ul>
                            </div>
                        </div>

                        <div className="form">
                            <h2 className=" mb-5">Subscribe for newsletter</h2>
                            <form>
                                <input type="text" className=" max-w-[200px] h-10" placeholder="E-mail"/>
                                <button className="p-2 bg-teal-500"> sub </button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}