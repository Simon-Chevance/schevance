import { technologies } from '../constants';

const chunkArray = <T,>(array: T[], size: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
};

export default function Skills() {
    const rows = chunkArray(technologies, 7);

    return (
        <div className="flex flex-col justify-center w-full">
            <div className="flex flex-col items-center justify-center">
                <p className="text-2xl text-neon-blue neon-blue-shadow">Skills.</p>
            </div>
            <div className="items-start">
                {rows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="flex justify-center gap-4 my-2"
                    >
                        {row.map((technology) => {
                            const IconComponent = technology.icon;
                            return (
                                <div
                                    key={technology.label}
                                    className="hover:bg-blue-600/70 cursor-pointer flex flex-col items-center p-2 rounded-sm"
                                >
                                    <IconComponent height={54} width={54} />
                                    <p className="text-white text-sm">
                                        {technology.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}
