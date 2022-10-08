import { USER_TABLE_NAME } from '@modules/database/constants';
import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
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
    type: DataType.UUID,
    defaultValue: () => {
      return v4();
    },
    allowNull: false,
  })
  id: string;

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
  })
  email: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.ENUM,
    values: ['male', 'female'],
    allowNull: false,
  })
  gender: string;

  @Column({
    type: DataType.DATEONLY,
    values: ['male', 'female'],
    allowNull: false,
  })
  dateOfBirth: Date;

  @Column
  @CreatedAt
  CreatedAt: Date;

  @UpdatedAt
  UpdatedAt: Date;

  @DeletedAt
  DeletedAt: Date;
}
