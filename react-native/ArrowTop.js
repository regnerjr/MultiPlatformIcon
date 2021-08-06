import * as React from "react";
import { Image, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    icon: {
        height: 24,
        resizeMode: "contain",
        width: 24,
    }
});
export const ArrowTop = (props) => {
    const { style, ...rest } = props;
    return (<Image style={[styles.icon, style]} {...rest} source={require("ArrowTop.png")}/>);
};
//# sourceMappingURL=ArrowTop.js.map