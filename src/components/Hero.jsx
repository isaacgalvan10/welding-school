import heroImg from '../assets/images/pipe-welding-hero.jpg'

export default function Hero() {
    const backgroundStyle = {
        backgroundImage: `url(${heroImg})`,

    }

    return <section className="h-140 bg-center bg-cover relative" style={backgroundStyle}>
        <div className="h-full flex justify-center items-center absolute inset-0 bg-black/50 flex-col">
            <h1 className="text-white text-6xl">Welding Booth Rentals</h1>
            <p className="text-white">Come rent out a booth and do some practice coupons before a weld test! We have everything ready for you to pass your next weld test.</p>
        </div>
    </section>
}