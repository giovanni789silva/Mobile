import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import MovieTheWheel from "../../assets/movies/velozesefuriosos9.png";
import { styles } from "./style.js";
import { MoviesCard } from "../../components/MoviesCard/index.js";
import { MOVIESWATCHING } from "../../utils/moviesWatching.js";
import { MOVIESWATCH } from "../../utils/moviesWatch.js";
import { MOVIESCRIME } from "../../utils/moviesCrimes.js";
import AmazonLogo from "../../assets/amazon_logo.png";
import Icon from "react-native-vector-icons/Ionicons";

export const Home = () => {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={PrimeVideoLogo} style={styles.primeLogoImg}></Image>
        <Image source={AmazonLogo} style={styles.amazonLogoImg}></Image>
      </View>

      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>TV Shows</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>Movies</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>Kids</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.movieText}>Acabaram de chegar</Text>

      <ScrollView>
        <TouchableOpacity style={styles.movieImageThumbnail}>
          <Image source={MovieTheWheel}></Image>
        </TouchableOpacity>

        <Text style={styles.movieText}>Continue assistindo...</Text>

        
        <FlatList
          data={MOVIESWATCHING}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MoviesCard movieURL={item.moviesURL}></MoviesCard>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.contentList}
        />
        
        <Text style={styles.movieText}>Filmes sobre crime</Text>

        <FlatList
          data={MOVIESCRIME}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MoviesCard movieURL={item.moviesURL}></MoviesCard>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.contentList}
        />

        <Text style={styles.movieText}>Assista em outros idiomas</Text>

        <FlatList
          data={MOVIESWATCH}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MoviesCard movieURL={item.moviesURL}></MoviesCard>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.contentList}
        />

          {/*
          Nome: Giovanni Teixeira e Silva
          RA: 24271861 
          Data: 17/09/2025*/}

      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="home-outline" size={25} color={"#fff"}></Icon>
          <Text style={styles.label}>Início</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Icon name="arrow-down-outline" size={25} color={"#fff"}></Icon>
          <Text style={styles.label}>Downloads</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Icon name="settings-outline" size={25} color={"#fff"}></Icon>
          <Text style={styles.label}>Conigurações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
