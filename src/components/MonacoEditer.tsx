import { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import { checkExercise } from "@/exersice/checkExersice";



const ExerciseEditor = () => {
  
  const [exercise1, setExercise1]: any = useState();

  const check = () => {
   checkExercise("checkStudentConstructor",exercise1)
  };
  const handleChange = (e: any) => {
    setExercise1(e);
  };



  // function isConsoleLog(variable: any) {
  //   return typeof variable === "function" && variable === console.log;
  // }

  return (
    <div>
      <>
        <MonacoEditor
          height="200px"
          language="javascript"
          theme="vs-dark"
          value={exercise1}
          onChange={(value) => handleChange(value)}
        />
        <button onClick={() => check()}>Check Exercise</button>
      </>
    </div>
  );
};

export default ExerciseEditor;

// const arr = [
//   {
//     code:"// hay tao cau lenh alert",
//     total:`try {
//       const sentence = '${exercise1}';
//       const check = sentence.includes('alert');
//       if(check){
//         try {
//           new Function(sentence)();
//         } catch (err) {
//           alert(err.message);
//         }
//       }else{
//         alert('phai la cau lenh alert')
//       }
//     } catch (error) {
//         alert('Lỗi khác xảy ra');
//     }`

// },
// {
//   code:"// tao bien weigth the hien can nang",
//   total: `
//   const sentence = '${exercise1}';
//   try {
//     const keywords = ['let', 'var', 'const'];
//     if(!keywords.includes(sentence.split(" ")[0])){
//       alert('Không tìm thấy từ khóa khai báo biến')
//     }else{
//       let modifiedText = sentence.split(" ").slice(1).join(" ");
//       if(modifiedText[length-1]!==';'){
//         modifiedText+=';'
//       }
//       const func2 = new Function('context', modifiedText + ' return weight;');
//       const context = {};
//       const result = func2(context);
//       if (typeof result === 'number') {
//         console.log("Giá trị của biến weight:", result);
//       } else {
//         alert("Biến weight không có giá trị hoặc không phải là số.");
//       }

//     }
// } catch (error) {
//     alert("Lỗi xảy ra: " + error.message);
// }
// `
// },{
//   code:"thuc hanh su dung consolog",
//   total:` const sentence = '${exercise1}';
//   try{
//     const check = sentence.includes('console.log');
//     if(check){
//       try {
//         new Function(sentence)();
//         } catch (err) {
//                alert(err.message);
//         }
//     }else{
//       console.log("khon phai")
//     }

//   }catch(error){
//     console.log(error)
//   }`
// },
// {
//   code:"thuc hanh toan tu so hoc",
//   total:` const sentence = '${exercise1}';
//   try{
//     const check = sentence.includes('console.log');
//     if(check){
//       try {
//         new Function(sentence)();
//         } catch (err) {
//                alert(err.message);
//         }
//     }else{
//       console.log("khon phai")
//     }

//   }catch(error){
//     console.log(error)
//   }`
// }

// ]

// const data    = "const check = sentence.includes('console.log');if(check){try {new Function(sentence)(); } catch (err) {alert(err.message); }}else{console.log('khon phai')}";
//   const next = `try {
//     const sentence = '${exercise1}';
//     ${data}
// } catch (error) {
//     console.log(error);
// }`;

//   const func = new Function(`
// let exercise1 = '${exercise1}'
// ${lesson[0].total}

// `



// let lesson = [
//   {
//     code: `//Tạo 1 mảng chứa ít nhất 3 phần tử`,
//     total: `const sentence = exercise1;
//     try{
//       console.log(sentence)
//       const check = sentence.includes('console.log');
//       if(check){
//         try {
//           new Function(sentence)(); 
//           } catch (err) {
//                  alert(err.message); 
//           }
//       }else{
//         console.log("khon phai")
//       }
    
//     }catch(error){
//       console.log(error)
//     }`,
//   },
//   {
//     code: `//Viết 1 hàm có tên là sum`,
//     total: ` if (typeof sum !== 'function') {
//     console.error('Hàm sum chưa được định nghĩa');
//   }else{
//     alert("sucess")
//   }`,
//   },
// ];
