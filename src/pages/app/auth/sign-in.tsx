import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export default function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  const handleSignIn = async (data: SignInForm) => {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Enviamos um link de autenticação para o seu e-mail.', {
        action: {
          onClick: () => handleSignIn(data),
          label: 'Reenviar',
        },
      })
    } catch (error) {
      console.error(error)
      toast.error('Ocorreu um erro, tente novamente mais tarde.')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8" variant={'ghost'}>
          <Link to={'/sign-up'}>Novo estabelecimento</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas{' '}
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="flex flex-col gap-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')}></Input>
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
