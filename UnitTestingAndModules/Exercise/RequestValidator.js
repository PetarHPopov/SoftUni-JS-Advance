function solve(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validMethod = obj.method && validMethods.includes(obj.method);

    if (!validMethod) {
        throw new Error("Invalid request header: Invalid Method")
    }
    const uriRegex = /^([A-Za-z0-9.]+)$/gim;
    const validUri = obj.uri && (obj.uri.match(uriRegex) || '*');


    if (!validUri) {
        throw new Error('Invalid request header: Invalid URI')
    }

    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const validVersion = obj.version && validVersions.includes(obj.version);

    if (!validVersion) {
        throw new Error('Invalid request header: Invalid Version')
    }
    messageRegex = /([^<>\&\\'"]+)/gm;
    const validMessage = obj.message && (obj.message ==='' || obj.message.match(messageRegex));
    if (!validMessage) {
        throw new Error('Invalid request header: Invalid Message')
    }
    return obj;

}

console.log(solve({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    }
));