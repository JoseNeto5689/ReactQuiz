import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
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
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#637373"
    },
    optionBox: {
        height: 60,
        width: 270,
        backgroundColor: "orange",
        borderColor: "#D44426",
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
    main: {
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        flex: 1,
        marginBottom: "30%",
        marginTop: 0,

    },
    quizText: {
        fontSize: 20,
        fontWeight: "bold"
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
        backgroundColor: "#2596be",
        borderRadius: 20,
        borderWidth: 4,
        borderColor: "yellow",
        marginBottom: "30%",
    },
    failTitle: {
        textAlign: "center",
        marginTop: 30,
        fontSize: 24,
        color: "red",
        fontWeight: "bold",
    },
    failMsg: {
        marginTop: 10,
        textAlign: "center",
        fontSize: 22,
        color: "white",
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
        borderColor: "black",
        borderRadius: 5,
        marginHorizontal: 10,
        backgroundColor: "green",
    },
    no: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderWidth: 3,
        borderColor: "black",
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
    },
    questionText: {
        fontFamily: "Inter_400Regular",
        fontSize: 22,
        textAlign: "center",
        color: "#0D8094",
        paddingHorizontal: 7,
        
    },
    optionsContainer: {
        alignItems: 'center',
        width: "100%",

    },
    timerContainer: {
        alignItems: 'center',
    },
    timer: {
          fontFamily: "OpenSans_700Bold",
          fontSize: 30,
          color: "red",
          marginTop: 5,
          marginBottom: 40,
    },
    homeScreenImage: {
        resizeMode: "contain",
        width: "45%",
        height: "37%"
    }
})

export default styles