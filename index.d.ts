export default function validate(name: string): {
    validForNewPackages: boolean
    validForOldPackages: boolean
    warnings?: string[]
    errors?: string[]
}
