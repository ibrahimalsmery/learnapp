function PersonCard(props: { img: string, name: string, country: string }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-[479px] border-[1px]  rounded-[10px] p-[10px] card-border">
                <img src={props.img} className="rounded-[10px]" alt="person" />
                <p>{props.name} - {props.country}</p>
            </div>
        </>
    );
}

export default PersonCard;