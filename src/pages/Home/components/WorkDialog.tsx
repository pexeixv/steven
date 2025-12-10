import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import WetDryPlayer from './WetdryPlayer'

function WorkDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white rounded-full cursor-pointer bg-sky-500 hover:bg-sky-600">
          Listen to my work
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>
            <h2 className="mb-4 text-4xl font-bold text-center text-white lg:text-5xl">
              Take a look at my <span className="text-sky-500">work</span>
            </h2>
          </DialogTitle>
          <DialogDescription></DialogDescription>
          <WetDryPlayer />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default WorkDialog
