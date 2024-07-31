import React from "react";

interface CardInterface {
    color?: string;
    qty?: string;
    text?: string;
    icon?: React.ReactNode;
}

export function Card({color, qty, text, icon}: CardInterface) {
    return (
        <div className={`p-6 flex gap-2 rounded-xl ${color ? color : 'bg-muted'}`}>
            <div className="flex-1 flex flex-col">
                <strong className="text-3xl font-bold text-muted-foreground">{qty}</strong>
                <span className="text-sm text-muted-foreground">{text}</span>
            </div>
            {icon}
        </div>
    );
}