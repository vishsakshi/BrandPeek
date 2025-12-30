import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getBrands } from "../api/brandsApi";
import BrandCard from "../components/BrandCard";
import Loader from "../components/Loader";
import ErrorView from "../components/ErrorView";
import SpotlightBackground from "../components/SpotlightBackground";

export default function HomeScreen({ navigation }) {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch brands when component mounts
    useEffect(() => {
        fetchBrands();
    }, []);

    const fetchBrands = async () => {
        try {
            setError(null);
            setLoading(true);
            const data = await getBrands();
            setBrands(data);
        } catch (e) {
            // Show user-friendly error message
            setError(e.message || "Failed to load brands");
        } finally {
            setLoading(false);
        }
    };

    // Navigate to brand detail screen when a card is tapped
    const handlePress = (brand) => {
        navigation.navigate("BrandDetail", { brand });
    };

    if (loading) {
        return (
            <View style={{ flex: 1 }}>
                <SpotlightBackground />
                <Loader message="Loading brands..." />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1 }}>
                <SpotlightBackground />
                <ErrorView message={error} onRetry={fetchBrands} />
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <SpotlightBackground />
            <SafeAreaView style={{ flex: 1 }} edges={['top']}>
                <ScrollView
                    contentContainerStyle={styles.container}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.heading}>Top Brands Today</Text>
                    <Text style={styles.subtitle}>Discover leading global brands</Text>

                    {brands.map((brand, index) => (
                        <BrandCard
                            key={`${brand.id}-${index}`}
                            brand={brand}
                            onPress={() => handlePress(brand)}
                        />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 30,
    },

    heading: {
        fontSize: 32,
        fontFamily: "PoppinsBold",
        fontWeight: "bold",
        color: "#ffffff",
        marginTop: 20,
        marginBottom: 8,
        letterSpacing: 0.5,
        lineHeight: 40,
    },

    subtitle: {
        fontSize: 15,
        fontFamily: "PoppinsSemi",
        color: "#ffffff",
        opacity: 0.85,
        marginBottom: 36,
        letterSpacing: 0.3,
        lineHeight: 20,
    },
});
