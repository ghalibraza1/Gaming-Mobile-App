import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Video } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';
const similarGames = [
  {
    title: 'NEW STATE Mobile',
    image: require("@/assets/images/NEWSTATE.jpeg"), // Replace with actual image URL
  },
  {
    title: 'PUBG Mobile',
    image: require("@/assets/images/PUBG2.jpg"), // Replace with actual image URL
  },
  {
    title: 'Modern Combat 5',
    image: require("@/assets/images/CODMODEREN.jpg"), // Replace with actual image URL
  },
  {
    title: 'WAR MISSION',
    image: require("@/assets/images/MC5.jpg"),
  },
];

const CallofDuty = () => {
  const renderGameItem = ({ item }) => (
    <View style={styles.gameCard}>
      <TouchableOpacity>
      <Image source={item.image} style={styles.gameImage} />
      
      <Text style={styles.gameTitle}>{item.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.installButton}>
        <Text style={styles.installText}>Install</Text>
      </TouchableOpacity>
    </View>
  );
  

  return (
    <ScrollView style={styles.container}>
      {/* Video Section */}
      <Video
        source={require("@/assets/images/Call of Duty®_ Mobile - Official Season 4_ Fool's Gold Trailer.mp4")}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        style={styles.video}
      />
      
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/CODMODEREN.jpg")}
          style={styles.image}
        />
        <View style={styles.headerText}>
          <Text style={styles.title}>Call of Duty: Mobile Season 4</Text>
          <Text style={styles.subtitle}>Action | Fight | PVP</Text>
          <View style={styles.rating}>
            <FontAwesome name="star" size={16} color="gold" />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
        </View>
      </View>
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Downloads</Text>
          <Text style={styles.infoText}>100M+</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Rating</Text>
          <Text style={styles.infoText}>Rated</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Size</Text>
          <Text style={styles.infoText}>2.5 GB</Text>
        </View>
      </View>
      <View style={styles.about}>
        <Text style={styles.aboutTitle}>About Game</Text>
        <Text style={styles.ageRating}>16+ Rated for 16+</Text>
        <Text style={styles.aboutText}>
          It's CALL OF DUTY® and more, like you never seen before. The famous FPS multiplayer game is back with new seasons full of action! Play this fun first-person shooter (FPS) and explore popular Multiplayer modes such as Team Deathmatch, Domination, and more.
        </Text>
      </View>
      <View style={styles.similarGames}>
        <Text style={styles.similarTitle}>Similar Games</Text>
        <FlatList
          data={similarGames}
          renderItem={renderGameItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <TouchableOpacity style={styles.installGameButton}>
        <Text style={styles.installGameText}>Install Game</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    padding: 16,
  },
  video: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  headerText: {
    marginLeft: 16,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#888',
    fontSize: 14,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingText: {
    color: '#fff',
    marginLeft: 4,
    fontSize: 16,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoTitle: {
    color: '#aaa',
    fontSize: 14,
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  about: {
    marginBottom: 16,
  },
  aboutTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ageRating: {
    color: '#888',
    marginBottom: 8,
  },
  aboutText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
  },
  similarGames: {
    marginBottom: 16,
  },
  similarTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  gameCard: {
    marginRight: 16,
    alignItems: 'center',
  },
  gameImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  gameTitle: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 8,
  },
  installButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  installText: {
    color: '#fff',
    fontSize: 14,
  },
  installGameButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  installGameText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CallofDuty;
