
import 'animate.css';


const Welcome = () => {
  return (
    <div className="mb-10 bg-gradient-to-t from-blue-900 via-blue-800 to-blue-900 w-11/12 mx-auto text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Job-Book
        </h1>
        <p className="text-lg md:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
          ------Where Connections Begin------
        </p>
        <div className="text-base md:text-lg mb-4 animate__animated animate__fadeIn animate__delay-4s">
          <p className="mb-2">
            Discover a world of opportunities as you step into our online
            community.
          </p>
          <p className="mb-2">
            Whether you're here to find your dream job, hire talented
            professionals, or connect with like-minded individuals, you're in
            the right place.
          </p>
          <p className="mb-2">
            Our platform is designed to empower you, facilitate meaningful
            connections, and help you achieve your goals.
          </p>
          <p>
            Join us in making opportunities happen, one chat, one bid, and one job
            at a time.
          </p>
        </div>
        <p className="text-lg animate__animated animate__fadeIn animate__delay-5s">
          Let's embark on this exciting journey together! Start exploring, start
          connecting, and start achieving today.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
