import { ExerciseAge, ExerciseAlert, ExerciseConsoleLog, ExerciseWeight, checkAnimalConstructor, checkExerciseCanBuyAlcohol, checkExerciseEmailAssignment, checkExerciseFirstElement, checkExerciseFullName, checkExerciseGames, checkExerciseInterge, checkExerciseIsNumber, checkExerciseNumbers, checkExerciseOperator, checkExerciseResult, checkExerciseSplit, checkExerciseSumFunction, checkExerciseSumParameters, checkExerciseSumTotal, checkExerciseUpperCase, checkExerciselength, checkStudentConstructor, checkStudentObject } from "./exersice";

export const checkExercise = (type:any, exercise: any) => {
    switch (type) {
        case 'ExerciseAge':
                ExerciseAge(exercise); 
            break;
        case 'ExerciseAlert':
            ExerciseAlert(exercise); 
            break;
        case 'ExerciseWeight':
            ExerciseWeight(exercise); 
            break;
        case 'ExerciseConsoleLog':
            ExerciseConsoleLog(exercise); 
            break;
        case 'checkExerciseOperator':
            checkExerciseOperator(exercise); 
            break;
        case 'checkExerciseFullName':
            checkExerciseFullName(exercise); 
            break;
        case 'checkExerciseCanBuyAlcohol':
            checkExerciseCanBuyAlcohol(exercise); 
            break;
        case 'checkExerciseSumFunction':
            checkExerciseSumFunction(exercise); 
            break;
        case 'checkExerciseSumParameters':
            checkExerciseSumParameters(exercise); 
            break;
        case 'checkExerciseSumTotal':
            checkExerciseSumTotal(exercise); 
            break;
        case 'checkExerciseResult':
            checkExerciseResult(exercise); 
            break;
        case 'checkExerciseEmailAssignment':
            checkExerciseEmailAssignment(exercise); 
            break;
        case 'checkExerciseSplit':
            checkExerciseSplit(exercise); 
            break;
        case 'checkExerciselength':
            checkExerciselength(exercise); 
            break;
        case 'checkExerciseUpperCase':
            checkExerciseUpperCase(exercise); 
             break;
        case 'checkExerciseInterge':
            checkExerciseInterge(exercise); 
            break;
        case 'checkExerciseIsNumber':
            checkExerciseIsNumber(exercise); 
            break;
        case 'checkExerciseGames':
            checkExerciseGames(exercise); 
            break;
        case 'checkExerciseNumbers':
            checkExerciseNumbers(exercise); 
            break;
        case 'checkExerciseFirstElement':
            checkExerciseFirstElement(exercise); 
            break;
        case 'checkStudentObject':
            checkStudentObject(exercise); 
            break;
        case 'checkAnimalConstructor':
            checkAnimalConstructor(exercise); 
            break;
        case 'checkStudentConstructor':
            checkStudentConstructor(exercise); 
            break;
       
        default:
            break;
    }
  };