import Bar from "./Bar";

export default function BarLists({ status }) {
    return (
        <div className="flex flex-col gap-3">
            {
                status?.map((item) => {
                    return (
                        <div key={item?.stat?.name} className="grid gap-2 grid-cols-[8rem_1fr] items-center">
                            <p className="text-black">{item?.stat?.name}</p>
                            <Bar percentage={item?.base_stat} />
                        </div>
                    )
                })
            }
        </div>
    )
}