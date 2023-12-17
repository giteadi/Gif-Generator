import { useEffect, useState } from "react";
import axios from "axios";
export default function Tag() {
  const [gif, setGif] = useState(" ");
  const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=cdhyw7WtAlKHfHrHGLRgvKd8d4vTCIYi&tag=&rating=g&tag=${tag}`;
      const {data} = await axios.get(url);
        const imageSource=data.data.images.downsized_large.url;
        console.log(imageSource)
        setGif(imageSource)
        setLoading(false);

    } catch (error) {
      console.error("Error fetching random GIF:", error);
      // Handle error, e.g., set an error state or display a message to the user
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }
const[tag,setTag]=useState(" ")
  function changeHandler(event){
     setTag(event.target.value)
  }
  return (
    <div className="w-1/2  bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl mt-[15px] underline uppercase font-bold">Random GIf</h1>
      <img src={gif} alt="Random GIF" width={450} />
      <input
        className="w-10/12 bg-slate-100 rounded-lg font-bold py-2 text-lg mb-[1px] text-center " onChange={changeHandler}
        value={tag}
        />
      <button onClick={clickHandler} className="w-10/12 bg-slate-100 rounded-lg font-bold py-2 text-lg mb-[20px] ">
        Generate
      </button>
    </div>
  );
}