import ItemDisplay from "../components/ItemDisplay";
import ItemPrices from "../components/ItemPrices";
import PriceHistory from "../components/PriceHistory";
import DlcDisplay from "../components/DlcDisplay";

const ProfilePage = () => {
  return (
    <section>
      <ItemDisplay />
      <ItemPrices />
      <PriceHistory />
      <DlcDisplay />
    </section>
  );
};

export default ProfilePage;
