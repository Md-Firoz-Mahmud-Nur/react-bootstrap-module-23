import { removeUser, selectUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { AddUserModal } from "@/components/modules/user/AddUserModal";
import { Trash2 } from "lucide-react";
import Container from "@/components/ui/container";

export default function User() {
  const users = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  return (
    <Container className="mt-20">
      <div className="flex justify-end">
        <AddUserModal />
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {users.map((user) => (
          <div className="border-2 border-primary rounded-md p-10 flex justify-between">
            <p className="text-xl font-bold">{user.name}</p>

            <Trash2
              onClick={() => dispatch(removeUser(user.id))}
              className="text-red-500 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
