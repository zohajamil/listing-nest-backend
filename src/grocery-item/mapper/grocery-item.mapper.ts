import { Injectable } from '@nestjs/common';
import { GroceryItemResponseDtoV2 } from '../dto/res/grocery-itemV2.res.dto';
import { GroceryItemResponseDto } from '../dto/res/grocery-item.res.dto';
import { ItemIdResponseDto } from '../dto/res/grocery-item-id.res.dto';
import { CompanyIdModel } from '../model/grocery-item1.model';

@Injectable()
export class GroceryItemMapper {
  public fromJsonToGroceryItemResponseArray(
    groceryItems: any,
  ): GroceryItemResponseDto[] {
    return groceryItems.docs.map((doc) => {
      return this.fromJsonToGroceryItemResponse(doc);
    });
  }

  public fromJsonToGroceryItemResponse(doc: any): GroceryItemResponseDto {
    return new GroceryItemResponseDto(
      doc.id,
      doc.data()['name'],
      doc.data()['description'],
      doc.data()['picture'],
    );
  }

  public fromJsonToCompanyListResponseArray(
    companies: any,
  ): GroceryItemResponseDtoV2[] {
    return companies.docs.map((doc) => {
      return this.fromJsonToCompanyListResponse(doc);
    });
  }

  public fromJsonToCompanyListResponse(doc: any): GroceryItemResponseDtoV2 {
    const companyListResponseDto = new GroceryItemResponseDtoV2(
      doc.id,
      doc.data()['name'],
    );
    return companyListResponseDto;
  }

  public fromJsonToCompanyIds(doc: any): CompanyIdModel {
    return new CompanyIdModel(doc.id);
  }

  public fromJsonToItemIdResponse(itemId: string): ItemIdResponseDto {
    return new ItemIdResponseDto(itemId);
  }
}
