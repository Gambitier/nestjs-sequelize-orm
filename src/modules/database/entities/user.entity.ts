import { USER_TABLE_NAME } from '@modules/database/constants';
import { UserRole } from '@modules/database/entities/user.role.entity';
import { GenderEnum } from '@modules/user/enums/gender.enum';
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

@Table({
  timestamps: true,
  modelName: 'User',
  tableName: USER_TABLE_NAME,
  paranoid: true,
  freezeTableName: true,
})
export class User extends Model<User> {
  @IsUUID(4)
  @PrimaryKey
  @Column({
    type: DataType.UUIDV4,
    defaultValue: () => {
      return v4();
    },
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @HasMany(() => UserRole)
  userRoles: UserRole[];

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
