import { ReactElement } from "react";

interface Props {
    imageUrl: string;
    content: ReactElement;
}

const Background = ({imageUrl, content}: Props) => {

    const bgStyle = {
        backgroundImage: `url('${imageUrl}')`,
    }

    return (
        <div className="min-h-screen">
            <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={bgStyle}>
                <div className="relative z-10 flex items-center justify-center h-full">
                    {content}
                </div>
            </div >
        </div>
    );
}

export default Background