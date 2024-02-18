import randomColor from "../utils/utils";

export default function Bar({percentage}){
    return (
        <div className="shadow-sm h-4 rounded-full bg-gray-50 max-w-96">
            <div className="h-full bg-teal-500 rounded-full relative flex items-center" style={{'width': `${percentage}%`, background: randomColor()}}>
                <div className="w-8 h-8 text-xs bg-white rounded-full absolute right-0 shadow-xl flex items-center justify-center">
                    {percentage}%
                </div>
            </div>
        </div>
        
    )
}