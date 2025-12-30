import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { brandImages } from "../constants/brandImages";

export default function BrandCard({ brand, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            {/* Brand logo */}
            <View style={styles.logoContainer}>
                <Image
                    source={brandImages[brand.name]}
                    style={styles.logo}
                />
            </View>

            {/* Brand name and tagline */}
            <View style={styles.textContainer}>
                <Text style={styles.name}>{brand.name}</Text>
                {brand.tagline && (
                    <Text style={styles.tagline}>{brand.tagline}</Text>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "rgba(255,255,255,0.12)",
        padding: 16,
        borderRadius: 16,
        marginBottom: 14,
        alignItems: "center",
    },
    logoContainer: {
        width: 56,
        height: 56,
        marginRight: 16,
        backgroundColor: "#ffffff",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    logo: {
        width: 40,
        height: 40,
        resizeMode: "contain",
    },
    textContainer: {
        flex: 1,
    },
    name: {
        color: "#ffffff",
        fontSize: 19,
        fontFamily: "PoppinsSemi",
        fontWeight: "600",
        letterSpacing: 0.3,
        lineHeight: 24,
        marginBottom: 4,
    },
    tagline: {
        color: "#cccccc",
        fontSize: 14,
        fontFamily: "PoppinsSemi",
        fontWeight: "400",
        opacity: 0.9,
        lineHeight: 18,
        letterSpacing: 0.2,
    },
});
