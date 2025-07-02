const Hero = () => {
    return (
        <section
            style={{
                backgroundImage: `url("/assets/herorbg.svg")`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
            }}
            className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center text-center text-white"
        >
            {/* Gradient overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.35) 85%, rgba(0,0,0,0.1) 100%)'
                  }}
            />

            {/* Content */}
            <div className="relative z-10 px-6">
                <h1 className="text-3xl md:text-6xl font-bold text-white mb-4" >MENU</h1>
                <p className="kelly-font text-sm md:text-base leading-relaxed">
                    Please take a look at our menu featuring food, drinks, and brunch. If you&apos;d like to <br className="hidden md:block" />
                    place an order, use the &quot;Order Online&quot; button located below the menu.
                </p>
            </div>
        </section>
    );
};

export default Hero;