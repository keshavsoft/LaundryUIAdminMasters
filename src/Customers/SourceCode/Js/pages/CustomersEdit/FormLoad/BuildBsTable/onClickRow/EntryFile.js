import { StartFunc as StartFuncNav } from "./Nav/EntryFile.js";
const StartFunc = (row, $element, field) => {
        
    if (field === "Ks-Opt") {
        StartFuncNav({ inRowpk: row.UuId });
    };
};

export { StartFunc };