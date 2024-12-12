import "./global.css"
import Header from "./components/header"
export default function Page() {
    return (
        <>
        <Header/>
        <input></input>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
         <p>Add Flight</p>
         </button>
         {/** Grid Table */}
         <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
           Export data.txt file
         </button>
         {/** Footer */}
        </>
        
    )

  }