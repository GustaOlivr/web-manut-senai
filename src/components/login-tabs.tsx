import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function LoginTabs() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Login</TabsTrigger>
        <TabsTrigger value="password">Crie sua conta</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
            Seja bem-vindo novamente 
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
            <Label htmlFor="username">Nome de usuário</Label>
            <Input id="username" placeholder="@oficina.admin" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password" >Senha</Label>
              <Input type="password" id="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Crie uma conta</CardTitle>
            <CardDescription>
              Seja bem-vindo ao Sistema de Manutenção da Oficina Motocenter
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="new_name">Nome completo</Label>
              <Input id="new_name" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new_email">E-mail</Label>
              <Input id="new_email" type="email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new_username">Nome de usuário</Label>
              <Input id="new_username" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new_password">Senha</Label>
              <Input id="new_password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <div className="">
            <Button>Cadastrar-se</Button>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
