import { UserAuthForm } from "@/components/Pages/(auth)/Login/user-auth-form"

const LoginPage = () => {
  return (
    <main className="min-h-screen">
      <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-slate-900" />
        </div>

        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Login to your account</h1>
              <p className="text-sm text-muted-foreground">Enter your email and password in the fields below</p>
            </div>

            <UserAuthForm />

            <p className="px-8 text-center text-sm text-muted-foreground">By loging in you ensure that you are a part of this company.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LoginPage
