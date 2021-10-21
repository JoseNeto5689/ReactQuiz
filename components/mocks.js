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
            time: 15,
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
            questionText: "Qual dos opções abaixo representa a forma de correta de se usar uma imagem em React Native? \n(x = image source) ",
            questionStyle: StyleSheet.create({
                index: {
                    fontSize: 20
                }
            })  
        },
        options: {
            option1: "<Image source = { x }/>",
            option2: "<Image> x <Image/>",
            option3: "Image = x",
            option4: "Import image from x",
        },
        answer: {
            op1: 1,
            op2: 0,
            op3: 0,
            op4: 0,
        },
        timer: {
            time: 15,
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
            time: 15,
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
    question4: {
        question: {
            questionNum: "Quarta Questão",
            questionText: "Qual dessas opções se refere a forma correta de fazer um conteúdo sobrepor outro? \n content = (componentes da página)",
            questionStyle: StyleSheet.create({
                index: {
                    fontSize: 20,
                    paddingHorizontal: 6,
                    marginTop: 0,
                }
            }) 
        },
        options: {
            option1: "Usando a tag <Modal> content <Modal/>",
            option2: "Usando a tag <UpperText content = {} />",
            option3: "Usar um if(pagina_renderizada) { content }",
            option4: "Não é possivel",
        },
        answer: {
            op1: 1,
            op2: 0,
            op3: 0,
            op4: 0,
        },
        timer: {
            time: 15,
        },
        additionalBoxStyle: StyleSheet.create({
            index: {
                width: "90%"
            }
        })

        ,
        additionalTextStyle: StyleSheet.create({
            index: {
                fontSize: 16,
                textAlign: "center",
                padding: 2,
            }
        })

    },
    question5: {
        question: {
            questionNum: "Quinta Questão",
            questionText: "Qual tipo de navegação do react-navigation esse quiz está utilizando?",
            questionStyle: StyleSheet.create({
                index: {
                    
                }
            }) 
        },
        options: {
            option1: "StackNavigator",
            option2: "AnimatedSwitchNavigator",
            option3: "DrawerNavigator",
            option4: "BottomTabNavigator",
        },
        answer: {
            op1: 1,
            op2: 0,
            op3: 0,
            op4: 0,
        },
        timer: {
            time: 5000,
        },
        additionalBoxStyle: StyleSheet.create({
            index: {
                width: "85%"
            }
        })

        ,
        additionalTextStyle: StyleSheet.create({
            index: {
                fontSize: 20,
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