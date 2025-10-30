import heroImg from '../assets/images/pipe-welding-hero.jpg'

export default function Hero() {
    const backgroundStyle = {
        backgroundImage: `url(${heroImg})`,

    }

    return <section className="h-140 bg-center bg-cover relative" style={backgroundStyle}>
        <div className="h-full flex justify-center items-center absolute inset-0 bg-black/50 ">
            <h1 className="text-stone-200 text-6xl">Learn Welding</h1>
        </div>
    </section>
}