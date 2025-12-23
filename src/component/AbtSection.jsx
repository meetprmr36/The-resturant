import { AnimatePresence, motion } from "framer-motion";

const AbtSection = () => {
    return (
        <section className="about-section">
            <motion.div
                className="Sec-content"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className='Sec-Heading'>Our Story</h2>
                <p className='Sec-par'>
                    Founded in 2020, SpiceHaus emerged from a deep passion for food, culture, and bringing people together. What began as a small kitchen dream quickly grew into a flavorful journey that continues to evolve with every dish we serve.
                </p>
                <p className='Sec-par'>
                    Our chefs carefully blend age-old spices with modern cooking techniques to create food that’s comforting, exciting, and unforgettable.
                </p>
                <p className='Sec-par'>
                    More than just a restaurant, SpiceHaus is an experience — a place where stories are shared over meals, where traditions are honored, and where every guest feels like family.
                </p>
            </motion.div>
            <motion.img
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
                alt="Our Kitchen"
                className="Sec-img"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            />
        </section>
    )
}
export default AbtSection