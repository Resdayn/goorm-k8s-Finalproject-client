import { useEffect, useState } from "react";
import styles from "../styles/css/ItemDisplay.module.css";

const ItemDisplay = () => {
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    const results = require("../assets/appdetails.json");
    const refinedData = {
      name: results[570].data.name,
      type: results[570].data.type,
      appid: results[570].data.steam_appid,
      description: results[570].data.detailed_description,
      thumbnail: results[570].data.header_image,
      developer: results[570].data.developers[0],
      publisher: results[570].data.publishers[0],
      releaseDate: results[570].data.release_date.date,
    };

    setGameData(refinedData);
  
  }, []);

  return (
    <section className={styles.itemDisplaySection}>
      <div className={styles.itemDisplayLogoBar}>
        <div className={styles.itemDisplayLogoBarTitle}>
          <h1>[LOGOHERE]</h1>
          <h1>{gameData.name}</h1>
        </div>
        <div className={styles.itemDisplayLogoBarButtons}>
          <button>Store</button>
          <button>Wishlist</button>
        </div>
      </div>
      <div className={styles.itemDisplayFlex}>
        <table className={styles.itemDisplayTable}>
          <tr>
            <td>APP ID</td>
            <td>{gameData.appid}</td>
          </tr>
          <tr>
            <td>APP Type</td>
            <td>{gameData.type}</td>
          </tr>
          <tr>
            <td>Developer</td>
            <td>{gameData.developer}</td>
          </tr>
          <tr>
            <td>Publisher</td>
            <td>{gameData.publisher}</td>
          </tr>
          <tr>
            <td>Last Update</td>
            <td>Last Update DATA</td>
          </tr>
          <tr>
            <td>Release Date</td>
            <td>{gameData.releaseDate}</td>
          </tr>
        </table>
        <div className={styles.itemDisplayRightSection}>
          <img
            className={styles.itemDisplayThumbnail}
            src={gameData.thumbnail}
          />
          <div>
            <p> Rating of ITEM</p>
            <p>Current Players</p>
          </div>
          <p dangerouslySetInnerHTML={{__html: gameData.description}}></p>
        </div>
      </div>
    </section>
  );
};

export default ItemDisplay;
