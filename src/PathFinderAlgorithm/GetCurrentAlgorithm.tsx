import * as AlgorithmConfig from './../Configurations/Algorithm.json';



let stringifiedJson = JSON.stringify(AlgorithmConfig);
let AlgoObj = JSON.parse(stringifiedJson);


export default function GetCurrentAlgorithm(){

  return  AlgoObj.filter((item:any)=>{return item.isCurrent==true});
}