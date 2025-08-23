import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../../Config.json" with { type: "json" };
import CommonConfig from "../../../../../CommonConfig.json" with { type: "json" };

let StartFunc = async () => {
    let jVarLocalFetchUrl = ConfigJson.PostUrl;

    let jVarLocalTableName = ConfigJson.tableName;

    let jVarLocalCommonFetchUrl = CommonConfig.route;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let fetchUrl = `${jVarLocalCommonFetchUrl}/${jVarLocalTableName}/${jVarLocalFetchUrl}`;

    let response = await fetch(fetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };




