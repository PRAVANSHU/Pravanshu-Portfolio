import React from "react";

type Props = {
    icon : string;
    name: string;
};

const Skill = ({icon,name}: Props) => {
    return <div className="relative flex gap-2 p-2 border-primary border rounded-lg h-[46px] font-serif">
        <img src={icon} alt={'${name} icon'}  className="w-6 h-6 object-contain" />
        <p className="text-lg">{name}</p>
    </div>
};

export default Skill;