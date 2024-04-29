import React from "react";
import { Text, ImageBackground, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";

export function Explore(_props: any) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/treeBackground.jpg")}
    >
      <Text style={styles.title}>DUNNING READ NATURAL AREA</Text>
      <Text style={styles.title}>About Us</Text>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.missionHeader}> Our Mission</Text>

        <Text style={styles.missionContent}>
          The Dunning Read Natural Area Park Advisory Council is a volunteer
          group of community members who are passionate about the DRNA. The
          group’s mission is to support the Chicago Park District in restoring
          and preserving this natural area to provide a quality habitat for
          diverse native plants and wildlife as well as opportunities for
          access, education, and recreation for the entire community.
        </Text>

        <Text style={styles.missionHeader}> Operating Hours</Text>
        <Text style={styles.missionContent}>
          Natural Areas are open from dawn to dusk daily!
        </Text>

        <Text style={styles.missionHeader}> Community </Text>
        <Text style={styles.missionContent}>
          The DRNA PAC is part of a thriving Northwest side community, and over
          the years, numerous local stakeholders have contributed to the
          betterment of the natural area. We collaborate with the following
          partners whenever possible, and are appreciative of their
          contributions to the site.
        </Text>

        <Text style={styles.missionHeader}> Volunteer With Us</Text>
        <Text style={styles.missionContent}>
          Volunteer workdays are held at the DRNA from 9am-12pm on the third
          Saturday of every month. Activities include clearing invasive species,
          beautification, litter clean up, and other projects.Are you interested
          in getting involved or being added to our email list? Want to share
          your thoughts and ideas or ask questions?{" "}
          <Link
            style={styles.volunteerLink}
            href={"https://dunningnatural.org/contact/"}
          >
            Please contact us.
          </Link>{" "}
          We look forward to hearing from you!
        </Text>
      </ScrollView>
      <Link style={styles.indexNavigator} href={"/"}>
        {" "}
        Back To Home Page{" "}
      </Link>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: "lightgreen",
    marginHorizontal: 15,
  },

  title: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
  },
  missionHeader: {
    marginTop: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    alignItems: "center",
    textDecorationLine: "underline",
  },
  missionContent: {
    marginTop: 10,
    marginHorizontal: 15,
    color: "black",
    fontSize: 15,
    textAlign: "left",
    alignItems: "center",
  },
  volunteerLink: {
    fontWeight: "bold",
    color: "red",
    fontSize: 15,
    textDecorationLine: "underline",
  },

  indexNavigator: {
    backgroundColor: "lightblue",
    color: "black",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
    marginTop: 10,
  },
});

export default Explore;
