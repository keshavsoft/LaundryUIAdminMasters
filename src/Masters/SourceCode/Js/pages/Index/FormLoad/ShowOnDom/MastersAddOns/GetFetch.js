import UrlJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalMastersAddOnstableName = UrlJson.MastersAddOnstableName;
    let jVarLocalFetchUrl = `${LocalMastersAddOnstableName}`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

