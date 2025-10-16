function EductionTextCard(props: { title: string, description: string, icon: string }) {
    return (<>
        {/*  education methodology */}
        <div className="md:w-[1000] flex flex-col justify-start items-start  bg-[#DCF1FF] px-[10px] rounded-[20px]">
            <div className="flex justify-between items-center w-full ">
                <p className="semibold-40">{props.title}</p>
                <p className="text-[100px]">{props.icon}</p>
            </div>
            <p className="semibold-24 h-[90px]">{props.description}</p>
        </div>
    </>);
}

export default EductionTextCard;