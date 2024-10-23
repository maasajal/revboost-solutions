const ContactLocation = () => {
    return (
        <section className="w-full mt-10">
            <h2 className="mb-6">Directly Contact Us</h2>
            <iframe
                className="h-[400px] w-full mx-auto"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29218.663153387362!2d90.3977075855197!3d23.735505571459257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c366afdaf%3A0x63cbcd8b4dfb9d3c!2z4Kau4Kak4Ka_4Kad4Ka_4KayLCDgpqLgpr7gppXgpr4!5e0!3m2!1sbn!2sbd!4v1726687319634!5m2!1sbn!2sbd"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }} // Optional: to remove default iframe border
            ></iframe>
        </section>

    );
};

export default ContactLocation;
