import randomColor from "../utils/utils"

export default function Chip({ name }) {
    return (
        <span className="px-5 py-1 rounded-full text-gray-700 shadow-lg border backdrop-blur" style={{ borderColor: randomColor() }}>
            {name}
        </span>
    )
}