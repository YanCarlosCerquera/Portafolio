import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px] mt-20 md:mt-0">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5 mt-10 sm:text-sm">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300 ">Ofrezco servicios de desarrollo FullStack especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, Python, PhP, Java, diseñando interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea, garantizando seguridad, escalabilidad y eficiencia de los desarrollos.</p>
                    
                    <a href="https://wa.me/+573114919985"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contactate conmigo
                        </a>
                </div>


                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;