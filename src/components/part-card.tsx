interface PartCardInterface {
    nome: string;
    codigo: string;
    fornecedor: string;
    valor_unitario: number;
    qtd_consumida: number;
    color?: string;
}


export function PartCard({nome,codigo,fornecedor,valor_unitario,qtd_consumida,color}: PartCardInterface){
    return (
        <div className={`p-2 flex gap-2 rounded-xl ${color ? color : 'bg-muted'} items-center`}>
            <div className="flex-1 flex flex-col  items-start">
                <strong className="text-lg font-bold text-muted-foreground">{nome}</strong>
                <span className="text-sm text-secondary-foreground">Valor Unit: <strong className="text-muted-foreground">{valor_unitario}</strong></span>
                <span className="text-sm text-secondary-foreground">Fornecedor: <strong className="text-muted-foreground">{fornecedor}</strong></span>
                <span className="text-sm text-secondary-foreground">QTD. Consumida: <strong className="text-muted-foreground">{qtd_consumida}</strong></span>
                <span className="text-sm text-secondary-foreground">Codigo: <strong className="text-muted-foreground">{codigo}</strong></span>

            </div>
        </div>
    )
}