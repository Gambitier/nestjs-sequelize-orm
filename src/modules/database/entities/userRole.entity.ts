import { UserRoleEnum } from '@modules/auth/common';
import { USER_ROLE_TABLE_NAME } from '@modules/database/constants';
import { User } from '@modules/database/entities/user.entity';
import { Optional } from 'sequelize';
import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { v4 } from 'uuid';

interface UserRoleAttributes {
  id: string;
  role: string;
  userId: string;
  user?: User;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type UserRoleCreationAttributes = Optional<
  UserRoleAttributes,
  'id' | 'deletedAt' | 'user'
>;

@Table({
  timestamps: true,
  modelName: 'UserRole',
  tableName: USER_ROLE_TABLE_NAME,
  paranoid: true,
  freezeTableName: true,
})
export class UserRole extends Model<
  UserRoleAttributes,
  UserRoleCreationAttributes
> {
  @IsUUID(4)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: () => {
      return v4();
    },
    allowNull: false,
  })
  id: string;

  @Column({
    type: DataType.ENUM,
    values: [UserRoleEnum.USER, UserRoleEnum.ADMIN],
    allowNull: false,
  })
  role: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId: string;

  @BelongsTo(() => User, {
    keyType: DataType.UUID,
    targetKey: 'id',
  })
  user: User;

  @Column
  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
