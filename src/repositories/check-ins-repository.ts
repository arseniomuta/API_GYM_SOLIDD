import { Checkin, Prisma } from '@prisma/client'

export interface CheckinsRepository {
  findById(id: string): Promise<Checkin | null>
  create(data: Prisma.CheckinUncheckedCreateInput): Promise<Checkin>
  findManyByUserId(userId: string, page: number): Promise<Checkin[]>
  countByUserId(userId: string): Promise<number>
  findByUserIdOnDay(userId: string, date: Date): Promise<Checkin | null>
  save(checkIn: Checkin): Promise<Checkin>
}
