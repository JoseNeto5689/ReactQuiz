import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    congratulationsImage: {
        resizeMode: "contain",
        width: 260,
        height: 260,
        marginBottom: 20,
    },
    congratulations: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 20,
        color: "#0EF043",
        fontWeight: "bold"
    },
    winContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#637373"
    },
    optionBox: {
        height: 60,
        width: 270,
        backgroundColor: "#f6aa1c",
        borderColor: "#bc3908",
        borderWidth: 6,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
      },
    optionText: {
        fontSize: 20,
        color: "#201F1F",
        fontWeight: "bold",
      },
    home: {
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        flex: 1,
        paddingBottom: "30%",
        marginTop: 0,
        backgroundColor: "#ebeced"

    },
    quizText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#033270",
        textAlign: "center"
    }, 
    modalView: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        justifyContent: "center",
    },
    failBox: {
        height: "25%",
        width: "80%",
        backgroundColor: "#9dcee2",
        borderRadius: 20,
        borderWidth: 4,
        borderColor: "#033270",
        marginBottom: "30%",
    },
    failTitle: {
        textAlign: "center",
        marginTop: 30,
        fontSize: 24,
        color: "#033270",
        fontWeight: "bold",
        textDecorationLine: "underline"
    },
    failMsg: {
        marginTop: 10,
        textAlign: "center",
        fontSize: 22,
        color: "#4091c9",
    },
    failOptions:{
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "center",
    },
    yes: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderWidth: 3,
        borderColor: "#033270",
        borderRadius: 5,
        marginHorizontal: 10,
        backgroundColor: "green",
    },
    no: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderWidth: 3,
        borderColor: "#033270",
        borderRadius: 5,
        marginHorizontal: 10,
        backgroundColor: "red",
    },
    textFail: {
        color: "white",
        fontWeight: "bold"
    },
    questionNumber: {
        textAlign: "center",
        marginTop: 30,
        fontFamily: "Inter_900Black",
        fontSize: 28,
        color: "#033270"
    },
    questionText: {
        fontFamily: "Inter_400Regular",
        fontSize: 22,
        textAlign: "center",
        paddingHorizontal: 7,
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 15,
        marginHorizontal: 6,
        marginTop: 10,
        backgroundColor: "white"
        
    },
    optionsContainer: {
        alignItems: 'center',
        width: "100%",

    },
    timerContainer: {
        alignItems: 'center',
        alignContent: "center",
        marginBottom: 35,
    },
    timer: {
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 40,
        color: "#1B52BF",
    },
    alarm: {
        color: "red",
        fontFamily: "OpenSans_700Bold",
    },

    homeScreenImage: {
        resizeMode: "contain",
        width: "45%",
        height: "35%",
        marginTop: 5,
    }
})

export default styles;