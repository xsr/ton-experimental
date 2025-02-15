import { Address } from "ton-core";
import { TonClient } from "ton";
export type KnownInterface = 'org.ton.introspection.v0' | 'com.tonwhales.nominators:v0' | 'org.ton.jetton.master.v1' | 'org.ton.jetton.wallet.v1';
export type SupportedInterface = {
    type: 'known';
    name: KnownInterface;
} | {
    type: 'unknown';
    value: string;
};
/**
 * Resolves known interface
 * @param src source id
 * @returns known interface
 */
export declare function resolveKnownInterface(src: string): KnownInterface | null;
/**
 * Fetching supported interfaces
 * @param src address
 * @param client client
 * @returns array of supported interfaces
 */
export declare function getSupportedInterfacesRaw(src: Address, client: TonClient): Promise<string[]>;
/**
 * Fetching supported interfaces
 * @param src address
 * @param client client
 * @returns array of supported interfaces
 */
export declare function getSupportedInterfaces(src: Address, client: TonClient): Promise<SupportedInterface[]>;
