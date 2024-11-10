import Spline from '@splinetool/react-spline';

export default function Robot() {
  return (
    <div className="relative h-[36vh] w-[36vh]">
      <div>
        <Spline className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" scene="https://prod.spline.design/IDuI9NFR6BGFiGK3/scene.splinecode" />
      </div>
      <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl  px-12 rounded-full shadow-lg">
        Launch <br /> ISHA
      </button>
    </div>
  );
}
