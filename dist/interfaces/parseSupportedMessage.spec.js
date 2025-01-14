"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ton_core_1 = require("ton-core");
const parseSupportedMessage_1 = require("./parseSupportedMessage");
describe('parseSupportedMessage', () => {
    it('should parse jetton cashback message', () => {
        const parsed = (0, parseSupportedMessage_1.parseSupportedMessage)('org.ton.jetton.wallet.v1', ton_core_1.Cell.fromBoc(Buffer.from('te6cckEBAQEADgAAGNUydtsAAAAAAAAAAPfBmNw=', 'base64'))[0]);
        expect(parsed.type).toEqual('jetton::excesses');
    });
    it('should parse jetton transfer message', () => {
        const parsed = (0, parseSupportedMessage_1.parseSupportedMessage)('org.ton.jetton.wallet.v1', ton_core_1.Cell.fromBoc(Buffer.from('te6cckEBAQEAWAAArA+KfqUAAAAAAAAAACJxCAB860VNnJjzOWYUnx1yH/9dlDhACmJc4Y9le+MW/mPQtQAqOlU+tx9byiU4lKOluDPEa01EQspOTHW6LLi+WrhKqcgL68IA1dgR7g==', 'base64'))[0]);
        expect(parsed.type).toEqual('jetton::transfer');
    });
    it('should parse jetton cashback message', () => {
        const parsed = (0, parseSupportedMessage_1.parseSupportedMessage)('org.ton.jetton.wallet.v1', ton_core_1.Cell.fromBoc(Buffer.from('te6cckEBAQEAMgAAYHNi0JwAAAAAAAAAACJxCAFR0qn1uPreUSnEpR0twZ4jWmoiFlJyY63RZcXy1cJVTsZK1qQ=', 'base64'))[0]);
        expect(parsed.type).toEqual('jetton::transfer_notification');
    });
});
