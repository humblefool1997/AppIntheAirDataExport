import Footer from "../components/footer";
import Header from "../components/header";
import FlightList from "@/components/FlightsList";
import "./global.css"
export default function Page() {
    return (
        <>
<Header></Header>
        <p>As you are aware App in the Air app was shutdown on 19th October 2024. Many of users missed to export flight data to data.txt. 
          This web app helps to generate data.txt file import to other apps 
          such as Flightly
        </p>
        <input></input>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
         <p>Add Flight</p>
         </button>
         <FlightList/>
<Footer></Footer>
          </>
        
    )

  }