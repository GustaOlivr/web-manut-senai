

    interface TitleTableInterface {
        text: string;
    }

    export function Title({text} : TitleTableInterface) {
    return (
        <h4 className="text-1xl font-bold w-full text-center">{text}</h4>
    );

}