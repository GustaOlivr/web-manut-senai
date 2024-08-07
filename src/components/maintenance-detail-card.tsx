import { Maintenance } from "@/app/manutencoes/columns";

type ModalMotorcycleDetailsProps = {
    maintanence: Maintenance,
  };

export function MaintenanceDetailCard({maintanence}: ModalMotorcycleDetailsProps) { 

    
    return (
    <div>
        <div>
        <p><strong>ID:</strong> {maintanence.id}</p>
        <p><strong>Tipo:</strong> {maintanence.moto}</p>
        <p><strong>Modelo:</strong> {maintanence.status}</p>
      </div>
      <div>
        <h3 className="text-lg mt-4 pb-4">Peças Utilizadas:</h3>
        {maintanence.pecas.length > 0 ? (
          <ul className="list-disc pb-8 bg-muted w-80 h-max rounded-sm">
            {maintanence.pecas.map((peca, index) => (
              <li key={index}>
                <div>
                  <div className="p-2">
                      <p className="text-muted-foreground pb-2"><strong>{peca.nome}</strong></p>
                      <p><strong>Código:</strong> {peca.codigo}</p>
                      <p><strong>Fornecedor:</strong> {peca.fornecedor}</p>
                      <p><strong>Valor Unitário:</strong> R$ {peca.valor_unitario.toFixed(2)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma peça utilizada nesta manutenção.</p>
        )}
      </div>
      </div>
    )
}