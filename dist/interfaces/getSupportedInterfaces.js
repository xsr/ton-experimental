"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSupportedInterfaces = exports.getSupportedInterfacesRaw = exports.resolveKnownInterface = void 0;
const known = {
    ['123515602279859691144772641439386770278']: 'org.ton.introspection.v0',
    ['256184278959413194623484780286929323492']: 'com.tonwhales.nominators:v0',
    ['242422353946785872806511191513850808027']: 'org.ton.jetton.master.v1',
    ['311736387032003861293477945447179662681']: 'org.ton.jetton.wallet.v1',
};
/**
 * Resolves known interface
 * @param src source id
 * @returns known interface
 */
function resolveKnownInterface(src) {
    let kn = known[src];
    if (kn) {
        return kn;
    }
    else {
        return null;
    }
}
exports.resolveKnownInterface = resolveKnownInterface;
/**
 * Fetching supported interfaces
 * @param src address
 * @param client client
 * @returns array of supported interfaces
 */
async function getSupportedInterfacesRaw(src, client) {
    // Query interfaces
    let res = await client.callGetMethodWithError(src, 'supported_interfaces');
    // If not successful: return empty
    if (res.exit_code !== 0 && res.exit_code !== 1) {
        return [];
    }
    try {
        let slice = res.stack;
        // First interface have to be introspection
        let firstNumber = slice.readBigNumber().toString();
        if (firstNumber !== '123515602279859691144772641439386770278') {
            return [];
        }
        // Read all remaining
        let interfaces = [];
        while (slice.remaining > 0) {
            interfaces.push(slice.readBigNumber().toString());
        }
        return interfaces;
    }
    catch (e) {
        // In case of error: exit
        console.warn(e);
        return [];
    }
}
exports.getSupportedInterfacesRaw = getSupportedInterfacesRaw;
/**
 * Fetching supported interfaces
 * @param src address
 * @param client client
 * @returns array of supported interfaces
 */
async function getSupportedInterfaces(src, client) {
    let supprotedRaw = await getSupportedInterfacesRaw(src, client);
    return supprotedRaw.map((v) => {
        let k = resolveKnownInterface(v);
        if (k) {
            return { type: 'known', name: k };
        }
        else {
            return { type: 'unknown', value: v };
        }
    });
}
exports.getSupportedInterfaces = getSupportedInterfaces;
