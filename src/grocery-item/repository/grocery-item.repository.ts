import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { admin } from 'src/config/firebase.config';
import {
  groceryItemCollection,
  DEFAULT_PAGE_LIMIT,
} from 'src/constants/collections.constants';
import { GroceryItemRequestDto } from '../dto/req/grocery-item.dto';
import { GroceryItemResponseDto } from '../dto/res/grocery-item.res.dto';
import { ItemIdResponseDto } from '../dto/res/grocery-item-id.res.dto';
import { GroceryItemMapper } from '../mapper/grocery-item.mapper';
import { GroceryItem } from '../model/grocery-item.model';

@Injectable()
export class GroceryItemRepository {
  constructor(private readonly groceryItemMapper: GroceryItemMapper) {}

  public async createGroceryItem(
    body: GroceryItemRequestDto,
  ): Promise<ItemIdResponseDto> {
    try {
      Logger.log('Adding grocery item in firestore');
      const docId: admin.firestore.DocumentReference<admin.firestore.DocumentData> =
        await groceryItemCollection.add(body);
      return this.groceryItemMapper.fromJsonToItemIdResponse(docId.id);
    } catch (error) {
      Logger.log('error is: ', error.message);
      throw new UnauthorizedException(error.message);
    }
  }

  public async updateGroceryItem(
    itemId: string,
    body: GroceryItemRequestDto,
  ): Promise<void> {
    try {
      const item = new GroceryItem(body.name, body.description, body.picture);
      await groceryItemCollection.doc(itemId).set({ ...item });
      return;
    } catch (error) {
      Logger.log('error is: ', error.message);
      throw new UnauthorizedException(error.message);
    }
  }

  public async deleteGroceryItem(itemId: string): Promise<void> {
    try {
      await groceryItemCollection.doc(itemId).delete();
      return;
    } catch (error) {
      Logger.log('error is: ', error.message);
      throw new UnauthorizedException(error.message);
    }
  }

  public async getItems(
    itemId: string,
    startAfter: string,
    endBefore: string,
  ): Promise<GroceryItemResponseDto[]> {
    try {
      Logger.log('Getting items from firestore with item id: ', itemId);

      let itemsArray = [];

      if (itemId.length) {
        const items: any = await groceryItemCollection.doc(itemId).get();

        Logger.log('Returning item data with itemId', items.id);
        itemsArray.push(
          this.groceryItemMapper.fromJsonToGroceryItemResponse(items),
        );
      } else {
        let item: FirebaseFirestore.Query<FirebaseFirestore.DocumentData> =
          groceryItemCollection;
        item = item.orderBy('name', 'asc').limit(DEFAULT_PAGE_LIMIT);

        if (startAfter.length) {
          const lastDocument = await groceryItemCollection
            .doc(startAfter)
            .get();
          item = item.startAfter(lastDocument);
        } else if (endBefore.length) {
          const firstDocument = await groceryItemCollection
            .doc(endBefore)
            .get();
          item = item.endBefore(firstDocument);
        }

        const items: any = await item.get();
        Logger.log('Returning item all data');
        itemsArray =
          this.groceryItemMapper.fromJsonToGroceryItemResponseArray(items);
      }
      return itemsArray;
    } catch (error) {
      Logger.log('error is: ', error.message);
      throw new UnauthorizedException(error.message);
    }
  }
}
