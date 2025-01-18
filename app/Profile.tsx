import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react";
  import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
  import { SafeAreaProvider } from "react-native-safe-area-context";
  
  export default function GamingProfile() {
    const trendingGames = [
      { id: "1", name: "Fortnite", image: require("@/assets/images/fortnite.jpg") },
      { id: "2", name: "Call of Duty", image: require("@/assets/images/CODMODEREN.jpg") },
      { id: "3", name: "Apex Legends", image: require("@/assets/images/Apex.jpg") },
      { id: "4", name: "Valorant", image: require("@/assets/images/valorant.jpeg") },
      { id: "5", name: "NEWSTATE", image: require("@/assets/images/NEWSTATE.jpeg") },
    ];
  
    return (
      <SafeAreaProvider>
        <ImageBackground
          source={require("@/assets/images/pro.jpg")}
          style={styles.backgroundImage}
        >
          <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Gaming Profile</Text>
              <TouchableOpacity style={styles.bellButton}>
                <Ionicons name="notifications-outline" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
  
            {/* Profile Section */}
            <View style={styles.profileSection}>
              <Image
                source={require("@/assets/images/ghalib.jpg")}
                style={styles.profileImage}
              />
              <Text style={styles.name}>GamerTag007</Text>
              <Text style={styles.level}>Level: 45</Text>
            </View>
  
            {/* Menu Section */}
            <ScrollView>
              <TouchableOpacity style={styles.menuButton}>
                <Ionicons name="trophy-outline" size={24} color="#fff" style={styles.icon} />
                <Text style={styles.menuText}>View Stats</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.menuButton}>
                <Ionicons name="medal-outline" size={24} color="#fff" style={styles.icon} />
                <Text style={styles.menuText}>Achievements</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.menuButton}>
                <Feather name="users" size={24} color="#fff" style={styles.icon} />
                <Text style={styles.menuText}>Friends</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.menuButton}>
                <Ionicons name="settings-outline" size={24} color="#fff" style={styles.icon} />
                <Text style={styles.menuText}>Settings</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
              </TouchableOpacity>
  
              {/* Trending Games Section */}
              <Text style={styles.sectionHeading}>Trending Games</Text>
              
              <FlatList
                data={trendingGames}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.trendingGameCard}>
                    <TouchableOpacity>
                    <Image source={item.image} style={styles.gameImage} />
                    <Text style={styles.gameName}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
              
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      </SafeAreaProvider>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover", // Ensures the image covers the entire screen
      justifyContent: "center",
      width:"100%",
      height:"100%",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 20,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#fff",
    },
    profileSection: {
      alignItems: "center",
      marginTop: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    name: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#fff",
    },
    level: {
      fontSize: 16,
      color: "#ccc",
    },
    sectionHeading: {
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: 20,
      marginTop: 20,
      color: "#fff",
    },
    menuButton: {
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 20,
      marginVertical: 10,
      padding: 15,
      backgroundColor: "#1e1e1e",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 5 },
    },
    icon: {
      marginRight: 10,
    },
    menuText: {
      fontSize: 16,
      flex: 1,
      color: "#fff",
    },
    trendingGameCard: {
      alignItems: "center",
      marginHorizontal: 10,
      backgroundColor: "#1e1e1e",
      borderRadius: 10,
      padding: 10,
      width: 120,
    },
    gameImage: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    gameName: {
      marginTop: 10,
      fontSize: 14,
      fontWeight: "bold",
      color: "#fff",
    },
  });
  