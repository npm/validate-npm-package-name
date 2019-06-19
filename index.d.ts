declare namespace validate {
    export const scopedPackagePattern: RegExp;
}
interface result {
    validForNewPackages: boolean;
    validForOldPackages: boolean;
    warnings?: string[];
    errors?: string[];
}
declare function validate(name: string): result;
export = validate;