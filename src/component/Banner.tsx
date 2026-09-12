import BannerLogo from "../assets/banner-stack.png"
const Banner = () => {
    return (
        <section className="container max-w-7xl mx-auto py-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                <div className="max-w-xl" >
                    <h1 className="text-5xl font-bold leading-tight text-slate-900">Build Your Ideal
                    <span className="text-orange-500 mt-0.5"> Development Stack</span> </h1>

                    <p className="mt-7 text-[#475569]">Explore frontend,backend,database and tooling option, <br />
                        compare them side by side and put together the stack that fits your <br />
                        next project</p>
                        
                    <div className="mt-7 flex gap-3">
                        <button className="bg-pink-700 rounded-2xl px-5 py-2 text-white active:scale-90
                        transition-transform">Explore Technologies</button>

                        <button className="border border-gray-300 rounded-2xl px-11  text-[#374151] active:scale-90
                        transition-transform">Learn More</button>

                    </div>
                </div>


                <div>
                    <img src={BannerLogo} alt="" />

                </div>
            </div>
        </section>
    );
};

export default Banner;