import UrlJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalMastersCustomerstableName = UrlJson.MastersCustomerstableName;
    let jVarLocalFetchUrl = `${LocalMastersCustomerstableName}`;
    let response = await fetch(jVarLocalFetchUrl);
    return await response;
};

export { StartFunc };

