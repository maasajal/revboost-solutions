import PageCover from "../../components/PageCover";
import aboutCover from "../../assets/aboutUs/image 14.png"
import img1 from '../../assets/aboutUs/image 17.png'
import img2 from '../../assets/aboutUs/image 19.png'
import img3 from '../../assets/aboutUs/image 18.png'
import img4 from '../../assets/aboutUs/image 20.png'


const About = () => {
  return (
    <div className=" md:px-14 lg:px-20 md:mt-10 lg:mt-16">
      {/* <section className="contact_banner">
        <PageCover
          bgCoverImg=""
          heading="About Us"
          title="Know more About RevBoost Solutions"
          headingText="We would love to hear from you"
        />
      </section> */}

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16">
        <div>
          <img src={aboutCover} alt="" className="w-[600px] h-[400px]"/>
        </div>
        <div>
          <p className="font-montserrat font-bold text-2xl md:text-4xl">Who are we</p>
          <h5 className="font-normal text-[16px] mt-2 md:mt-6 lg:mt-11 w-auto md:w-72 lg:w-[470px]">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
          </h5>
        </div>
      </div>


      <div className="md:mt-10 lg:mt-16">
        <p className="font-montserrat font-bold text-2xl md:text-4xl">We provide best solution for <br /> your business</p>
        <h2 className="font-normal text-lg mt-2 md:mt-6 lg:mt-11 lg:w-[939px] ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quo quisquam nisi rerum fugit iure at voluptate ab aspernatur recusandae, sed nesciunt commodi? Nostrum fugiat distinctio qui expedita reprehenderit? Voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, animi fugiat. Similique unde ut quia neque modi eos ducimus ipsam nesciunt soluta voluptate, dolore optio officiis cum nam magni alias!
        </h2>
      </div>



      <div className="max-w-6xl mx-auto flex gap-5 mt-14">
        <img src={img1} alt="" className="w-[422px] h-[259px]"/>
        <img src={img2} alt="" className="w-[541px] h-[345px]"/>
      </div>

      <div className="max-w-7xl mx-auto flex">
        <img src={img3} alt="" className="-mt-16 -ml-4"/>
        <div className="w-[363px] h-[221px] bg-[#FF0000] rounded-2xl ml-6 mt-7">
          <p className="text-white text-4xl font-semibold flex text-center items-center h-[230px]">Your digital billing solution is here</p>
        </div>
        <img src={img4} alt="" className="ml-4 w-[315px] h-[221px] mt-7" />
      </div>



      <div>

      </div>
    </div>
  );
};

export default About;
