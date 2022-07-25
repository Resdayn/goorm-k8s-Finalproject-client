import styles from "../styles/css/SearchItem.module.css";

const SearchItem = (props) => {
  return (
    <tr className={styles.SearchItemContainer}>
      <td className={styles.SearchItemThumbnail}>
        <img src={props.thumbnail}></img>
      </td>
      <td className={styles.SearchItemPlatform}>
        <h3>{props.platform}</h3>
      </td>
      <td className={styles.SearchItemNameSection}>
        <div className={styles.SearchItemName}>
          <h3>{props.name}</h3>
        </div>
        <div className={styles.SearchItemTags}>
          {props.tags.map((tag, index) => (
            <h4 key={index}>{tag}</h4>
          ))}
        </div>
      </td>
      <td className={styles.SearchItemPriceSection}>
        <div>
          <h4>Original Price</h4>
          <h4>{props.originalPrice}</h4>
        </div>
        <div>
          <h4>Discount Price</h4>
          <h4>{props.discountPrice}</h4>
        </div>
        <div>
          <h4>Cut</h4>
          <h4>{props.cut}</h4>
        </div>
      </td>
      <td className={styles.SearchItemButtonSection}>
        <button>
          <a href={props.link}>Purchase</a>
        </button>
      </td>
    </tr>
  );
};

export default SearchItem;
