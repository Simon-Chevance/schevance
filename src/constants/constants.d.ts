declare module "../constants" {
    export interface NavLink {
        id: number;
        label: string;
        icon: React.FC<React.SVGProps<SVGSVGElement>>;
        path: string;
    }

    export interface Technology {
        label: string;
        icon: React.FC<React.SVGProps<SVGSVGElement>>;
    }

    export const navLinks: NavLink[];
    export const technologies: Technology[];
}
