import { StartFunc as FooterFormatterFuncs } from "./FooterFormatterFuncs/entryFile.js";
import { StartFunc as ColumnSerial } from "./ColumnSerial/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnRate = LocalColumns.find(element => element.field === "Delete");
    let LocalColumnSerial = LocalColumns.find(element => element.field === "KS-Serial");

    if (LocalColumnRate === undefined === false) {
        FooterFormatterFuncs({ inFindColumn: LocalColumnRate });
    };
    if (LocalColumnSerial === undefined === false) {
        ColumnSerial({ inFindColumn: LocalColumnSerial });
    };
    
    
};

export { StartFunc };