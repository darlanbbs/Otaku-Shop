import { FilterType } from "@/components/enum/FilterTypeEnum";
import { PriorityTypes } from "@/components/enum/PriorityTypeEnum";

export function getCategory(type: FilterType) {
  switch (type) {
    case FilterType.allProducts:
      return "";
    case FilterType.clothes:
      return "clothes";
    case FilterType.acessorys:
      return "acessorys";
    case FilterType.figures:
      return "figures";
    default:
      return "";
  }
}

export function getPriority(type: PriorityTypes) {
  switch (type) {
    case PriorityTypes.NEWS:
      return { field: "created_at", order: "ASC" };
    case PriorityTypes.MINOR_PRICE:
      return { field: "price_in_cents", order: "ASC" };
    case PriorityTypes.BIGGEST_PRICE:
      return { field: "price_in_cents", order: "DSC" };
    case PriorityTypes.POPULARITY:
      return { field: "sales", order: "DSC" };
    default:
      return { field: "created_at", order: "ASC" };
  }
}

export const mountQuery = (type: FilterType, priority: PriorityTypes) => {
  const sortSettings = getPriority(priority);
  const categoryFilter = getCategory(type);

  if (type === FilterType.allProducts && priority === PriorityTypes.NEWS) {
    return `
      query{
        allProducts(sortField:"sales",sortOrder:"DSC"){
          id
          name
          price_in_cents
          image_url
        }
      }
        `;
  }

  return `
      query {
          allProducts(sortField: "${sortSettings.field}", sortOrder: "${
    sortSettings.order
  }", ${categoryFilter ? `filter: { category: "${categoryFilter}"}` : ""}) {
            id
            name
            price_in_cents
            image_url
            category
          }
        }
      `;
};
