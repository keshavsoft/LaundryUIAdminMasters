import KeysJson from './Keys.json' with {type: 'json'};
// import { StartFunc as StartFuncPrepareBody } from "./PrepareBody.js";

let StartFunc = ({ inrowData }) => {

    let jVarLocalBranchName = localStorage.getItem("BranchName");
    KeysJson.body.CustomerData.CustomerMobile = inrowData.Mobile;
    KeysJson.body.CustomerData.CustomerName = inrowData.CustomerName;
    KeysJson.body.OrderData.BranchName = jVarLocalBranchName;
    KeysJson.body.OrderData.Currentdateandtime = LocalFuncCurrentDateAndTime();

    KeysJson.body = JSON.stringify(KeysJson.body);

    return KeysJson;
};

let LocalFuncCurrentDateAndTime = () => {
    let jVarLocalAddDays7 = new Date();
    let date = new Date(jVarLocalAddDays7);

    let sec = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
    let min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    let hr = (date.getHours() < 10 ? '0' : '') + date.getHours();
    let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    let yyyy = date.getFullYear();

    return `${yyyy}-${MM}-${dd} ${hr}:${min}:${sec}`;
};

export { StartFunc };