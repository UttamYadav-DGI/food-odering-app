import { IMG_CDN } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import Cart from "./Cart";
const ItemList=({data})=>{
    console.log("itemlist",data)

    const dispatch=useDispatch();
    const handleAddItem=(items)=>{
      //dispatch an action 
      return dispatch(addItem(items))
    }


    return (
       <div>
       {data?.map((items) => (
  <div
    className="w-full max-w-4xl mx-auto p-4 my-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start bg-white rounded-lg shadow-sm"
    key={items.card.info.id}
  >
    {/* Left Text Section */}
    <div className="flex-1 pr-4">
      <h3 className="font-semibold text-lg mb-1">{items.card.info.name}</h3>
      <p className="text-sm text-gray-800 mb-1">
        ₹{(items.card.info.price || items.card.info.defaultPrice) / 100}
      </p>
      <p className="text-xs text-gray-600">{items.card.info.description}</p>
    </div>

    {/* Right Image + Add Button Section */}
    {items.card.info.imageId && (
      <div className="w-32 h-auto mt-4 md:mt-0 md:w-40 shrink-0 flex flex-col items-center justify-between">
        <img
          className="w-full h-24 object-cover rounded-md"
          src={IMG_CDN + items.card.info.imageId}
          alt={items.card.info.name}
        />

        {/* ADD + Button */}
        <button className="mt-2 px-4 py-1 bg-white border border-green-500 text-green-600 font-semibold text-sm rounded hover:bg-green-100 transition"
        onClick={ ()=> handleAddItem(items)}

        >
          ADD +
        </button>
      </div>
    )}
  </div>
))}
       </div>
    )
}
export default ItemList;