import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')

  await page.getByLabel('Seu nome').fill('Lucas Maclean')

  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')

  await page.getByLabel('Seu telefone').fill('11999999999')

  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso!')

  await expect(toast).toBeVisible()

  // await page.waitForTimeout(1000)
})

test('sign up with wrong credentials', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza')

  await page.getByLabel('Seu nome').fill('JohnDoe')

  await page.getByLabel('Seu e-mail').fill('johndoeee@example.com')

  await page.getByLabel('Seu telefone').fill('11999999999')

  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()

  const toast = page.getByText(
    'Ocorreu um erro ao cadastrar o restaurante, tente novamente mais tarde.',
  )

  await expect(toast).toBeVisible()
})

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')

  await page.waitForTimeout(1000)
})
