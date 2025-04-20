import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const notifications = [
  {
    id: "1",
    category: "New Update",
    message:
      "It's safe now—temps are normal, and the fire is out. Stay cautious.",
    time: "06:00 - April 24",
    icon: "ios-information-circle",
  },
  {
    id: "2",
    category: "Reminder!",
    message: "Level 1 fire alert!!!",
    time: "05:00 - April 24",
    icon: "ios-alert",
  },
  {
    id: "3",
    category: "Alerts",
    message:
      "High heat raises fire risk. Stay cautious and follow safety rules.",
    time: "17:00 - April 24",
    icon: "ios-alert",
  },
  {
    id: "4",
    category: "Alerts",
    message: "Fire and high temperatures! Evacuate immediately and stay safe.",
    time: "17:00 - April 24",
    icon: "ios-alert",
  },
  {
    id: "5",
    category: "New Update",
    message:
      "Everything is normal now—no worries! Stay safe and enjoy your day.",
    time: "07:00 - April 24",
    icon: "ios-information-circle",
  },
  {
    id: "6",
    category: "Reminder!",
    message: "Stay safe and stay hydrated.",
    time: "07:00 - April 24",
    icon: "ios-information-circle",
  },
];

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notification</Text>
        <Ionicons name="notifications" size={24} color="white" />
      </View>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Ionicons
              name={item.icon}
              size={24}
              color="#16a085"
              style={styles.icon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.message}>{item.message}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#e8f5e9" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#16a085",
  },
  headerText: { fontSize: 20, fontWeight: "bold", color: "white" },
  notificationItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#dcdcdc",
  },
  icon: { marginRight: 10 },
  textContainer: { flex: 1 },
  category: { fontSize: 16, fontWeight: "bold", color: "#2c3e50" },
  message: { fontSize: 14, color: "#34495e" },
  time: { fontSize: 12, color: "#7f8c8d", marginTop: 5 },
});

export default NotificationScreen;
