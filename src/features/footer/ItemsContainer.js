import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} title="Fashion Made Easy" />
      <Item Links={RESOURCES} title="Categories" />
      <Item Links={COMPANY} title="Tailor" />
      <Item
        Links={SUPPORT}
        title="Company
"
      />
    </div>
  );
};

export default ItemsContainer;
