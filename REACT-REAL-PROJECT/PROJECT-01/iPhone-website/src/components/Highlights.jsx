import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { rightImg, watchImg } from "../utils";


const Highlights = () => {
    // useGSAP(()=>{
    //     gsap.to('#title', {opacity:1, y:0})
    // })
  return (
    <section className=" border">
        <div className=" border">
            <div>
                <h1 id="title" className=" section-heading">Get the highlights.</h1>
                <div>
                    <p className="link">Watch the film
                        <img src={watchImg} alt="watch" className=" ml-2"/>
                    </p>
                    <p>watch the event
                        <img src={rightImg} alt="right" className=" ml-2" />
                    </p>

                </div>
            </div>

        </div>
    </section>
  )
}

export default Highlights;