import * as React from "react";
import { ScrollView } from "react-native";

import Wishlist from "../components/wishlist/Wishlist";
import ToolBar from "../components/toolbar/ToolBar";

const WishlistPage = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Wishlist></Wishlist>
            <ToolBar></ToolBar>
        </ScrollView>
    );
};

export default WishlistPage; 
