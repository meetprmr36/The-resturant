import { AnimatePresence, motion } from "framer-motion";


const AbtRevSection = () => {
    return (
        <section className="about-section reverse">
            <motion.img
                src="https://meetprmr36.github.io/frontEd/static/media/restaurant.952b617661c6172eded7.jpg"
                alt="Our Kitchen"
                className="Sec-img"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            />
            <motion.div
                className="Sec-content"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className='Sec-Heading'>Our Mission</h2>
                <p className='Sec-par'>
                    At SpiceHaus, our mission is to go beyond just serving food — we aim to spark joy, ignite senses, and create lasting memories.
                </p>
                <p className='Sec-par'>
                    We’re here to deliver an immersive dining experience that blends bold flavors, artistic presentation, and warm hospitality. Our goal is to be the place you think of when you crave something real, something flavorful, and something that feels like home.
                </p>
                <p className='Sec-par'>
                    Sourcing the freshest local ingredients, using sustainable practices, and innovating with every season — that’s how we ensure quality on every plate.
                </p>
            </motion.div>
        </section>
    )
}

export default AbtRevSection