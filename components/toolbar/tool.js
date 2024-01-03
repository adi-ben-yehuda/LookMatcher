import * as React from "react";
import {  View, Image, TouchableOpacity } from "react-native";
import styles from "./tool.style";




const ToolBar2 = () => {


    return (
            <View style={[styles.password]}>
                <View

                    style={styles.newData}
                    mode="outlined"

                />

                <TouchableOpacity>
                    <View style={styles.center}>
                        <Image

                            style={[styles.ProfileIcon1]}
                            contentFit="cover"
                            source={require("../../assets/icons/profile-bar.png")}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.center}>
                        <Image

                            style={[styles.heartIcon1]}
                            contentFit="cover"
                            source={require("../../assets/icons/heart-bar.png")}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.center}>
                        <Image

                            style={[styles.homeIcon]}
                            contentFit="cover"
                            source={require("../../assets/icons/home1.png")}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.center}>
                        <Image

                            style={[styles.searchIcon]}
                            contentFit="cover"
                            source={require("../../assets/icons/search-bar.png")}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.center}>
                        <Image

                            style={[styles.shirtIcon]}
                            contentFit="cover"
                            source={require("../../assets/icons/shirt-bar.png")}
                        />
                    </View>
                </TouchableOpacity>



           
        </View>


    );
};

export default ToolBar2;
