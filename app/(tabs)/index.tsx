import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Text style={styles.greetingText}>Halo,</Text>
          <Text style={styles.nameText}>Achmad Syamsul Arifin</Text>
          <Text style={styles.nimText}>(22.52.0019)</Text>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Button Section with Icons inside borders in one row */}
          <View style={styles.buttonContainer}>
            <View style={styles.buttonBox}>
              <Icon name="book-open-outline" size={30} color="#000" />
              <Text style={styles.buttonText}>KRS</Text>
            </View>
            <View style={styles.buttonBox}>
              <Icon name="clipboard-check-outline" size={30} color="#000" />
              <Text style={styles.buttonText}>Nilai</Text>
            </View>
            <View style={styles.buttonBox}>
              <Icon name="check-circle-outline" size={30} color="#000" />
              <Text style={styles.buttonText}>Presensi</Text>
            </View>
            <View style={styles.buttonBox}>
              <Icon name="calendar" size={30} color="#000" />
              <Text style={styles.buttonText}>Jadwal</Text>
            </View>
          </View>

          {/* Jadwal Kuliah Section */}
          <Text style={styles.jadwalTitle}>Jadwal Kuliah</Text>
          <Text style={styles.jadwalText}>Jadwal kuliah tidak tersedia</Text>
        </View>

        {/* Bottom Navigation Bar */}
        <View style={styles.bottomNav}>
          <View style={styles.navItem}>
            <Icon name="home" size={24} color="#000" />
            <Text style={styles.navText}>Home</Text>
          </View>
          <View style={styles.navItem}>
            <Icon name="newspaper" size={24} color="#000" />
            <Text style={styles.navText}>Berita</Text>
          </View>
          <View style={styles.navItem}>
            <Icon name="account" size={24} color="#000" />
            <Text style={styles.navText}>Profile</Text>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  profileSection: {
    alignItems: 'flex-start',
    marginVertical: 10,
    marginLeft: 20,
  },
  greetingText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
  },
  nimText: {
    fontSize: 18,
    color: '#555',
    marginTop: 2,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  buttonBox: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flex: 1,
    marginHorizontal: 5,
    maxWidth: '22%',
  },
  buttonText: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  jadwalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'left',
    marginLeft: 20,
  },
  jadwalText: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
    marginLeft: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
  },
});