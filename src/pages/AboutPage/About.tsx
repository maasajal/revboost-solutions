import aboutCover from "../../assets/aboutUs/image 14.png";
import img1 from "../../assets/aboutUs/image 17.png";
import img2 from "../../assets/aboutUs/image 19.png";
import img3 from "../../assets/aboutUs/image 18.png";
import img4 from "../../assets/aboutUs/image 20.png";
import circle from '../../assets/aboutUs/Vector.svg';
import choose from '../../assets/aboutUs/image 21.png'


const About = () => {
  return (
    <div className=" md:px-14 lg:px-20 md:mt-10 lg:mt-16">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16 ">
        <div>
          <img
            src={aboutCover}
            alt=""
            className="w-full md:w-[600px] h-72 md:h-[400px]"
          />
        </div>
        <div className="px-4 md:px-0">
          <p className="font-montserrat font-bold text-2xl md:text-4xl">
            Who are we
          </p>
          <h5 className="font-normal text-[16px] mt-2 md:mt-6 lg:mt-11 w-auto md:w-72 lg:w-[470px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </h5>
        </div>
      </div>

      <div className="mt-7 md:mt-10 lg:mt-16 px-4 md:px-0">
        <p className="font-montserrat font-bold text-xl md:text-4xl">
          We provide best solution for <br /> your business
        </p>
        <h2 className="font-normal text-lg mt-2 md:mt-6 lg:mt-11 lg:w-[939px] ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quo
          quisquam nisi rerum fugit iure at voluptate ab aspernatur recusandae,
          sed nesciunt commodi? Nostrum fugiat distinctio qui expedita
          reprehenderit? Voluptates. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Nulla, animi fugiat. Similique unde ut quia neque
          modi eos ducimus ipsam nesciunt soluta voluptate, dolore optio
          officiis cum nam magni alias!
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-5 mt-14 px-4 md:px-0">
        <img
          src={img1}
          alt=""
          className="md:w-[300px] lg:w-[422px] md:h-[200px] lg:h-[259px]"
        />
        <img
          src={img2}
          alt=""
          className="md:w-[350px] lg:w-[541px] md:h-[200px] lg:h-[345px]"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 md:gap-0 md:mt-0 px-4 md:px-0">
        <img
          src={img3}
          alt=""
          className="md:mt-10 lg:-mt-12 md:-ml-0 lg:-ml-4 md:w-[300px] lg:w-auto"
        />
        <div className="md:w-[330px] lg:w-[390px] md:h-[210px] lg:h-[221px] bg-[#FF0000] rounded-2xl md:-ml-2 lg:ml-6 md:mt-10 lg:mt-7">
          <p className="text-white text-4xl font-semibold flex text-center items-center h-[230px]">
            Your digital billing solution is here
          </p>
        </div>
        <img
          src={img4}
          alt=""
          className="md:ml-36 lg:ml-4 w-full md:w-full lg:w-[315px] h-[221px] md:mt-6 lg:mt-7"
        />
      </div>

      <div className="mt-20 md:mt-10 lg:mt-16 bg-black  h-auto md:h-full lg:h-[212px] rounded-none md:rounded-xl  flex justify-center items-center">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-2 lg:gap-56 md:py-10 lg:py-0 md:px-20 lg:px-0">
            <div className="space-y-2 md:ml-0 lg:ml-7 mb-2 md:mb-0 mt-2 md:mt-0">
              <p className="text-white font-semibold text-4xl">1200</p>
              <div className="w-[133px] h-1 bg-[#FF0000]"></div>
              <p className="text-white font-medium text-2xl">Total Clients</p>
            </div>

            <div className="space-y-2 md:ml-20 lg:ml-0 mb-2 md:mb-0">
              <p className="text-white font-semibold text-4xl">50</p>
              <div className="w-[165px] h-1 bg-[#FF0000]"></div>
              <p className="text-white font-medium text-2xl">Country Serves</p>
            </div>

            <div className="space-y-2 md:mt-5 lg:mt-0 mb-2 md:mb-0">
              <p className="text-white font-semibold text-4xl">4000</p>
              <div className="w-[147px] h-1 bg-[#FF0000]"></div>
              <p className="text-white font-medium text-2xl">Total Projects</p>
            </div>

            <div className="space-y-2 md:ml-20 lg:ml-0 md:mt-5 lg:mt-0 mb-2 md:mb-0">
              <p className="text-white font-semibold text-4xl">1500</p>
              <div className="w-[150px] h-1 bg-[#FF0000]"></div>
              <p className="text-white font-medium text-2xl">Total Reviews</p>
            </div>
          </div>

        </div>

      </div>


      <div className="mt-10 md:mt-10 lg:mt-16">
        <p className="text-center font-montserrat font-bold text-2xl md:text-4xl">Our mission</p>
        <div className="flex justify-center mt-2 md:mt-6">
          <div className="text-xl font-normal">
            <div className="flex items-center gap-2">
              <img src={circle} alt="" className="h-3 w-3" />
              <p>Mission</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={circle} alt="" className="h-3 w-3" />
              <p>Mission</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={circle} alt="" className="h-3 w-3" />
              <p>Mission</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={circle} alt="" className="h-3 w-3" />
              <p>Mission</p>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-10 md:mt-10 lg:mt-16">
        <p className="text-center font-montserrat font-bold text-2xl md:text-4xl mb-10">Why choose us</p>
        <div className="w-full h-auto  drop-shadow-md bg-[#F6F4FA] rounded-xl p-6 md:p-10 lg:p-16">
          <div className="flex flex-col md:flex-col-reverse lg:flex-row justify-between items-center">
            <div>
              <p className="font-montserrat text-xl md:text-3xl font-semibold md:font-bold mb-4">With knowledge,skills<br />and hard work</p>
              <p className="text-lg font-normal mb-4  lg:w-[577px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
              <p className="font-montserrat font-semibold md:font-semibold text-xl md:text-2xl mb-4">Your road to success</p>
              <p className="text-lg font-normal lg:w-[577px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>


            <div>
              <img src={choose} alt="" className="w-full h-full md:mb-10 lg:mb-0 mt-5 md:mt-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
