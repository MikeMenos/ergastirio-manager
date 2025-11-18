import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginCard() {
  return (
    <Card className="w-full max-w-sm flex">
      <CardHeader>
        <CardTitle>Καλωσορίσατε στην εφαρμογή</CardTitle>
        <CardDescription>
          Εισάγετε τα στοιχεία σας για να συνδεθείτε
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">ΑΦΜ</Label>
              <Input
                id="AFM"
                type="AFM"
                placeholder="Πληκτρολογήστε το ΑΦΜ σας"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Κωδικός</Label>
              </div>
              <Input id="password" type="password" placeholder="6·ψήφιο pin" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Είσοδος
        </Button>
        {/* <Button variant="outline" className="w-full">
          magic pin
        </Button> */}
      </CardFooter>
    </Card>
  )
}
