import { useState, useEffect } from "react";
import { FaDiceFive } from "react-icons/fa";
import { RiPauseMiniFill } from "react-icons/ri";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setData(response.data.slip);
      console.log(response.data.slip);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-general min-h-screen flex items-center justify-center px-4 xl:px-0">
        <div className="container bg-primary max-w-[400px] min-w-[300px] w-auto h-[300px] shadow-xl rounded-xl relative p-2 px-8 flex justify-evenly flex-col">
          <h4 className="text-glow text-center text-sm font-medium tracking-wide">
            ADVICE #{data ? data.id : 'Loading...'}
          </h4>
          <h2 className="text-primary font-semibold text-2xl text-center">
            {loading ? <div className="w-full flex items-center justify-center flex-col">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mb-4 "></div>
            <p>Please wait...</p>
            </div> : `''${data ? data.advice : 'No advice available'}''`}
          </h2>
          <div className="w-full flex items-center justify-center mb-2">
            <span className="border border-gray-600 w-1/2"></span>
            <span className="text-primary font-extrabold text-3xl">
              <RiPauseMiniFill />
            </span>
            <span className="border border-gray-600 w-1/2"></span>
          </div>

          <div className="dice flex items-center justify-center absolute -bottom-5 w-full left-0" onClick={fetchData}>
            <button className="text-2xl hover:shadow-glow  bg-glow p-3 rounded-full cursor-pointer">
              <FaDiceFive />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
