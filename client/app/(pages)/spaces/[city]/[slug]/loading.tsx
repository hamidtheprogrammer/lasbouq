import Footer from "@/app/(pages)/home/Footer";
import Nav from "@/app/UI/components/Navbar";

export default function Loading(){
    return <div>
      <div className="bg-foreground m-3 mb-10 rounded-lg">
        <Nav />
      </div>
      <section className="uppercase text-center flex flex-col items-center justify-center w-full max-sm:space-y-3 space-y-6 aspect-[16/7] max-md:aspect-[12/7] min-h-[20rem]">
      <p className="text-xs tracking-[0.5rem]">lasbouq</p>
      <div className="">
        <h1 className="max-sm:text-2xl max-md:text-3xl text-4xl text-balance leading-12">
          Please, wait a moment...
        </h1>
        </div>
        </section>
      <Footer/>
    </div>
}