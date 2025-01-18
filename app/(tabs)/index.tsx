import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Profile from "../Profile";

const Home = () => {
  const navigate = useNavigation();

  const trendingGames = [
    {
      id: "1",
      name: "NEW STATE MOBILE",
      genre: "Action",
      rating: "4.5",
      image: require("@/assets/images/NEWSTATE.jpeg"),
    },
    {
      id: "2",
      name: "Call of Duty: Modern",
      genre: "Action",
      rating: "4.5",
      image: require("@/assets/images/CODMODEREN.jpg"),
    },
    {
      id: "3",
      name: "Modern Combat",
      genre: "Action",
      rating: "4.0",
      image: require("@/assets/images/MC5.jpg"),
    },
  ];

  const popularGames = [
    {
      id: "1",
      name: "PUBG MOBILE",
      genre: "Action, Strategy, Online",
      rating: "4.8",
      downloads: "100M+",
      image: require("@/assets/images/PUBG2.jpg"),
    },
  ];

  const renderCategoryIcon = (category) => {
    switch (category) {
      case "Racing":
        return <Ionicons name="car-sport" size={20} color="#fff" />;
      case "Strategy":
        return <Entypo name="grid" size={20} color="#fff" />;
      default:
        return <MaterialIcons name="category" size={20} color="#fff" />;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigate.navigate("Profile")}>
        <Image
          source={require("@/assets/images/ghalib.jpg")}
          style={styles.profileImage}
        />
        </TouchableOpacity>

        
        <View style={styles.crownContainer}>
         
  <Image
  
    source={require("@/assets/images/4666470.png")}
    style={styles.crownImage}
    
  />
 
  <Text style={styles.pointsText}>2,894</Text>
</View>
<TouchableOpacity>
        <Ionicons name="notifications-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput placeholder="Search games" style={styles.searchInput} />
        <Ionicons name="menu" size={20} color="#fff" />
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        {["Categories", "Racing", "Strategy"].map((category) => (
          <TouchableOpacity key={category} style={styles.categoryButton}>
            {renderCategoryIcon(category)}
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Trending Games */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Trending games</Text>
        <TouchableOpacity >
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={trendingGames}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.gameCard}onPress={() => navigate.navigate("CallofDuty")}>
            <Image source={item.image} style={styles.gameImage} />
            <Text style={styles.gameName}>{item.name}</Text>
            <Text style={styles.gameGenre}>{item.genre}</Text>
            <Text style={styles.gameRating}>⭐ {item.rating}</Text>
            <TouchableOpacity style={styles.installButton}>
              <Text style={styles.installText}>Install</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* Popular Games */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular games</Text>
      </View>
      <FlatList
        horizontal
        data={popularGames}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.popularGameCard}  >
            <Image source={item.image} style={styles.popularGameImage} />
            <View style={styles.popularGameDetails}>
              <Text style={styles.gameName}>{item.name}</Text>
              <Text style={styles.gameGenre}>{item.genre}</Text>
              <Text style={styles.gameDownloads}>
                {item.downloads} Downloads
              </Text>
              <Text style={styles.gameRating}>⭐ {item.rating}</Text>
            </View>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  crownImage: {
    width: 24, // Adjust size as needed
    height: 24, // Adjust size as needed
  },
  crownContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  pointsText: {
    color: "gold",
    fontWeight: "bold",
    marginTop: 5,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: "#fff",
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  categoryButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  categoryText: {
    color: "#fff",
    marginTop: 5,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    color: "blue",
  },
  gameCard: {
    backgroundColor: "#222",
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    width: 150,
  },
  gameImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  gameName: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 5,
  },
  gameGenre: {
    color: "#aaa",
    fontSize: 12,
  },
  gameRating: {
    color: "#fff",
    fontSize: 12,
  },
  installButton: {
    backgroundColor: "blue",
    paddingVertical: 5,
    marginTop: 5,
    borderRadius: 5,
  },
  installText: {
    color: "#fff",
    textAlign: "center",
  },
  popularGameCard: {
    backgroundColor: "#222",
    flexDirection: "row",
    padding: 10,
    marginRight: 15,
    borderRadius: 10,
  },
  popularGameImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  popularGameDetails: {
    flex: 1,
  },
  gameDownloads: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 2,
  },
});

export default Home;
