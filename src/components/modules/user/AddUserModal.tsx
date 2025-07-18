import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { addUser } from "@/redux/features/user/userSlice";
import { type IUser } from "@/types";
import { Plus } from "lucide-react";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { useAppDispatch } from "@/redux/hook";
import TMForm from "@/components/form/TaskMasterForm";
import TMInput from "@/components/form/TaskMasterInput";

export function AddUserModal() {
  const dispatch = useAppDispatch();

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    const userData: IUser = {
      id: uuid(),
      name: data.name,
    };

    dispatch(addUser(userData));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Add User <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <TMForm className="space-y-3" onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add User</DialogTitle>
          </DialogHeader>

          <TMInput name="name" label="Name" />

          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </TMForm>
      </DialogContent>
    </Dialog>
  );
}
