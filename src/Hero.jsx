import "./Hero.css"
import "./App.css"

export default function Hero(){
    return(
        <>
            <main className="hero container">
                <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST </h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>


                <div className="hero-btn">
                    <button className="btn-1">Shop Now</button>
                    <button className="btn-2">Category</button>
                </div>

                <div className="shopping">
                    <p> Also available on</p>
                </div>
                <div className="brand-icon">
                    <img src="/image/amazon.png" alt="Amozon-logo" />
                    <img src="/image/flipkart.png" alt="flipkart-logo" />
                </div>
                </div>
                <div className="hero-n ">
                <img src="/image/shoe_image.png" alt="shoe-logo" />

                </div>
            </main>

        
        </>
    )
}