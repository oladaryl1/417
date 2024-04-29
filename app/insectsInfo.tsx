import React, { useState } from "react";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

import {
  SafeAreaView,
  Text,
  Image,
  Modal,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const bumblebeeImage = require("../assets/images/exploreLinks/Bumblebee.jpg");
const butterflyImage = require("../assets/images/exploreLinks/CabbageB.jpg");
const cicadaImage = require("../assets/images/exploreLinks/Cicada.jpg");
const dragonflyImage = require("../assets/images/exploreLinks/Dragonfly.jpg");
const fireflyImage = require("../assets/images/exploreLinks/Firefly.jpg");
const beetleImage = require("../assets/images/exploreLinks/Beetle.jpg");
const grasshopperImage = require("../assets/images/exploreLinks/Grasshopper.jpg");
const ladybugImage = require("../assets/images/exploreLinks/Ladybug.jpg");
const milkweedImage = require("../assets/images/exploreLinks/Milkweed.jpg");
const monarchImage = require("../assets/images/exploreLinks/Monarch.jpg");
const mantisImage = require("../assets/images/exploreLinks/Mantis.jpg");
const redwingbutterflyImage = require("../assets/images/exploreLinks/RedwingButterfly.jpg");

function Explore(_props: any) {
  const [showbumblebeeImage, setShowbumblebeeImage] = useState(false);
  const [showbutterflyImage, setShowbutterflyImage] = useState(false);
  const [showcicadaImage, setShowcicadaImage] = useState(false);
  const [showdragonflyImage, setShowdragonflyImage] = useState(false);
  const [showfireflyImage, setShowfireflyImage] = useState(false);
  const [showbeetleImage, setShowbeetleImage] = useState(false);
  const [showgrasshopperImage, setShowgrasshopperImage] = useState(false);
  const [showladybugImage, setShowladybugImage] = useState(false);
  const [showmilkweedImage, setShowmilkweedImage] = useState(false);
  const [showmonarchImage, setShowmonarchImage] = useState(false);
  const [showmantisImage, setShowmantisImage] = useState(false);
  const [showredwingbutterflyImage, setShowredwingbutterflyImage] =
    useState(false);

  const handlebumblebeeImagePress = () => {
    setShowbumblebeeImage(true);
  };

  const handlebutterflyImagePress = () => {
    setShowbutterflyImage(true);
  };

  const handlecicadaImagePress = () => {
    setShowcicadaImage(true);
  };

  const handledragonflyImagePress = () => {
    setShowdragonflyImage(true);
  };

  const handlefireflyImagePress = () => {
    setShowfireflyImage(true);
  };

  const handlebeetleImagePress = () => {
    setShowbeetleImage(true);
  };

  const handlegrasshopperImagePress = () => {
    setShowgrasshopperImage(true);
  };

  const handleladybugImagePress = () => {
    setShowladybugImage(true);
  };

  const handlemilkweedImagePress = () => {
    setShowmilkweedImage(true);
  };

  const handlemonarchImagePress = () => {
    setShowmonarchImage(true);
  };

  const handlemantisImagePress = () => {
    setShowmantisImage(true);
  };

  const handleredwingbutterflyImagePress = () => {
    setShowredwingbutterflyImage(true);
  };

  const closeModal = () => {
    setShowbumblebeeImage(false);
    setShowbutterflyImage(false);
    setShowcicadaImage(false);
    setShowdragonflyImage(false);
    setShowfireflyImage(false);
    setShowbeetleImage(false);
    setShowgrasshopperImage(false);
    setShowladybugImage(false);
    setShowmilkweedImage(false);
    setShowmonarchImage(false);
    setShowmantisImage(false);
    setShowredwingbutterflyImage(false);
  };

  return (
    <LinearGradient
      colors={["dodgerblue", "aqua", "green"]}
      style={styles.background}
    >
      <Text style={styles.title}> Insects </Text>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={handlebumblebeeImagePress}
        >
          <Text style={styles.buttonText}> Bumble Bee </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handlebutterflyImagePress}
        >
          <Text style={styles.buttonText}> Butterfly </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handlecicadaImagePress}
        >
          <Text style={styles.buttonText}> Cicada </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handledragonflyImagePress}
        >
          <Text style={styles.buttonText}> Dragonfly </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handlefireflyImagePress}
        >
          <Text style={styles.buttonText}> Firefly </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handlebeetleImagePress}
        >
          <Text style={styles.buttonText}> Beetle </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handlegrasshopperImagePress}
        >
          <Text style={styles.buttonText}>Grasshopper</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleladybugImagePress}
        >
          <Text style={styles.buttonText}>Ladybug</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handlemilkweedImagePress}
        >
          <Text style={styles.buttonText}>Milkweed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handlemonarchImagePress}
        >
          <Text style={styles.buttonText}>Monarch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handlemantisImagePress}
        >
          <Text style={styles.buttonText}>Mantis</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleredwingbutterflyImagePress}
        >
          <Text style={styles.buttonText}>Red Admiral Butterfly</Text>
        </TouchableOpacity>
      </ScrollView>

      <Link style={styles.navigator} href={"/"}>
        {" "}
        Back To Home Page{" "}
      </Link>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showbumblebeeImage}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}> Bumble Bee</Text>
            {/*  */}
            <Image source={bumblebeeImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Bumble bees are stout fuzzy bees that vibrate at a high frequency
              to remove and collect pollen.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showbutterflyImage}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}> The Cabbage White Butterfly</Text>
            {/*  */}
            <Image source={butterflyImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The Cabbage White Butterfly is a small white butterfly with black
              spots and black tips on its forewings. It typically lays its eggs
              on plants in the mustard family.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showcicadaImage}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}> Cicadas</Text>
            {/*  */}
            <Image source={cicadaImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Known for their summertime song, cicadas spend most of their lives
              underground, where they eat tree roots. When they emerge, the
              nymphs climb trees and molt.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showdragonflyImage}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}> Dragonfly</Text>
            {/*  */}
            <Image source={dragonflyImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Dragonflies have two pairs of wings and a long thin abdomen. They
              feed on insects, and live in aquatic areas.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showfireflyImage}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}> Firefly</Text>
            {/*  */}
            <Image source={fireflyImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Although fireflies are commonly known as “lightning bugs,” they
              are actually beetles. In summer, you will see their flashing
              lights, which help them attract mates.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showbeetleImage}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}> Goldenrod Soldier Beetle</Text>
            {/*  */}
            <Image source={beetleImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The Goldenrod Soldier Beetle is an orange beetle that is often
              seen on goldenrod flowers, Queen Anne’s lace, or milkweed in
              fields and gardens.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showgrasshopperImage}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}> Grasshoppers </Text>
            {/*  */}
            <Image source={grasshopperImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Grasshoppers feed on leaves, flowers, and the stems of plants.
              They have large eyes and long hind legs that they use for jumping.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showladybugImage}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}> Ladybugs</Text>
            {/*  */}
            <Image source={ladybugImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Lady beetles or “ladybugs” as they’re often known, are not always
              red with black spots. They may be yellow, pink, or orange. Most
              species fed on pests such as mites, aphids, and whiteflies.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showmilkweedImage}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}> Milkweed Bugs</Text>
            {/*  */}
            <Image source={milkweedImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              As their name suggests, milkweed bugs feed on the seeds of
              milkweed, so you may find them clustered on the plant’s seed pods.
              Adults are orange with a black band across their backs.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showmonarchImage}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}> Monarch Butterfly</Text>
            {/*  */}
            <Image source={monarchImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The Monarch butterfly, the state insect of Illinois, has orange
              wings with black veins and edging. Monarchs are migratory, and
              typically spend the winter in central Mexico.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showmantisImage}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}> Praying Mantises</Text>
            {/*  */}
            <Image source={mantisImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Praying mantises are difficult to find because these green insects
              camouflage so well in their surroundings. These carnivores eat
              other insects, and sometimes even small reptiles or amphibians.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showredwingbutterflyImage}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}> Red Admiral Butterfly</Text>
            {/*  */}
            <Image source={redwingbutterflyImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The Red Admiral Butterfly has brown-black wings with white spots
              and an orange-red band. You may spot it near woodlands,
              streambanks, and yards.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  scrollView: {
    backgroundColor: " ",
    marginHorizontal: 20,
  },

  title: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 23,
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    paddingVertical: 10,

    fontSize: 13,
    //fontWeight: "bold",
    borderRadius: 15,
    marginTop: 25,
    width: 200,
    textAlign: "center",
    //height: 70,
    //width: 200,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    maxWidth: "100%",
    overflow: "hidden",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "lightpink",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    overflow: "hidden",
  },
  //picture's title
  modalTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  //picture's size
  modalImage: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: "blue",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 15,
  },
  modalCloseText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  navigator: {
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
