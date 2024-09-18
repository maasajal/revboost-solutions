import { CiLinkedin, CiMail } from "react-icons/ci"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { IoIosCall } from "react-icons/io"

const Address = () => {
  return (
    <div className="grid grid-cols-1 md:flex md:justify-evenly lg:flex lg:justify-evenly inter">
        <div className="flex justify-evenly gap-x-[30px]">
            <div className="pt-2">
            <CiMail className="mb-2"/>
            <IoIosCall className="mb-2"/>
            <FaFacebookF className="mb-2"/>
            <FaInstagram className="mb-2"/>
            <CiLinkedin />
            </div>
            <div>
                <p className="font-medium">revboost@solution.com</p>
                <p className="font-medium">000000000</p>
                <p className="font-medium">facebook.com/reevboost</p>
                <p className="font-medium">instagram.com/reevboost</p>
                <p className="font-medium">linkedin.com/reevboost</p>
                
            </div>
        </div>
        <div>
            <section>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29218.663153387362!2d90.3977075855197!3d23.735505571459257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c366afdaf%3A0x63cbcd8b4dfb9d3c!2z4Kau4Kak4Ka_4Kad4Ka_4KayLCDgpqLgpr7gppXgpr4!5e0!3m2!1sbn!2sbd!4v1726687319634!5m2!1sbn!2sbd"referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </div>
    </div>
  )
}

export default Address