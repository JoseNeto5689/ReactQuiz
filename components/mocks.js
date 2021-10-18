import { StyleSheet } from "react-native"
const mocks = {
    question1: {
        question: {
            questionNum: "Primeira Questão",
            questionText: "Qual dessas opções representa uma tag de texto corretamente em React Native?",
            questionStyle: StyleSheet.create({
                index: {
                    
                }
            }) 
        },
        options: {
            option1: "<Texto> </Texto>",
            option2: "<Text> </Text>",
            option3: "<p> </p>",
            option4: "<Text/>",
        },
        answer: {
            op1: 0,
            op2: 1,
            op3: 0,
            op4: 0,
        },
        timer: {
            time: 5,
        },
        additionalBoxStyle: StyleSheet.create({
            index: {
                width: "75%"
            }
        })

        ,
        additionalTextStyle: StyleSheet.create({
            index: {
                fontSize: 20,
            }
        })

    },
    question2: {
        question: {
            questionNum: "Segunda Questão",
            questionText: "Qual dos opções abaixo representa a forma de correta de se por uma imagem em React Native? ",
            questionStyle: StyleSheet.create({
                index: {
                    fontSize: 20
                }
            })  
        },
        options: {
            option1: "<Image source = { x }/>",
            option2: "<Image>x<Image/>",
            option3: "Image = x",
            option4: "Import x from source",
        },
        answer: {
            op1: 1,
            op2: 0,
            op3: 0,
            op4: 0,
        },
        timer: {
            time: 5,
        },
        additionalBoxStyle: StyleSheet.create({
            index: {
                width: "75%"
            }
        })

        ,
        additionalTextStyle: StyleSheet.create({
            index: {
                fontSize: 20,
            }
        })
    },
    question3: {
        question: {
            questionNum: "Terceira Questão",
            questionText: "Qual dos opções abaixo representa o comando para instalar o expo? ",
            questionStyle: StyleSheet.create({
                index: {
                    fontSize: 23
                }
            })  
        },
        options: {
            option1: "sudo apt install expo",
            option2: "download expo -u",
            option3: "git clone https://react-native.expo",
            option4: "npm install -g expo-cli exp",
        },
        answer: {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 1,
        },
        timer: {
            time: 5,
        },
        additionalBoxStyle: StyleSheet.create({
            index: {
                width: "85%"
            }
        })

        ,
        additionalTextStyle: StyleSheet.create({
            index: {
                fontSize: 18
            }
        })
    },
}

export default mocks

/*

question1: {
        question: {
            questionNum: "",
            questionText: "",
            questionStyle: StyleSheet.create({
                index: {

                }
            }) 
        },
        options: {
            option1: "",
            option2: "",
            option3: "",
            option4: "",
        },
        answer: {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
        },
        timer: {
            time: ,
        },
        additionalBoxStyle: StyleSheet.create({
            index: {
                
            }
        })

        ,
        additionalTextStyle: StyleSheet.create({
            index: {
                
            }
        })

    },

*/ 