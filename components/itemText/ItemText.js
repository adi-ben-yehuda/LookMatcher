import styles from "./ItemText.style";
import { View, Text } from "react-native";

const ItemText = () => {
  return (
    <View>
      <View style={styles.itemName}>
        <Text style={styles.itemNameText}>Your Item Name</Text>
      </View>

      <View style={styles.itemPrice}>
        <Text style={styles.itemPriceText}>Price: ₪ 80</Text>
      </View>

      <View style={styles.itemColor}>
        <Text style={styles.itemColorText}>Color: Pink</Text>
      </View>

      <View style={styles.itemSize}>
        <Text style={styles.itemSizeText}>Size: M</Text>
      </View>
    </View>
  );
};

export default ItemText;
