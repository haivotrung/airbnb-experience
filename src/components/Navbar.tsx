export default function Navbar() {
    return (
        <nav className="mx-auto p-4 shadow-md">
            <div className="flex flex-wrap justify-between">
                <img alt="AirBnb Logo" className="pl-2 h-7 sm:h-10" src={require("./images/airbnb-logo.png")} />
            </div>
        </nav >
    )
}