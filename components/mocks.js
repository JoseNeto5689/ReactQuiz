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
            op2: true,
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
            op1: true,
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
            op4: true,
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
            op1: true,
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
            option2: "MaterialTopTabNavigator",
            option3: "DrawerNavigator",
            option4: "BottomTabNavigator",
        },
        answer: {
            op1: true,
        },
        timer: {
            time: 15,
        },
        additionalBoxStyle: StyleSheet.create({
            index: {
                width: "80%"
            }
        })

        ,
        additionalTextStyle: StyleSheet.create({
            index: {
                fontSize: 18,
            }
        })

    },
    question6: {
        question: {
            questionNum: "Sexta Questão",
            questionText: "Onde podemos colocar os estilos das nossas páginas em React Native?",
            questionStyle: StyleSheet.create({
                index: {
                    
                }
            }) 
        },
        options: {
            option1: "Importando um arquivo .css com os estilos",
            option2: "Um arquivo *.js com StyleSheet.create(estilos)",
            option3: "Uma variável contendo o StyleSheet.create(estilos)",
            option4: "Não é possível armazenar estilos",
        },
        answer: {
            op2: true,
            op3: true,
        },
        timer: {
            time: 15,
        },
        additionalBoxStyle: StyleSheet.create({
            index: {
                width: "90%",
    
            }
        })

        ,
        additionalTextStyle: StyleSheet.create({
            index: {
                fontSize: 15,
                textAlign: "center"
            }
        })

    },
    question7: {
        question: {
            questionNum: "Sétima Questão",
            questionText: "Qual é o import devemos utilizar para que o JSX funcione corretamente no React-Native?",
            questionStyle: StyleSheet.create({
                index: {
                    paddingVertical: 5,
                }
            }) 
        },
        options: {
            option1: "Import React from “react”",
            option2: "Import { React } from “react-native”",
            option3: "Import JSX from “react-native”",
            option4: "Import JSX from “expo-cli”",
        },
        answer: {
            op1: true,
        },
        timer: {
            time: 15,
        },
        additionalBoxStyle: StyleSheet.create({
            index: {
                width: "85%",
    
            }
        })

        ,
        additionalTextStyle: StyleSheet.create({
            index: {
                fontSize: 17,
                textAlign: "center"
            }
        })

    },

    question8: {
        question: {
            questionNum: "Oitava Questão",
            questionText: "Qual o comando para instalar fonts no react native utilizando o expo-cli?",
            questionStyle: StyleSheet.create({
                index: {
                    paddingHorizontal: 7
                }
            }) 
        },
        options: {
            option1: "expo use-font -g arial",
            option2: "expo install-font @expo-google-fonts arial",
            option3: "expo install expo-font @expo-google-fonts/arial",
            option4: "expo get -f -g arial",
        },
        answer: {
            op3: true,
        },
        timer: {
            time: 15,
        },
        additionalBoxStyle: StyleSheet.create({
            index: {
                width: "90%",
    
            }
        })

        ,
        additionalTextStyle: StyleSheet.create({
            index: {
                fontSize: 14,
                textAlign: "center"
            }
        })

    },
    question9: {
        question: {
            questionNum: "Nona Questão",
            questionText: "Estabelecendo uma comparação entre HTML e JSX, qual seria o equivalente de uma div em JSX??",
            questionStyle: StyleSheet.create({
                index: {
                    fontSize: 20,
                    paddingVertical: 5
                }
            }) 
        },
        options: {
            option1: "<Image/>",
            option2: "<View></View>",
            option3: "<TouchableHighlight/>",
            option4: "<Division>",
        },
        answer: {
            op2: true,
        },
        timer: {
            time: 1000,
        },
        additionalBoxStyle: StyleSheet.create({
            index: {
                width: "90%",
    
            }
        })

        ,
        additionalTextStyle: StyleSheet.create({
            index: {
            }
        })

    },
    question10: {
        question: {
            questionNum: "Décima Questão",
            questionText: "Qual o comando correto para gerarmos um apk do nosso projeto?",
            questionStyle: StyleSheet.create({
                index: {
                    fontSize: 20,
                }
            }) 
        },
        options: {
            option1: "npm generate -a",
            option2: "export -b android",
            option3: "expo build:android",
            option4: "npm build -a",
        },
        answer: {
            op3: true,
        },
        timer: {
            time: 15,
        },
        additionalBoxStyle: StyleSheet.create({
            index: {
                width: "90%",
    
            }
        })

        ,
        additionalTextStyle: StyleSheet.create({
            index: {
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