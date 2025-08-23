import ConfigJson from "../../../../Config.json" with { type: "json" };
import CommonConfig from "../../../../../CommonConfig.json" with { type: "json" };

let StartFunc = async () => {
    let jVarLocalFetchUrl = ConfigJson.GetUrl;

    let jVarLocalTableName = ConfigJson.TableName;

    let jVarLocalCommonFetchUrl = CommonConfig.route;

    let fetchUrl = `${jVarLocalCommonFetchUrl}/${jVarLocalTableName}/${jVarLocalFetchUrl}`;

    let response = await fetch(fetchUrl);

    return await response;
};

export { StartFunc };

