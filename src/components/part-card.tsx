interface PartCardInterface {
    nome: string;
    codigo: string;
    fornecedor: string;
    valor_unitario: string;
    qtd_consumida: string;
    color: string;
}


export function PartCard({nome,codigo,fornecedor,valor_unitario,qtd_consumida}: PartCardInterface){
    return (
        <div className={`p-2 flex gap-2 rounded-xl ${color ? color : 'bg-muted'} items-center`}>
            <div className="flex-1 flex flex-col">
                <strong className="text-3xl font-bold text-muted-foreground">{qty}</strong>
                <span className="text-sm text-muted-foreground">{text}</span>
            </div>
        </div>
    )
}