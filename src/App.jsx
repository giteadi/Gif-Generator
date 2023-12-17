import Random from "./components/Random"
import Tag from './components/Tag'

export default function App() {
  return(
    <div className="w-full h-screen flex-col background relative overflow-x-hidden ">
      <h1 className="bg-white rounded-lg absolute w-11/12 text-center mt-[30px] justify-center ml-[25px] overflow-hidden text-3xl font-bold ">Random Gifs</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[100px] absolute  ">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
