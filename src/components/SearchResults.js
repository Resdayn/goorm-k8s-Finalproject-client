import SearchItem from "./SearchItem";
import styles from "../styles/css/SearchResults.module.css";

const SearchResults = () => {
  const dummyData = [
    {
      thumbnail: "../assets/img/Kubernetes_logo.png",
      platform: "Steam",
      name: "Test Game 1",
      tags: ["FPS", "RPG"],
      originalPrice: 30000,
      discountPrice: 15000,
      cut: 50,
      link: "http://steamcommunity.com",
    },
    {
      thumbnail: "../assets/img/Kubernetes_logo.png",
      platform: "EPIC Store",
      name: "Test Game 2",
      tags: ["Strategy", "RPG"],
      originalPrice: 60000,
      discountPrice: 15000,
      cut: 75,
      link: "http://steamcommunity.com",
    },
    {
      thumbnail: "../assets/img/Kubernetes_logo.png",
      platform: "GOG",
      name: "Test Game 3",
      tags: ["Horror", "FPS"],
      originalPrice: 10000,
      discountPrice: 9000,
      cut: 10,
      link: "http://steamcommunity.com",
    },
  ];

  return (
    <section>
      <table className={styles.SearchResultsTable}>
        <tbody>
          {dummyData.map((item) => (
            <SearchItem
              key={item.name}
              thumbnail={item.thumbnail}
              platform={item.platform}
              name={item.name}
              tags={item.tags}
              originalPrice={item.originalPrice}
              discountPrice={item.discountPrice}
              cut={item.cut}
              link={item.link}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default SearchResults;
