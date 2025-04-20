import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FireAlertScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, Welcome Back</Text>
        <Text style={styles.subText}>Good Morning</Text>
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={styles.icon}
        />
      </View>

      <View style={styles.heatSection}>
        <View style={styles.heatInfo}>
          <Text style={styles.heatLabel}>Real Time Heat</Text>
          <Text style={styles.heatValue}>40°C</Text>
        </View>
        <View style={styles.verticleLine}></View>
        <View style={styles.heatInfo}>
          <Text style={[styles.heatLabel, styles.extreme]}>Extreme Heat</Text>
          <Text style={[styles.heatValue, styles.extreme]}>104°C</Text>
        </View>
      </View>

      <View style={styles.island}>
        <View style={styles.severityMeter}>
          <View style={styles.fireOutline}>
            <Ionicons name="ellipse-outline" size={80} color="white" />
          </View>
          <TouchableOpacity style={styles.meterButton}>
            <Ionicons name="flame" size={50} color="black" />
          </TouchableOpacity>
          <View style={styles.severityLevels}>
            <Text style={styles.severityText}>Low Severity 25%</Text>
            <Text style={styles.severityText}>Moderate Severity 26%-75%</Text>
            <Text style={styles.severityText}>High Severity 75%-99%</Text>
          </View>
        </View>

        <Text style={styles.textT}>Recent fire activities</Text>
        <View style={styles.scent}>
          <View style={styles.tabs}>
            <TouchableOpacity style={styles.tab}>
              <Text>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text>This Week</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tab, styles.activeTab]}>
              <Text>This Month</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.fireActivity}>
          {renderFireActivity("Low Severity", "18:27 - Feb 20")}
          {renderFireActivity("Moderate Severity", "17:00 - Feb 17")}
          {renderFireActivity("High Severity", "8:30 - Feb 14")}
        </View>
      </View>
    </ScrollView>
  );
}

const renderFireActivity = (severity, time) => {
  return (
    <View style={styles.activityItem}>
      <Ionicons
        name="flame"
        size={30}
        color={
          severity.includes("High")
            ? "red"
            : severity.includes("Moderate")
            ? "orange"
            : "blue"
        }
      />
      <View style={styles.activityDetails}>
        <Text style={styles.activityTitle}>{severity}</Text>
        <Text style={styles.activityTime}>{time}</Text>
      </View>
      <Text style={styles.location}>Location</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#003030" },
  header: { backgroundColor: "#003030", padding: 20, paddingTop: 40 },
  greeting: { color: "white", fontSize: 18, fontWeight: "bold" },
  subText: { color: "white", fontSize: 14 },
  icon: { position: "absolute", top: 40, right: 20 },
  heatSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#003030",
    padding: 20,
  },
  heatInfo: { alignItems: "center" },
  heatLabel: { fontSize: 14, color: "white" },
  heatValue: { fontSize: 20, fontWeight: "bold", color: "white" },
  extreme: { color: "#B41D1E" },
  severityMeter: {
    backgroundColor: "#00CC99",
    margin: 10,
    padding: 20,
    borderRadius: 25,
    alignItems: "center",
  },
  meterButton: { marginLeft: -150, marginTop: 20 },
  severityLevels: { marginTop: -70 },
  severityText: {
    fontSize: 11,
    color: "#333",
    fontWeight: "bold",
    marginEnd: -90,
    margin: 5,
  },

  fireOutline: {
    marginLeft: -150,
    marginBottom: -90,
  },

  tabs: { flexDirection: "row", justifyContent: "center", marginVertical: 10 },
  tab: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
  },

  textT: {
    fontFamily: "Arial",
    fontSize: 15,
    marginLeft: 12,
    fontWeight: "bold",
  },

  activeTab: { backgroundColor: "#999" },
  fireActivity: { padding: 10 },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    marginBottom: 5,
    borderRadius: 10,
  },

  scent: {
    backgroundColor: "#CBE5C0",
    borderRadius: 20,
    marginHorizontal: 5,
    paddingInline: 5,
  },

  activityDetails: { flex: 1, marginLeft: 10 },
  activityTitle: { fontWeight: "bold" },
  activityTime: { color: "#555" },
  location: { color: "blue" },

  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#909090",
  },

  island: {
    backgroundColor: "#FFF8E7",
    borderRadius: 30,
    height: 500,
    borderEndEndRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
