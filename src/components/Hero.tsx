export default function Hero() {
    return (
        <section className="max-w-5xl p-10 m-auto">
            <img className="" src={require("./images/photo-grid.png")} alt="hero grid" />
            <div className="pt-9">
                <h1 className="w-9/12 text-5xl font-semibold">Online Experiences</h1>
                <p className="w-7/12 pt-5 text-xl font-semilight">Join unique interactive activities led by
                    one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}