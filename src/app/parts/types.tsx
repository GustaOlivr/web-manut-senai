export type Part = {
  part_id: string,
  name: string,
  supplier: string,
  quantity_stock: number,
  unit_value: number,
  };
  
// Período de Tempo
export type TimePeriod = "last_week" | "last_30_days" | "last_6_months" | "last_year";

// Tipo de Relatório
export type ReportType = "most_sold" | "highest_stock" | "out_of_stock" | "most_profitable" | "highest_rotation";

// Categoria de Peças
export type PartCategory = "engine" | "brakes" | "suspension" | "electrical" | "accessories";

// Formato do Relatório
export type ReportFormat = "pdf" | "excel" | "csv";

// Agrupamento de Dados
export type DataGrouping = "by_category" | "by_brand" | "by_supplier" | "by_price_range";

// Filtro de Dados
export type DataFilter = "available_only" | "include_out_of_stock" | "filter_by_supplier" | "below_min_stock";
