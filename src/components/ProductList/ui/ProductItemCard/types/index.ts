import { IDataProduct } from '@store';

export interface IProductItemCardProps extends IDataProduct {
  isAuthorized?: boolean;
}
