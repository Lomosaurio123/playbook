const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   console.log("El nombre de los explorers es: ")
   explorers.forEach((explorer) => console.log(explorer.name))
   

   console.log("\nLa stack de cada explorer es: ")
   explorers.forEach((explorer) => console.log(explorer.stack))

   console.log("\nCreando la lista de stacks: ")
   const listStacks = explorers.map((explorer) => explorer.stack)
   console.log(listStacks)

   console.log("\nLista de explorers que tienen js en stack: ")
   const listJs = explorers.filter((explorer) => explorer.stack.includes('js'))
   console.log(listJs)

   console.log("\nEl primer explorer de la CMDX es: ")
   const explorerCMDX = explorers.find((explorer) => explorer.city === "CDMX")
   console.log(explorerCMDX.name)

   console.log("\nLa suma de todos exercises_completed es: ")
   const suma = explorers.reduce((acc,explorer) => acc + explorer.exercises_completed , 0)
   console.log(suma)

   console.log("\nAl menos uno de los explorers finalizo el frontend")
   const frontendFinished = explorers.some((explorer) => explorer.missions.frontend.exercisesFinished == true)
   console.log(frontendFinished)

   console.log("\nTodos los usuarios tienen finalizado el onBoarding: ")
   const onBoardingFinished = explorers.every((explorer) => explorer.missions.onboarding.isFinished == true)
   console.log(onBoardingFinished)