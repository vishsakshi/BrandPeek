import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SpotlightBackground from "../components/SpotlightBackground";
import { brandImages } from "../constants/brandImages";
import { getBrandById } from "../api/brandsApi";
import Loader from "../components/Loader";
import ErrorView from "../components/ErrorView";

export default function BrandDetailScreen({ route, navigation }) {
    // Get the brand passed from home screen navigation
    const { brand } = route.params;
    const [fullBrand, setFullBrand] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch full brand details when screen loads
    useEffect(() => {
        fetchBrandDetails();
    }, []);

    const fetchBrandDetails = async () => {
        try {
            setError(null);
            setLoading(true);
            // Fetch complete brand data from API
            const data = await getBrandById(brand.id);
            setFullBrand(data);
        } catch (e) {
            setError(e.message || "Failed to load brand details");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={{ flex: 1 }}>
                <SpotlightBackground />
                <Loader />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1 }}>
                <SpotlightBackground />
                <ErrorView
                    message={error}
                    onRetry={fetchBrandDetails}
                />
            </View>
        );
    }

    if (!fullBrand) {
        return (
            <View style={{ flex: 1 }}>
                <SpotlightBackground />
                <ErrorView message="Brand details not available" />
            </View>
        );
    }

    console.log(
        "DETAIL LOGO KEY:",
        fullBrand.logo,
        "→",
        brandImages[fullBrand.logo]
    );

    return (
        <View style={{ flex: 1 }}>
            <SpotlightBackground />
            <SafeAreaView style={{ flex: 1 }} edges={['top']}>
                <ScrollView
                    contentContainerStyle={styles.container}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Brand logo container */}
                    <View style={styles.logoContainer}>
                        <Image
                            source={brandImages[fullBrand.name]}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>

                    
                    <Text style={styles.description}>{fullBrand.description}</Text>

                    {/* Brand information card */}
                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>Brand Overview</Text>

                        <View style={styles.infoRow}>
                            <Text style={styles.label}>Founded</Text>
                            <Text style={styles.value}>{fullBrand.founded}</Text>
                        </View>

                        <View style={styles.dividerSmall} />

                        <View style={styles.infoRow}>
                            <Text style={styles.label}>Industry</Text>
                            <Text style={styles.value}>{fullBrand.industry}</Text>
                        </View>

                        <View style={styles.dividerSmall} />

                        <View style={styles.infoRow}>
                            <Text style={styles.label}>Headquarters</Text>
                            <Text style={styles.value}>{fullBrand.headquarters}</Text>
                        </View>
                    </View>

                    {/* Show tags only if they exist */}
                    {fullBrand.tags?.length > 0 && (
                        <View style={styles.card}>
                            <Text style={styles.sectionTitle}>Brand Focus</Text>
                            <View style={styles.tagContainer}>
                                {fullBrand.tags.map((tag, index) => (
                                    <View key={index} style={styles.tag}>
                                        <Text style={styles.tagText}>{tag}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    )}

                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.buttonText}>Follow</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 40,
        alignItems: "center",
    },

    logoContainer: {
        width: 160,
        height: 160,
        borderRadius: 20,
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
    },

    logo: {
        width: 120,
        height: 120,
        tintColor: "#ffffff",
    },

    name: {
        fontSize: 32,
        fontFamily: "PoppinsBold",
        color: "#ffffff",
        marginBottom: 8,
        textAlign: "center",
        letterSpacing: 0.5,
    },

    description: {
        fontSize: 16,
        color: "#cccccc",
        textAlign: "center",
        lineHeight: 24,
        marginBottom: 32,
        paddingHorizontal: 8,
        opacity: 0.9,
    },

    card: {
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: 20,
        padding: 24,
        marginBottom: 18,
    },

    sectionTitle: {
        fontSize: 21,
        fontFamily: "PoppinsBold",
        color: "#ffffff",
        marginBottom: 20,
        letterSpacing: 0.8,
        lineHeight: 26,
    },

    infoRow: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 4,
    },

    dividerSmall: {
        width: "100%",
        height: 1,
        backgroundColor: "rgba(255,255,255,0.1)",
        marginVertical: 3,
    },

    label: {
        fontSize: 12,
        fontFamily: "PoppinsSemi",
        color: "#aaaaaa",
        textTransform: "uppercase",
        letterSpacing: 1.5,
    },

    value: {
        fontSize: 16,
        fontFamily: "PoppinsSemi",
        color: "#ffffff",
        textAlign: "right",
        flex: 1,
        marginLeft: 20,
        letterSpacing: 0.3,
    },

    tagContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        marginTop: 8,
    },

    tag: {
        backgroundColor: "rgba(255, 255, 255, 0.18)",
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 24,
        marginRight: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.25)",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },

    tagText: {
        fontSize: 14,
        fontFamily: "PoppinsSemi",
        color: "#ffffff",
        letterSpacing: 0.4,
    },

    button: {
        width: "100%",
        backgroundColor: "#ffffff",
        paddingVertical: 16,
        borderRadius: 30,
        alignItems: "center",
        marginTop: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 3,
    },

    buttonText: {
        fontSize: 19,
        fontFamily: "PoppinsSemi",
        color: "#000000",
        letterSpacing: 0.5,
    },
});
