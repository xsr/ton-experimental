/// <reference types="node" />
import { Address, Cell } from "ton-core";
import { KnownInterface } from "./getSupportedInterfaces";
export type SupportedMessage = {
    type: string;
    data: {
        [key: string]: bigint | string | number | boolean | Buffer | Cell | Address | null;
    };
};
export declare function parseSupportedMessage(knownInteface: KnownInterface, message: Cell): SupportedMessage | null;
