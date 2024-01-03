import * as React from "react";
import { ScrollView } from "react-native";

import Results from "../components/results/Results";
import ToolBar from "../components/toolbar/ToolBar";

const ResultsPage = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Results></Results>
            <ToolBar></ToolBar>
        </ScrollView>
    );
};

export default ResultsPage; 
