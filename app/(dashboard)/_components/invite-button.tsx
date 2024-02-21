import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog"



export const InviteButton = () => {
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline'>
                    <Plus className="h-4 w-4 mr-2"/>
                    Invite members
                </Button>
            </DialogTrigger>
            <DialogContent className="border-none bg-transparent max-w-[850px] p-0 mr-[85px]">
                <OrganizationProfile />
            </DialogContent>
        </Dialog>
    )
}