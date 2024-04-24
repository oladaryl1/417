import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, Modal, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Explore(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedInsect, setSelectedInsect] = useState(null);

    const insects = [
        { name: "Bumblebee", image: require('../assets/images/exploreLinks/Bumblebee.jpg') },
        { name: "Butterfly", image: require('../assets/images/exploreLinks/CabbageB.jpg') },
        { name: "Cicada", image: require('../assets/images/exploreLinks/Cicada.jpg') },
        { name: "Dragonfly", image: require('../assets/images/exploreLinks/Dragonfly.jpg') },
        { name: "Firefly", image: require('../assets/images/exploreLinks/Firefly.jpg') },
        { name: "Beetle", image: require('../assets/images/exploreLinks/Beetle.jpg') },
        { name: "Grasshopper", image: require('../assets/images/exploreLinks/Grasshopper.jpg') },
        { name: "Ladybug", image: require('../assets/images/exploreLinks/Ladybug.jpg') },
        { name: "Milkweed", image: require('../assets/images/exploreLinks/Milkweed.jpg') },
        { name: "Monarch", image: require('../assets/images/exploreLinks/Monarch.jpg') },
        { name: "Mantis", image: require('../assets/images/exploreLinks/Mantis.jpg') },
        { name: "RedwingButterfly", image: require('../assets/images/exploreLinks/RedwingButterfly.jpg') },
        // Add more insects as needed
    ];

    const openModal = (insect) => {
        setSelectedInsect(insect);
        setModalVisible(true);
    };

    return (
        <LinearGradient colors={['dodgerblue','aqua','green']} style={styles.background}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Insects</Text>
            {insects.map((insect, index) => (
                <TouchableOpacity key={index} onPress={() => openModal(insect)} style={styles.button}>
                    <Text style={styles.buttonText}>{insect.name}</Text>
                </TouchableOpacity>
                
            ))}
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {selectedInsect && (
                            <>
                                <Text style={styles.modalText}>{selectedInsect.name}</Text>
                                <Image
                                    source={selectedInsect.image}
                                    style={styles.modalImage}
                                />
                            </>
                        )}
                        <TouchableOpacity
                            style={{ ...styles.button, backgroundColor: "darkblue" }}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.buttonText}>Close</Text>
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
        alignItems: 'center',
    },
    title: {
        marginTop: 20,
        fontSize: 23,
        fontWeight: "bold",
        textAlign: 'center',
    },
    button: {
        marginTop: 10,
        backgroundColor: "darkblue",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        height: 50,
        minWidth: 200,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalText: {
        textAlign: "center",
        fontSize: 20,
    },
    modalImage: {
        width: 200, // Adjust width and height as needed
        height: 200,
        resizeMode: 'cover', // Adjust resizeMode as needed
        borderRadius: 10,
        marginBottom: 10,
    },
});

export default Explore;
