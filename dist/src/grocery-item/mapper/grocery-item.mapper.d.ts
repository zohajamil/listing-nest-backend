import { GroceryItemResponseDtoV2 } from '../dto/res/grocery-itemV2.res.dto';
import { GroceryItemResponseDto } from '../dto/res/grocery-item.res.dto';
import { ItemIdResponseDto } from '../dto/res/grocery-item-id.res.dto';
import { CompanyIdModel } from '../model/grocery-item1.model';
export declare class GroceryItemMapper {
    fromJsonToGroceryItemResponseArray(groceryItems: any): GroceryItemResponseDto[];
    fromJsonToGroceryItemResponse(doc: any): GroceryItemResponseDto;
    fromJsonToCompanyListResponseArray(companies: any): GroceryItemResponseDtoV2[];
    fromJsonToCompanyListResponse(doc: any): GroceryItemResponseDtoV2;
    fromJsonToCompanyIds(doc: any): CompanyIdModel;
    fromJsonToItemIdResponse(itemId: string): ItemIdResponseDto;
}
