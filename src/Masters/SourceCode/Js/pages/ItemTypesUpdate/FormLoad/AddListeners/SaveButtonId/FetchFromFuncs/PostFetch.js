import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../../Config.json" with { type: "json" };
import CommonConfig from "../../../../../CommonConfig.json" with { type: "json" };

let StartFunc = async () => {

    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "UuId" });

    let jVarLocalFetchUrl = ConfigJson.AlterUrl;

    let jVarLocalTableName = ConfigJson.tableName;

    let jVarLocalCommonFetchUrl = CommonConfig.route;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let fetchUrl = `${jVarLocalCommonFetchUrl}/${jVarLocalTableName}/${jVarLocalFetchUrl}/${jVarLocalFilterString}`;

    let response = await fetch(fetchUrl, jVarLocalFetchHeaders);

    return await response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };






