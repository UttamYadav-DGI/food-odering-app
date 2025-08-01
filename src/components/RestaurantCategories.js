import ItemList from "./ItemList";

const RestaurantCategories = ({ data, showItems, setshowItemIdx, index }) => {
  
  const handleClick = () => {
    if (showItems) {
      // If already open, close it
      setshowItemIdx(null);
    } else {
      // Open this category
      setshowItemIdx(index);
    }
  };

  return (
    <div className="justify-items-center">
      {/* Category Card */}
      <div className="w-6/12 bg-gray-100 my-3 p-3 rounded-xl">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "▲" : "▼"}</span>
        </div>

        {/* Accordion Items */}
        {showItems && (
          <ItemList key={data?.categoryId} data={data?.itemCards} />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategories;
