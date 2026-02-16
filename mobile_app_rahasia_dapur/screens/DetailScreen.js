import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ActivityIndicator, Platform } from 'react-native';
import axios from 'axios';

import { API_URL } from '../config';

export default function DetailScreen({ route }) {
    const { recipeId } = route.params;
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const res = await axios.get(`${API_URL}/recipes/${recipeId}`);
                setRecipe(res.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchRecipe();
    }, [recipeId]);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#ff6b6b" />
            </View>
        );
    }

    if (!recipe) return null;

    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: recipe.imageUrl || 'https://via.placeholder.com/800x400' }}
                style={styles.image}
            />
            <View style={styles.content}>
                <Text style={styles.category}>{recipe.category}</Text>
                <Text style={styles.title}>{recipe.title}</Text>

                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Modal</Text>
                        <Text style={styles.statValue}>{recipe.price}</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Time</Text>
                        <Text style={styles.statValue}>{recipe.time}</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Portion</Text>
                        <Text style={styles.statValue}>{recipe.portion || '-'}</Text>
                    </View>
                </View>

                <Text style={styles.description}>{recipe.description}</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Ingredients</Text>
                    {recipe.ingredients.map((item, index) => (
                        <Text key={index} style={styles.listItem}>• {item}</Text>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Instructions</Text>
                    {recipe.instructions.map((step, index) => (
                        <Text key={index} style={styles.listItem}>{index + 1}. {step}</Text>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Video Tutorial</Text>
                    <View style={styles.videoPlaceholder}>
                        <Text style={{ color: 'white' }}>Video Player Placeholder</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 250,
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    description: {
        fontSize: 16,
        color: '#666',
        lineHeight: 24,
        marginBottom: 20,
    },
    section: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#ff6b6b',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 5,
    },
    listItem: {
        fontSize: 16,
        color: '#444',
        marginBottom: 8,
        lineHeight: 22,
    },
    videoPlaceholder: {
        height: 200,
        backgroundColor: '#000',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    category: {
        color: '#ff6b6b',
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 14,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
    },
    statItem: {
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 12,
        color: '#888',
        marginBottom: 4,
        textTransform: 'uppercase',
    },
    statValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    }
});
