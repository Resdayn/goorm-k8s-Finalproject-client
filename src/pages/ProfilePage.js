import ItemDisplay from "../components/ItemDisplay";
import ItemPrices from "../components/ItemPrices";
import PriceHistory from "../components/PriceHistory";

const ProfilePage = () => {
  return (
    <section>
      <ItemDisplay />
      <ItemPrices />
      <PriceHistory />
    </section>
  );
};

export default ProfilePage;
