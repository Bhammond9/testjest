export declare class StringUtils {
    toUpperCase(arg: string): string;
}
export declare function toUpperCase(arg: string): string;
export type stringInfo = {
    lowerCase: string;
    upperCase: string;
    characters: string[];
    length: number;
    extraInfo: Object | undefined;
};
export declare function getStringInfo(arg: string): stringInfo;
