import { ReactElement } from "react";

interface Props {
    imageUrl: string;
    content: ReactElement;
    header: string;
    footer: string;
}

const Background = ({imageUrl, content, header, footer}: Props) => {

    const bgStyle = {
        backgroundImage: `url('${imageUrl}')`,
    }

    return (
        <div className="min-h-screen">
            <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={bgStyle}>
                <div className="relative z-10 flex flex-col justify-center h-screen">
                    <header className="py-5 bg-gray-500 text-5xl text-white text-center font-teaChestRegular">{header}</header>
                    <header className="h-10"></header>
                    <main className="flex-1 overflow-y-auto px-10 py-5">
                    {content}
                    </main>
                    <footer className="h-10"></footer>
                    <footer className="py-5 bg-gray-500 text-5xl text-center text-white font-teaChestRegular">{footer}</footer>
                </div>
            </div >
        </div>
    );
}

export default Background