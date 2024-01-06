import { Link } from "react-router-dom";


const BannerButton = () => {
 
  return (
    <div className="justify-center">
      <button className="absolute bg-black text-white rounded-lg p-3 mt-96 mx-96 my-96 items-center">
        <Link to="/mens">Shop Now</Link>
      </button>
    </div>
  );
};

const BannerPic = () => {
  return (
    <div className="justify-center flex">
      <img
        className="m-0 items-center w-screen h-5/6"
        src="https://s7ap1.scene7.com/is/image/adityabirlafashion/FOREVER_D_HB4?resMode=sharp2&wid=1440&hei=597"
        alt="banner_img"
      />
      {/* <button className="hover:shadow-xl capitalize transition-all p-2 px-4 bg-green-700 rounded w-[fit-content] text-white text-sm font-bold my-4">
            <Link to="/mens">Shop Now</Link>
            </button> */}
    </div>
  );
};

const Home = () => {
  return (
    <div className="justify-center">
      <BannerButton />
      <BannerPic />
    </div>
  );
};

export default Home;
