

    interface TitleTableInterface {
        text: string;
    }

    export function TitleTable({text} : TitleTableInterface) {
    return (
        <h4 className="text-2xl font-bold uppercase w-full p-6 text-start">{text}</h4>
    );

}