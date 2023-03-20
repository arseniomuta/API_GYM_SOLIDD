import request from 'supertest'
import { app } from '@/app'
import { describe, beforeAll, afterAll, it, expect } from 'vitest'

describe('Register (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('Should be able to register', async () => {
    const response = await request(app.server).post('/users').send({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '12345',
    })

    expect(response.statusCode).toEqual(201)
  })
})
