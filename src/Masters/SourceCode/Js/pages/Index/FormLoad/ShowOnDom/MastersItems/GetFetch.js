import UrlJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalMastersItemstableName = UrlJson.MastersItemstableName;
    let jVarLocalFetchUrl = `${LocalMastersItemstableName}`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

