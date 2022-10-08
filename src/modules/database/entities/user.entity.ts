import { USER_TABLE_NAME } from '@modules/database/constants';
import { UserRole } from '@modules/database/entities/userRole.entity';
import { GenderEnum } from '@modules/user/enums/gender.enum';
import { Optional } from 'sequelize';
import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { v4 } from 'uuid';

interface UserAttributes {
  id: string;
  prefix: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  password: string;
  dateOfBirth: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  userRoles: UserRole[];
}

type UserCreationAttributes = Optional<
  UserAttributes,
  'id' | 'deletedAt' | 'userRoles'
>;

@Table({
  timestamps: true,
  modelName: 'User',
  tableName: USER_TABLE_NAME,
  paranoid: true,
  freezeTableName: true,
})
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @IsUUID(4)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: () => {
      return v4();
    },
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @HasMany(() => UserRole)
  userRoles: UserRole[];

  // createUserRoles: HasManyCreateAssociationMixin<UserRole>;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  prefix: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  middleName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: { msg: 'Invalid Email Address Provided!' },
    },
  })
  email: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isNumeric: {
        msg: 'Phone number should not contain any special characters!',
      },
    },
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.ENUM,
    values: [
      GenderEnum.FEMALE,
      GenderEnum.MALE,
      GenderEnum.OTHER,
      GenderEnum.UNSPECIFIED,
    ],
    allowNull: false,
  })
  gender: string;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
  })
  dateOfBirth: Date;

  @Column
  @CreatedAt
  createdAt: Date;

  @Column
  @UpdatedAt
  updatedAt: Date;

  @Column
  @DeletedAt
  deletedAt: Date;
}
