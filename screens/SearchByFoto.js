import * as React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./SearchByFoto.style";
import { LinearGradient } from "expo-linear-gradient";

import ToolBar from "../components/toolbar/ToolBar";

const SearchFoto = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.home}>

                <View style={styles.title}>
                    <Text style={styles.titelText}>Did You Saw An Item You Want?</Text>
                </View>
                <View style={styles.title2}>
                    <Text style={styles.titelText2}>Take A Picture To Search For Something Similar</Text>
                </View>


                <TouchableOpacity>
                    <LinearGradient
                        style={[styles.recUpLeft]}
                        locations={[0, 1]}
                        colors={["#29085f", "#b941d7"]}
                    >
                        <Image
                            style={styles.iconsButtons}
                            source={require("../assets/camera.png")}
                        />
                        <Text style={styles.text}>Camera</Text>
                    </LinearGradient>
                </TouchableOpacity>

                
                <TouchableOpacity>
                    <LinearGradient
                        style={[styles.recUpRight]}
                        locations={[0, 1]}
                        colors={["#29085f", "#b941d7"]}
                    >
                        <Image
                            style={styles.iconsButtons}
                            source={require("../assets/gallery.png")}
                        />
                        <Text style={styles.text}>Photo</Text>
                    </LinearGradient>
                </TouchableOpacity>







            </View>
            <ToolBar />
        </ScrollView>
    );
};

export default SearchFoto;
