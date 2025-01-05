import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";
const About = () => {
const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("muhadrian2902@gmail.com");

        setHasCopied(true);

        setTimeout(() => { 
            setHasCopied(false);
        }, 2000);
    };

  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Halo nama saya Muhammad Adrian</p>
              <p className="grid-subtext">
                Dengan pengalaman 2 tahun, Saya mempunyai skill pada frontend
                dan backend developer, dengan fokus pada animasi 3d pada website{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain "
            />
            <div>
              <p className="grid-headtext">Tech Skill</p>
              <p className="grid-subtext">
                Javascript/TypeScript terutama pada React dan Next.js Ekosistem
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[327px] h-fit flex justify-center items-center">
              <Globe
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                //   backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                //   showAtmosphere={false}
                //   showGraticules={false}
              />
                      </div>
                      <div>
                          <p className="grid-headtext">Hello Earth</p>
                          <p className="grid-subtext">Saya Tinggal di Sulawesi Selatan, Parepare</p>
                          <Button name="Hubungi saya" isBeam containerClass="w-full mt-10" />
                      </div>
                  </div>             
              </div>

              <div className="xl:col-span-2 xl:row-span-3">
                  <div className="grid-container">
                      <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266] h-fit object-contain" />
                  <div>
                      <p className="grid-headtext">Passion Saya Coding</p>
                      <p className="grid-subtext">Saya suka memecahkan masalah dan membuat sesuatu dari coding</p>
                  </div>
                  </div>
              </div>
              <div className="xl:col-span-1 xl:row-span-2">
  <div className="grid-container">
    <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276] h-fit object-cover object-top" />
    <div className="space-y-2">
      <p className="grid-subtext text-center">Contact me</p>
      <div className="copy-container flex justify-center items-center" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:texr-xl font-medium text-gray_gradient text-white">muhadrian2902@gmail.com</p>
      </div>
    </div>
  </div>
</div>
          </div>     
    </section>
  );
};

export default About;
